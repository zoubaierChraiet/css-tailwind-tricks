/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseButton: "pulseButton 1s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseButton: {
          "0%": {
            transform: "scale(1,1)",
            opacity: 0.3,
          },
          "100%": {
            transform: "scale(1.1,1.3)",
            opacity: 0.8,
          },
        },
      },
    },
  },
  plugins: [],
};
