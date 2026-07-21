import { create } from "zustand";

const useStore = create((set) => ({
  user: null,

  token:
    localStorage.getItem("token") || null,

  theme:
    localStorage.getItem("theme") ||
    "light",

  login: (user, token) => {
    localStorage.setItem("token", token);

    set({
      user,
      token,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      user: null,
      token: null,
    });
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme =
        state.theme === "light"
          ? "dark"
          : "light";

      localStorage.setItem(
        "theme",
        newTheme
      );

      document.body.className = newTheme;

      return {
        theme: newTheme,
      };
    }),
}));

export default useStore;