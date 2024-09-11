import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import QnaListPage from "@/pages/QnaListPage.vue";
import WikiRegisterPage from "@/pages/wiki/WikiRegisterPage.vue";
import ChatPgae from "@/pages/ChatPgae.vue";
import QnaRegisterComponent from "@/components/qna/QnaRegisterComponent.vue";
import ErrorArchiveRegisterPage from "@/pages/ErrorArchiveRegisterPage.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage, meta: { showHeader: false }},
    { path: "/qna-list", component: QnaListPage },
    { path: "/qna/register", component: QnaRegisterComponent },
    { path: "/wiki", component: WikiRegisterPage },
    { path: "/chat", component: ChatPgae },
    { path: "/errorarchive", component: ErrorArchiveRegisterPage }
  ]
  
});

export default router;
