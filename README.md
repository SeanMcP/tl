# TL

🦙 Shared resources for Toollama.com apps

## `tl-info`

A web component for information about the app that isn't necessary for use.

```html
<tl-info data-heading="My cool app" data-description="An app to..."></tl-info>
<script src="https://seanmcp.github.io/tl/tl-info.js"></script>
```

## `tl-footer`

A web component for footer that links to Toollama.com and optionally the project repository.

```html
<!-- Basic footer -->
<tl-footer></tl-footer>

<!-- With "Edit this page" link -->
<tl-footer data-repo="tl"></tl-footer>

<!-- Dark mode -->
<tl-footer data-mode="dark"></tl-footer>

<script src="https://seanmcp.github.io/tl/tl-footer.js"></script>
```

## All

If you want to use all of the web components, add the following script to your document:

```html
<script src="https://seanmcp.github.io/tl/wc.js"></script>
```

### Build

Run the following:

```shell
cat tl-*.js | npx terser --compress --mangle --output wc.js
```

## Shared footer

⚠️ **Deprecated**: Use `tl-footer` instead.

```html
<script src="https://seanmcp.github.io/tl/sf.js"></script>
```

To include a link to the project repository, add a `data-tl` attribute to the script:

```html
<script
  data-tl="name-of-repo"
  src="https://seanmcp.github.io/tl/sf.js"
></script>
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
