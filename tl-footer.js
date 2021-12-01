class TLFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    div.classList.add("__tl-footer");

    const mode = this.getAttribute("data-mode");
    if (mode) div.setAttribute("data-mode", mode);

    let innerHTML = `<a href="https://toollama.com">Toollama.com</a>`;
    const repo = this.getAttribute("data-repo");
    if (repo) {
      innerHTML += ` | <a href="https://github.com/seanmcp/${repo}">Edit this page</a>`;
    }
    div.innerHTML = innerHTML;

    const style = document.createElement("style");
    style.textContent = `
.__tl-footer {
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

.__tl-footer a {
    color: hsl(264, 64%, 48%);
}

.__tl-footer a:not(:focus):not(:hover) {
    text-decoration: none;
}

.__tl-footer[data-mode="dark"] {
  background-color: black;
  color: hsl(0, 0%, 25%);
}

.__tl-footer[data-mode="dark"] a {
  color: hsl(264, 64%, 70%);
}
    `;

    shadow.appendChild(div);
    shadow.appendChild(style);
  }
}

customElements.define("tl-footer", TLFooter);
