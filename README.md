# nottheme

Accessible theme switcher for Astro.

## Usage

See [the demo](https://github.com/NotNite/nottheme/blob/main/demo/ssg/src/layout.astro).

If you need to know when the theme changes, set `window.__nottheme_onChange` to a function:

```ts
window.__nottheme_onChange = (key: string, value: string) => {
  console.log(key, value);
};
```

## Features

- [x] Static sites (localStorage)
- [x] Zero JavaScript (`:has()`)
- [ ] Zero JavaScript with SSR (cookies)

## How it works

There are three components:

- a component that generates a CSS file based on your specified configuration
- a JavaScript script which saves preferences if JavaScript is enabled
- a component to change the theme on your site

With JavaScript enabled:

- Classes are applied to the body element on page load
- Settings are saved to localStorage
- Changes are made through event listeners

With JavaScript disabled:

- Classes are applied to the `nottheme` class using `:has()`
- Settings are not saved and will reset on page navigation or refresh
- Changes are made through CSS selectors (selection component must be on every page!)
