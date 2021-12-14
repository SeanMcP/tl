class TLInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const details = document.createElement("details");
    details.classList.add("__tl-info");

    const summary = document.createElement("summary");
    details.appendChild(summary);
    summary.textContent = "i";
    summary.setAttribute("aria-label", "information");

    const div = document.createElement("div");
    details.appendChild(div);

    const h1 = document.createElement("h1");
    div.appendChild(h1);
    h1.textContent = this.getAttribute("data-heading");

    const p = document.createElement("p");
    div.appendChild(p);
    p.textContent = this.getAttribute("data-description");

    const style = document.createElement("style");
    style.textContent = `
.__tl-info {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.__tl-info summary {
  align-items: center;
  border: 2px solid currentColor;
  border-radius: 2rem;
  color: hsla(0, 0%, 0%, 40%);
  cursor: pointer;
  display: flex;
  font-family: monospace;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  width: 2rem;
}

.__tl-info summary::-webkit-details-marker { display: none; }
.__tl-info summary::marker { display: none; }

.__tl-info[open] summary,
.__tl-info summary:focus,
.__tl-info summary:hover {
  color: hsla(0, 0%, 0%, 75%);
}

.__tl-info div {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 2rem hsla(0, 0%, 0%, 20%);
  box-sizing: border-box;
  font-family: inherit;
  padding: 1rem;
  position: absolute;
  right: calc(100% + 1rem);
  top: 0;
  width: 20rem;
  z-index: 1;
}

.__tl-info div h1 {
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.__tl-info div p {
  margin-bottom: 0;
}
`;

    shadow.appendChild(details);
    shadow.appendChild(style);
  }
}

customElements.define("tl-info", TLInfo);
