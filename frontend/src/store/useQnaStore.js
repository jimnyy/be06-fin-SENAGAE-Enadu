import { defineStore } from "pinia";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401 에러 처리");
    } else if (error.response && error.response.status === 405) {
      console.log("405 에러 처리");
    } else if (error.response && error.response.status === 304) {
      console.log("304 에러 처리");
    }
  }
);

export const useQnaStore = defineStore("qna", {
  state: () => ({
    qnaCards: [],
  }),
  actions: {
    async getQnaList() {
      let res = await axios.get(
        "http://localhost:8080/qna/list"
      );
      if (typeof res.data === "string") {
        this.qnaCards = JSON.parse(res.data).result;
      } else {
        this.qnaCards = res.data.result;
      }

      if (res.status === 200) {
        console.log(this.qnaCards);
        this.qnaCards = res.data.result;
      }
    },
    async registerQna(myTitle, myText) {
      const data = {
        title: myTitle,
        content: myText,
        categoryId: 1
      };

      try {
        let res = await axios.post("http://localhost:8080/qna", data);

        if (res.status === 200) {
          console.log("Q&A 등록 성공:", res.data);
        }
      } catch (error) {
        console.error("Q&A 등록 실패:", error);
      }
    }

  },

});