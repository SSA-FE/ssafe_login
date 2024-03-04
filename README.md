# Login

> Sign up Develope해서 Login 만들기
> 개발 기간: 24.03.04 -

<br/>
<br/>
<br/>

## 🐇 기술스택

**추가 라이브러리**

<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

<img src="https://img.shields.io/badge/jsonwebtokens-000?style=for-the-badge&logo=jsonwebtokens&logoColor=white">

</div>

**설계 및 환경**

<div style="display:flex; margin-bottom:20px;">

<img src="https://img.shields.io/badge/VS CODE-007ACC?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

<br/>
<br/>
<br/>

## 👻 구현내용

- 타입스크립트 변환 및 마이그레이션
- API 명세서를 참고해서 API 적용
- 로그인은 JWT로 구현
  - 로그인 후 accessToken과 refreshToken을 localStoarge에 저장
  - accessToken 만료시간 5분
  - refreshToken 만료시간 10분
- 토큰을 활용한 로그인 여부 테스트

<br/>
<br/>
<br/>

## 🏹 API 명세

1. 회원가입

- `POST` http://localhost:8000/auth/signup
- Request fields : email(이메일), pw(비밀번호), comparePw(비밀번호 확인)

2. 로그인

- `POST` http://localhost:8000/auth/login
- Request fields : email, pw
- Response fields : accessToken, refreshToken, userInfo

3. 로그인 여부 권한 테스트

- `GET` http://localhost:8000/auth/test
- **Request headers**

  | Name          | Description             |
  | ------------- | ----------------------- |
  | Authrization  | **Bearer** access-token |
  | refresh-token | refreshToken            |

<br/>
<br/>
<br/>

## ⛔ Error Code

- response되는 error 메시지를 통해서 어떤 오류가 발생했는지 확인할 수 있습니다.

1. 회원가입
   | Status | Description |
   | ------------- | ----------------------- |
   | 200 | 회원가입 성공 |
   | 400 | 유효하지 않은 이메일or패스워드, 일치하지 않는 패스워드, 이미 존재하는 이메일 |
   | 500 | 서버 에러 |

2. 로그인
   | Status | Description |
   | ------------- | ----------------------- |
   | 200 | 로그인 성공 |
   | 400 | 유효하지 않은 이메일or패스워드, 이미 존재하는 이메일 |
   | 406 | 존재하지 않는 유저, 일치하지 않는 패스워드 |
   | 500 | 서버 에러 |

3. 로그인 여부 권한 테스트
   | Status | Description |
   | ------------- | ----------------------- |
   | 200 | accesstoken를 통해 권한 확인 성공 or (refreshToken 권한 확인 and accessToekn 재발급)|
   | 401 | 헤더에 accessToken or refreshToken이 없을 경우 |
   | 403 | accessToken과 refreshToken 모두 만료된 경우 |
   | 500 | 서버 에러 |
