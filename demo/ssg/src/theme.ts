import type { Settings } from "nottheme";

const settings: Settings = {
  options: {
    theme: {
      name: "Theme",
      choices: ["light", "dark"],
      names: {
        light: "Light",
        dark: "Dark"
      },

      values: {
        light: {
          "--bg": "#fff",
          "--fg": "#000"
        },
        dark: {
          "--bg": "#000",
          "--fg": "#fff"
        }
      },

      default: [
        {
          query: "(prefers-color-scheme: dark)",
          choice: "dark"
        },
        "light"
      ]
    },

    font: {
      name: "Font",
      choices: ["sansSerif", "monospace"],
      names: {
        sansSerif: "Sans-serif",
        monospace: "Monospace"
      },

      values: {
        sansSerif: {
          "--font": "sans-serif"
        },
        monospace: {
          "--font": "monospace"
        }
      },

      default: "sansSerif"
    }
  }
};

export default settings;
