module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'menu' : 'menu 1s ease-in-out',
      },
      keyframes: {
        menu: {
          '0%, 100%': { transform: '-translate-y-20 duration-700' },
        }
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["autumn"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
