import useStore from "../store/useStore";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const theme = useStore(
    (state) => state.theme
  );

  const toggleTheme = useStore(
    (state) => state.toggleTheme
  );

  return (
    <button onClick={toggleTheme}>
      {theme === "light"
        ? "🌙 Dark"
        : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;