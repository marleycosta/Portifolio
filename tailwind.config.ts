import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#e8ebe9",
        elevated: "#f4f6f4",
        ink: "#0a0a0a",
        mute: "#5a615c",
        "ink-subtle": "#848b86",
        line: "#c2c9c4",
        accent: "#1a3d2e",
        "seam-ux": "#2a5240",
        selection: "#d4d8d5",
      },
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "80rem",
      },
      boxShadow: {
        panel: "0 8px 30px rgb(0 0 0 / 0.06)",
      },
    },
  },
} satisfies Config;
