# TL

🦙 Shared resources for Toollama.com apps

## Shared footer

```html
<script src="https://seanmcp.github.io/tl/sf.js"></script>
```

To include a link to the project repository, add a `data-tl` attribute to the script:

```html
<script data-tl="name-of-repo" src="https://seanmcp.github.io/tl/sf.js"></script>
```

By default, the footer is on a white background. For a dark theme, add `data-m="dark"`:

```html
<script data-m="dark" src="https://seanmcp.github.io/tl/sf.js"></script>
```

### Build

I didn't feel like adding a whole build step, so just run the following command:

```shell
npx terser --compress --mangle --output sf.js -- src/sf.js
```
