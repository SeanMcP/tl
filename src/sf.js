(function () {
  let style = document.createElement("style");
  style.textContent = `
  #tl-sf {
      background-color: white;
      bottom: 0;
      box-shadow: 0 0 1rem hsla(0, 0%, 0%, 10%);
      color: hsl(0, 0%, 75%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: small;
      left: 0;
      padding: 0.5em;
      position: fixed;
      right: 0;
      text-align: center;
  }

  #tl-sf a {
      color: hsl(264, 64%, 48%);
  }

  #tl-sf a:not(:focus):not(:hover) {
      text-decoration: none;
  }

  #tl-sf[data-mode="dark"] {
    background-color: black;
    color: hsl(0, 0%, 25%);
  }

  #tl-sf[data-mode="dark"] a {
    color: hsl(264, 64%, 70%);
  }
`;
  document.head.appendChild(style);

  let container = document.createElement("div");
  container.id = "tl-sf";
  let innerHTML = `<a href="https://toollama.com">Toollama.com</a>`;

  let scriptEl = document.querySelector("script[src$='/sf.js']");
  if (scriptEl) {
    if (scriptEl.dataset.tl)
      innerHTML += ` | <a href="https://github.com/seanmcp/${scriptEl.dataset.tl}">Edit this page</a>`;
    if (scriptEl.dataset.m)
      container.dataset.mode = scriptEl.dataset.m;
  }
  container.innerHTML = innerHTML;

  document.body.appendChild(container);
})();
