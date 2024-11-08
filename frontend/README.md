<br>

<h1 align="center"> 개발자 지식 공유 플랫폼 Enadu - Front </h1>
<br>
<div align="center">
<img src="https://github.com/user-attachments/assets/3f6df515-9e11-4b63-b4e1-c35d22176721" style="width: 60%;">
</div>

<br>


---
## 🛠 기술 스택
---
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" /> ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) <br>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"/> <img src="https://img.shields.io/badge/pinia-gold?style=for-the-badge&logo=Pinia&logoColor=white"/>

---

### 1. 에나두 화면 설계서
[화면 설계서 바로가기](https://www.figma.com/design/m7hJQ7xwdigDITERHFxOaO/%EC%97%90%EB%82%98%EB%91%90-%ED%99%94%EB%A9%B4-%EC%84%A4%EA%B3%84%EC%84%9C?node-id=4700-2135&node-type=frame&t=qAb7mtL2BFA6NjKI-0")</a>

### 2. 주요 기능
<details>
<summary>회원가입</summary>

![image](https://github.com/user-attachments/assets/6ef2e630-2ca7-4b7a-9a04-701e23910757)
> 이메일, 비밀번호, 닉네임, 프로필 이미지(필수 X)로 회원 가입을 한다.  
> 이메일, 닉네임은 **중복이 불가능**하다.
</details>

<details>
<summary>로그인</summary>

![image](https://github.com/user-attachments/assets/56220ef1-c825-4e00-aebb-ee879074f307)
> 일반 로그인, 소셜(Github) 로그인

<img width="1361" alt="image" src="https://github.com/user-attachments/assets/15cb6985-03af-4fd5-a8f2-ac389420e747">

> 소셜 로그인은 소셜로 로그인 한 후 최초 로그인시 동의를 받는다.
</details>

<details>
<summary>검색</summary>

### 통합 검색
![통합검색](https://github.com/user-attachments/assets/9e1d18b7-f0e5-4699-91c0-3ce32f73e78b)
> 헤더에 있는 검색창으로 3개의 게시판 **통합 검색** 가능하다.  
> 검색 후 원하는 게시판으로 더보기 버튼 누를 시 해당 **검색어 유지** 된 상태로 페이지 이동을 한다.
---
### 게시판 별 검색
![상세검색](https://github.com/user-attachments/assets/643c30ae-bbc9-4e6d-9e4d-2f48745b6a0e)
> 게시판 별로 상세 검색이 가능하다.  
> **카테고리**(상위, 하위), **범위**(제목+내용, 제목, 내용), **정렬**(최신순, 좋아요순, 검색 시에만 가능한 **정확도순**)
</details>

<details>
<summary>에러 아카이브 </summary>

### 목록
![image](https://github.com/user-attachments/assets/fd67c4d3-e1d3-415a-9071-bc29b6b422af)
> 에러 아카이브 목록을 페이징 처리한다.  
> 상단에 검색 및 정렬 기능이 있다.
---
### 상세
<img width="1364" alt="image" src="https://github.com/user-attachments/assets/d55c088e-2b34-40ff-8ca7-45d812a05120">

> **마크다운**으로 작성된 내용  
> 우측 목차를 통해 해당 부분 이동이 가능하다.  
> 로그인 한 유저는 스크랩, 좋아요/싫어요 기능 사용이 가능하다.  
> 유저 닉네임 클릭해 유저로그(작성내역), 1대1 채팅이 가능하다.
---
### 등록
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/f77cc53e-33b5-4376-b1f5-8d16f6a6c84c">

> 제목, 상위 카테고리, 하위 카테고리(필수 X), 본문  
> 로그인 한 유저만 작성이 가능하다.  
> 본문은 **마크다운** 방식으로 작성이 가능하다.  

<img width="1362" alt="image" src="https://github.com/user-attachments/assets/c0190dac-82bf-46af-8162-57c8270a78a5">
<img width="1364" alt="image" src="https://github.com/user-attachments/assets/6e09828a-28a8-4485-bb67-b3aa5fe08108">

> 작성중인 글에 원하는 카테고리를 상위, 하위로 나눠 선택이 가능하다.  
> 하위 카테고리 선택은 **필수가 아니며**, 필요한 하위 카테고리가 없을 시 **생성**이 가능하다.  
> 상단의 검색창을 통해 **카테고리 검색**이 가능하다.
</details>

<details>
<summary>위키</summary>

### 목록
<img width="1365" alt="image" src="https://github.com/user-attachments/assets/6311e855-7660-4a9c-a144-d12f886cba86">

> 위키 목록을 페이징 처리  
> 상단에 검색 기능이 있다.  
> 로그인 안 한 유저나 '뉴비'등급 유저는 위키 **등록이 불가능**하다.
---
### 상세
<img width="1367" alt="image" src="https://github.com/user-attachments/assets/587838c5-d4fb-4e58-8531-18a458e8c7e3">

> **마크다운**으로 작성된 내용  
> 제목 하단에 **현재 버전** 명시되어 있다.  
> 우측 목차를 통해 해당 부분 이동이 가능하다.  
> 로그인 한 유저는 스크랩 할 수 있다.  
> 로그인 안 한 유저나 '뉴비'등급 유저는 위키 **수정이 불가능**하다.
---
### 이전 버전 목록
<img width="1366" alt="image" src="https://github.com/user-attachments/assets/7d3dd4dc-9e9f-4c0f-ab8c-e21e25191b40">

> 작성 날짜, 작성 유저, 버전  
> 해당 위키의 **이전 버전** 내역을 볼 수 있다.
> 버전을 클릭하면 해당 버전 내용 확인이 가능하다.  
> '이 버전으로 되돌리기' 버튼으로 **롤백**시 선택한 버전이 **새로운 버전**으로 등록할 수 있다.  
> 로그인 안 한 유저나 '뉴비'등급 유저는 위키 **롤백이 불가능**하다.  
</details>

<details>
<summary>QnA - 질문</summary>

### 목록
<img width="1363" alt="image" src="https://github.com/user-attachments/assets/22572d84-691d-4fc7-9b4a-b093908130cd">

> 에러 아카이브 목록을 페이징 처리한다.  
> 상단에 검색 및 정렬 기능이 있다.
### 상세
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/6431a47f-6d68-4567-bf20-eed750fbc1b7">

> **마크다운**으로 작성된 질문  
> 로그인 한 유저는 스크랩, 좋아요/싫어요를 할 수 있다.  
> 유저 닉네임 클릭해 유저로그(작성내역), 1대1 채팅이 가능하다.
</details>

<details>
<summary>QnA - 답변</summary>

### 답변 상세
<img width="1364" alt="image" src="https://github.com/user-attachments/assets/a1086afa-e6b0-4754-a23a-f10bdf20c227">

> 마크다운으로 작성된 내용
> 로그인 한 유저는 스크랩, 좋아요/싫어요 기능 사용이 가능하다.
> 유저 닉네임 클릭해 유저로그(작성내역), 1대1 채팅이 가능하다.
---
### 답변 작성
<img width="1367" alt="image" src="https://github.com/user-attachments/assets/76ce20de-aa04-41dd-8ca1-a6b1630404ea">

> 로그인 한 유저만 작성이 가능하다.  
> 본문은 **마크다운** 방식으로 작성이 가능하다.
---
### AI(Gemini) 답변

<img width="1368" alt="image" src="https://github.com/user-attachments/assets/759d239c-3a88-41b0-9fc6-2de6111b007c">

> 1시간마다 질문이 안 달린 글들에 AI 답변이 달린다.
---
### 채택 및 댓글
<img width="1369" alt="image" src="https://github.com/user-attachments/assets/5d767b81-72f3-4ea8-9a32-eb5ddabf97e6">

> 채택이 된 답변은 우측 상단에 '채택 완료'라고 표시된다.  
> 질문자나 답변자 외에도 댓글을 자유롭게 달 수 있으며 댓글의 대댓글도 작성할 수 있다.
</details>

<details>
<summary>좋아요 / 싫어요, 스크랩</summary>

![무제](https://github.com/user-attachments/assets/d9f850da-4852-49f2-9e75-4c825d30bad9)
> 로그인한 유저는 게시판별로 좋아요/싫어요, 스크랩이 가능  
> 위키는 스크랩만 가능  
> 스크랩한 문서들은 마이페이지에서 확인 가능
</details>

<details>
<summary>랭킹</summary>

### 일간 랭킹
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/3d3fcd6d-5c8d-4956-ae2e-dbc1920c36ff">

> **매일** 자정 **누적된 포인트**를 기준으로 랭킹을 갱신한다  
> 유저들의 순위, 등급, 프로필 이미지, 닉네임, 누적 포인트 확인을 할 수 있다.

<img width="1346" alt="image" src="https://github.com/user-attachments/assets/0e737028-dd0e-4ea7-b168-b3751abbabf6">

> 로그인 한 유저는 상단에 본인의 등급, 포인트, 일간 순위 및 주간 순위를 확인할 수 있다.
### 주간 랭킹
<img width="1350" alt="image" src="https://github.com/user-attachments/assets/c6a14c68-eae9-4bc7-93ac-e92720694b23">

> **매주** 월요일 자정 **지난 일주일간 쌓인 포인트**를 기준으로 랭킹을 갱신한다.  
> 유저들의 순위, 등급, 프로필 이미지, 닉네임, 주간 포인트 확인할 수 있다.
</details>

<details>
<summary>1:1 채팅</summary>

![채팅](https://github.com/user-attachments/assets/b591b535-1e82-4d64-9adc-3bd6504ac695)
> 유저에게 1대1 **실시간 채팅**이 가능하다.  
> 좌측에 **채팅방 목록**을 확인할 수 있다.
</details>
