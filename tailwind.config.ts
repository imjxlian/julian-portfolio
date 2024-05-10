import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-shape-pattern": "url('/background-dark.svg')",
        "light-shape-pattern": "url('/background-light.svg')",
        'iplocator': "url('/projects/iplocator.png')",
        'gomoku': "url('/projects/gomoku.png')",
        'sokoban': "url('/projects/sokoban.png')",
        'stakeirb': "url('/projects/stakeirb.png')",
        'website': "url('/projects/website.png')",
        'superseries': "url('/projects/superseries.png')",
        'formcreator': "url('/projects/formcreator.png')",
      },
    },
    fontFamily: {
      body: "league-spartan, sans-serif",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
