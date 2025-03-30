import { option, settings } from "nottheme";

// Define your options using the `option` helper
const theme = option({
  choices: ["light", "dark"], // internal IDs
  name: "Theme", // optional human-readable name
  names: {
    // optional human-readable names
    light: "Light",
    dark: "Dark"
  },

  // Define CSS variables to use with these choices
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

  // Set the default choice, even with media query support
  default: [
    {
      query: "(prefers-color-scheme: dark)",
      choice: "dark"
    },
    "light"
  ]
});

// Use nottheme for more than colors - font, layout, whatever you want!
const font = option({
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
});

// Include all your options in your settings
export default settings({
  options: {
    theme,
    font
  }
});
