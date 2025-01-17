module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main1: "#1e201e",
        main2: "#333533",
        main3: "#494b49",
        main4: "#606260",
        main5: "#797a79",
        main6: "#929392",
      },
      textColor: {
        ...({ theme }) => theme("colors"),
        light1: "#fff0db",
        light2: "#fff2df",
        light3: "#fff3e3",
        light4: "#fff5e7",
        light5: "#fff7eb",
        light6: "#fff",
      },
      scrollbar: {
        DEFAULT: {
          track: "bg-black-800",
          thumb: "bg-contrast",
          thumbHovered: "bg-blue-400",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
