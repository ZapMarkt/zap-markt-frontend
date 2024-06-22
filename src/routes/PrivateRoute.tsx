import { PropsWithChildren, useEffect } from "react";
import { useUserSessionStore } from "../stores/UserSessionStore";
import { useNavigate } from "react-router-dom";

export function PrivateRoute({ children }: PropsWithChildren) {
  const userSession = useUserSessionStore((state) => state.userSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSession) {
      navigate("/login");
    }
  }, [userSession]);

  return children;
}
