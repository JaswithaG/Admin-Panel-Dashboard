import { useEffect } from "react";
import useStore from "../store/useStore";

const useTheme = () => {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;