/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./test.html", "./public/js/*.js"],
  theme: {
    extend: {},
    screens: {
      // desktop
      d2: "1300px",
      // tablet
      t1: "768px",
      t2: "1024px",
      // mobile 
      m1: "320px"
    },
  },
  plugins: [],
};

