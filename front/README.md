# Register

> React로 Sign Up Form 만들기
> 개발 기간: 24.02.22 - 02.27

<br/>
<br/>
<br/>

## 🐇 기술스택

**언어 및 라이브러리**

<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">

<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

</div>

**설계 및 환경**

<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/VS CODE-007ACC?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

<br/>
<br/>
<br/>

#### 기능 ⚡

- 메인 페이지 (/)
- 가입 페이지 (/join)
  - Toast 형태로 가입 완료 알람
  - 유효성 검사
    - ID : 이메일 정규식
    - PW : 8자 이상 16자 이하 + 영문자/숫자/특수문자 1개 이상
    - PW_CONFIRM : 비밀번호 확인
  - 회원가입 버튼
    - onChange로 정규식 안 맞을 때 에러 메시지 띄우기
    - 모두 입력했을 시 회원가입 버튼 `활성화`
    - 입력받은 데이터 alert
