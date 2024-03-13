# SSAFE 4차 MISSION: 타입스크립트와 API를 이용한 회원가입&로그인

# 개요
SSAFE LOGIN 4th Mission

# 1차 PR 작업 내용
## 어떤 변경 사항이 있나요?
1. JSX to TSX Refactoring
2. Styled Component 양식 수정
3. Axios 통신을 활용한 Auth API 구현 ( Login , SignUp , Test )
4. AuthHeader을 이용한 JWT Token 저장
5. Protected Route 초기 세팅

# 2차 PR Refactoring 내용
1. Protected Router 적용
- Protected Router 을 적용하여 AuthHeader 에 정보가 있을 경우에만 test page 로 이동 할 수 있도록 변경
2. Page , Navigation 네이밍 컨벤션 수정
- Home , Main , Test 의 네이밍 컨벤션 수정 , Nav -> Navigation 으로 네이밍 컨벤션 수정
3. Axios Base Url 설정
- localhose8000 : 을 Axios BaserUrl 로 설정
4. vercel 배포

# 작업 예정
Validation 로직 수정
로그인, Test 용 버튼 추가
