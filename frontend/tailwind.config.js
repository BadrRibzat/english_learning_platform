// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1000: "1000", // Define your custom z-index value
      },
    },
  },
  plugins: [],
};
