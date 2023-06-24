/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "10px",
        "2xl": "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1300px",
    },

    fontFamily: {
      evolventa: "Evolventa-Regular",
      arial: "ARIAL",
      inter: "Inter",
    },
    letterSpacing: {
      normal: "0.01em",
    },

    extend: {
      fontSize: {
        "4xl": "39px",
      },
      lineHeight: {
        5: "52px",
      },
    },
  },
  plugins: [],
};
