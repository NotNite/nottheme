# nottheme

Accessible theme switcher for Astro. Designed for static sites, and works without JavaScript.

## Installation/usage

nottheme targets modern web browsers (~2024) and uses modern CSS features (`:has()`, `:not()`, and `var()`). **If you aren't targeting modern browsers, don't use nottheme.**

```shell
npm i nottheme
```

See [the demo](https://github.com/NotNite/nottheme/blob/main/demo/ssg/src/layout.astro) for usage. TL;DR:

- Create your settings using the `settings` and `options` helper functions. Keep it in another file so you can import it where you need it.
  - If you're using TypeScript, defining your options as individual variables and then merging them into the `settings` object adds better type safety.
- Add the `ThemeStyling` component to the bottom of your `head` element.
- Add the `ThemeLoader` component to the top of your `body` element.
- Put the `ThemeSelect` component somewhere on your site.
- Use your theme settings as CSS variables with `var()`.

**These components and classes must be present on every page.** If you have a layout file for your site, put these components there. `ThemeSelect` should be easily accessible from every page (e.g. in a header).

## Styling with nottheme

If you define a "theme" option like this:

```ts
const theme = option({
  choices: ["light", "dark"],
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
  default: "light"
});
```

...you can use those CSS variables like this:

```css
body {
  background-color: var(--bg);
  color: var(--fg);
}
```

An option consists of the following:

- A unique ID for the option (e.g. `theme` or `font`)
- Unique IDs for each choice (e.g. `light` or `dark`)
- CSS variables for each choice
- (Optional) Human readable names for the option and choices
- (Optional) The default choice to use (supports CSS media queries)

You can define the global JavaScript function `window.__nottheme_onChange` for when values change:

```ts
window.__nottheme_onChange = (option: string, choice: string) => {
  console.log(option, choice);
};
```

This will also fire when the page loads, as it applies settings from localStorage.

## Theme application

Themes are applied differently depending on if JavaScript is enabled or not.

With JavaScript enabled, the selected theme is saved in `localStorage` and applied on page load. The `nottheme-js` class is applied to signal JavaScript being enabled. Choices are applied by adding custom class names (`nottheme__${option}__${choice}`).

With JavaScript disabled, the selected theme is temporary and resets on page load. A blank `option` element is present in the `ThemeSelect` component to not lock up the themes. Choices are applied by targeting the `:checked` pseudo-class selector on the `option` element.

## nottheme selectors

- `nottheme`: A custom element that contains the theme settings in its dataset
- `.nottheme-js`: Applied if the page is loading themes with JavaScript
- `.nottheme__${option}__${choice}`: Applied when the choice is selected with JavaScript

These selectors target `ThemeSelect`:

- `.nottheme-select`: The root `div` of ThemeSelect
- `.nottheme-select-entry`: The `div` for an option, containing the `label` and `select`
- `.nottheme-select-entry-label`: The `label` element for an option
- `#nottheme-select-entry__${option}`, `.nottheme-select-entry-choices`: The `select` element for an option
- `#nottheme-choice-blank__${option}`: The blank `option` element for compatibility with zero JavaScript
- `#nottheme-choice__${option}__${choice}`: The `option` element for a choice
