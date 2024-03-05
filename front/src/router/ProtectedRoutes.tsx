import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  userInfo: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ userInfo }) => {
  if (!userInfo) {
    alert("로그인 되어 있지 않습니다. 홈화면으로 이동합니다.");
    return <Navigate to="/" />;
  }

  // 유저 정보가 있다면 자식 컴포넌트를 보여줌
};

export default ProtectedRoute;
