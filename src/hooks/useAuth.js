import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const useAuth = () => {
  const navigate = useNavigate();

  const token = useStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return {
    isAuthenticated: !!token,
    token,
  };
};

export default useAuth;