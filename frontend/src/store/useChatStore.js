import {defineStore} from "pinia";
import axios from "axios";
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import {useUserStore} from "@/store/useUserStore";

const backend = "/api";

export const useChatStore = defineStore("chat", {
    state: () => ({
        selectedChatRoom: {
            chatRoomId: 0,
            recipientNickname: "",
            recipientProfile: "",
            recipientId: 0
        },
        chatRoomList: [
            {
                recipientNickname: "",
                chatRoomId: 0,
                recipientProfile: "",
                recipientId: 0,
                lastMessage: "",
                lastMessageDay: ""
            }
        ],
        chatMessageList: [
            {
                message: "",
                sendTime: "",
                senderId: 0
            }
        ],
        stompClient: null,
    }),
    actions: {
        async startChat(nickname) {
            const startChatReq = {
                nickname: nickname,
            }
            const res = await axios.post(backend + "/chat/start", startChatReq, {withCredentials: true});
            this.selectedChatRoom = res.data.result;
        },
        async getChatRoomList() {
            const res = await axios.get(backend + "/chat/chatRoomList", {withCredentials: true})
            this.chatRoomList = res.data.result;
            if (this.chatRoomList.length === 0 || this.selectedChatRoom.chatRoomId !== 0) {
                return;
            }
            this.selectedChatRoom = {
                chatRoomId: this.chatRoomList[0].chatRoomId,
                recipientNickname: this.chatRoomList[0].recipientNickname,
                recipientProfile: this.chatRoomList[0].recipientProfile,
                recipientId: this.chatRoomList[0].recipientId
            }
        },
        async getChatMessageList(page) {
            if (this.chatRoomList.length === 0) {
                this.chatMessageList = [];
                return;
            }
            const res = await axios.get(backend + "/chat/messageList", {
                params: {
                    chatRoomId: this.selectedChatRoom.chatRoomId,
                    page: page,
                    size: 20
                },
                withCredentials: true
            });
            this.chatMessageList = res.data.result;
            if (this.chatMessageList.length !== 0){
                for (let idx=0; idx < this.chatRoomList.length; idx++){
                    if (this.chatRoomList[idx].chatRoomId === this.selectedChatRoom.chatRoomId) {
                        this.chatRoomList[idx].lastMessage = this.chatMessageList[0].message;
                        this.chatRoomList[idx].lastMessageDay = this.chatMessageList[0].sendTime;
                    }
                }
            }
            this.connect();

        },
        connect() {
            const serverUrl = backend +"/ws/chat";
            let socket = new SockJS(serverUrl, null, {withCredentials: true});
            this.stompClient = Stomp.over(socket);
            console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverUrl}`)
            this.stompClient.connect(
                {},
                frame => {
                    // this.connected = true;
                    console.log("소켓 연결 성공", frame);

                    this.stompClient.subscribe("/sub/chatroom/" + this.selectedChatRoom.chatRoomId, res => {
                        console.log("구독으로 받은 메시지 입니다.", res.body);
                        const message = (JSON).parse(res.body);
                        if (message.senderId !== useUserStore().$state.userId) {
                            console.log(message);
                            this.chatMessageList.unshift(message);
                            this.updateChatRoomData(this.selectedChatRoom.chatRoomId, message.message, message.sendTime);
                        }
                    })
                }
            )
        },
        disconnect() {
            if (this.stompClient !== null){
                this.stompClient.disconnect();
            }
            // console.log("소켓 연결 해제");
        },
        send(message) {
            console.log("Send Message:" + message);

            if (this.stompClient && this.stompClient.connected) {
                const msg = {
                    message: message,
                    sendTime: this.formatDateTime(),
                    chatRoomId: this.selectedChatRoom.chatRoomId,
                    senderId: useUserStore().$state.userId
                };
                this.stompClient.send("/pub/message/" + this.selectedChatRoom.chatRoomId, JSON.stringify(msg), {});
            }
        },
        sendMessage(message) {
            if (message !== '') {
                this.send(message);
            }
            const msg = {
                message: message,
                sendTime: this.formatDateTime(),
                senderId: useUserStore().$state.userId
            };

            console.log(msg);
            this.chatMessageList.unshift(msg);
            this.updateChatRoomData(this.selectedChatRoom.chatRoomId, msg.message, msg.sendTime);
        },

        formatDateTime() {
            const date = new Date();

            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
            const day = String(date.getDate()).padStart(2, "0");
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");

            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        },
        updateChatRoomData(chatRoomId, message, sendTime) {
            for (const chatRoom of this.chatRoomList) {
                if (chatRoom.chatRoomId === chatRoomId) {
                    chatRoom.lastMessage = message;
                    chatRoom.lastMessageDay = sendTime
                }
            }
        }


    }
})