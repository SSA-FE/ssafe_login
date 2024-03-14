# SSAFE 4차 MISSION: 타입스크립트와 API를 이용한 회원가입&로그인

## 작업 기간

3월 2일(목) ~ 3월 13일(수)<br>
(리드미 작성일 : 3월 13일)

## 필수 요구사항

- 3차 미션에서 작업한 내용에 **타입스크립트** 적용
- 백엔드에서 제공하는 API 적용(**API 명세서** 참고)
- 회원가입 -> 로그인
  - **JWT**로 구현
  - 로그인 후 서버에서 제공받은 accessToken & refreshToken -> localStoarge에 저장
  - 로그인 여부 권한 테스트 : 저장한 accessToken & refreshToken 이용

## API 명세서

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
  | Authorization | **Bearer** access-token |
  | refresh-token | refreshToken            |

## 선택 요구사항

- Protected Router 로직을 도입합니다.

## 배운 것들

- 함수 또는 라이브러리 사용법
  - fetch 함수
  - 정규 표현식(Regex) 문법과 사용법
  - react-hook-form
  - react-router-dom
  - typescript
  - localStorage.getitem/setitem 등
- 의외로 로그인 과정이 가장 간단하게 잘 진행됐다. Token이 발행됐을 때 너무 기뻤다 ㅠ.ㅠ Token이 발행되고 나서는 비교적 작업이 수월했다.

## 어려웠던 점

- 제일 처음, 서버/API/백엔드/Token/.... 이들의 동작 과정이나 관계에 대한 기초 지식이 없어 굉장히 많이 헤맸고, 막막했다. 완전히 백지 상태에서 시작했다보니, react-router-dom의 Link 개념을 공부하며 구현되는 그 간단한 모습을 보는 데에 1시간이 넘게 걸렸다.
- 회원가입 시 입력된 값이 handleSubmit을 통과할 조건을 설정하는 과정이 꽤 까다로웠다.
- 처음 접하는 용어, 약어들에 익숙해지는 시간이 오래 걸렸다.

## 더 도전해볼 것들

1. 에러 핸들링
   - 각 token이 있을 때 권한을 확인하는 데에는 성공했지만 authController.js에 정의된 error message는 다루지 못했음. 각 에러 메세지에 접근하고 alert하는 방법 알아보기
2. 선택 요구사항인 Protected Router 로직 도입
3. fetch 다음으로 axios로도 같은 기능 구현할 수 있을지 시도해보기
4. 리드 세션의 review 바탕으로 refactoring하기
5. 기초 CS 지식 더 탄탄하게 .. 공부하기 !
