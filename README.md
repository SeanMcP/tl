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

## `tl-info`

```html
<tl-info data-heading="My cool app" data-description="This app teaches young children how to do a valuable skill"></tl-info>
<script src="https://seanmcp.github.io/tl/tl-info.js"></script>
```

## `tl-footer`

```html
<!-- Basic footer -->
<tl-footer></tl-footer>

<!-- With "Edit this page" link -->
<tl-footer data-repo="tl"></tl-footer>

<!-- Dark mode -->
<tl-footer data-mode="dark"></tl-footer>

<script src="https://seanmcp.github.io/tl/tl-footer.js"></script>
```

### Build

I didn't feel like adding a whole build step, so just run the following command:

```shell
npx terser --compress --mangle --output sf.js -- src/sf.js
```
