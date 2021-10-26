# TL

🦙 Shared resources for Toollama.com apps

## Shared footer

```html
<script src="https://raw.githubusercontent.com/seanmcp/tl/master/sf.js"></script>
```

To include a link to the project repository, add a `data-tl` attribute to the script:

```html
<script src="https://raw.githubusercontent.com/seanmcp/tl/master/sf.js"></script>
```

### Build

I didn't feel like adding a whole build step, so just run the following command:

```shell
npx terser --compress --mangle --output sf.js -- src/sf.js
```
