class TLFooter extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("__tl-footer");const e=this.getAttribute("data-mode");e&&t.setAttribute("data-mode",e);let o='<a href="https://toollama.com">Toollama.com</a>';const a=this.getAttribute("data-repo");a&&(o+=` | <a href="https://github.com/seanmcp/${a}">Edit this page</a>`),t.innerHTML=o;const r=document.createElement("style");r.textContent="\n.__tl-footer {\n    background-color: white;\n    bottom: 0;\n    box-shadow: 0 0 1rem hsla(0, 0%, 0%, 10%);\n    color: hsl(0, 0%, 75%);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: small;\n    left: 0;\n    padding: 0.5em;\n    position: fixed;\n    right: 0;\n    text-align: center;\n}\n\n.__tl-footer a {\n    color: hsl(264, 64%, 48%);\n}\n\n.__tl-footer a:not(:focus):not(:hover) {\n    text-decoration: none;\n}\n\n.__tl-footer[data-mode=\"dark\"] {\n  background-color: black;\n  color: hsl(0, 0%, 25%);\n}\n\n.__tl-footer[data-mode=\"dark\"] a {\n  color: hsl(264, 64%, 70%);\n}\n    ",n.appendChild(t),n.appendChild(r)}}customElements.define("tl-footer",TLFooter);class TLInfo extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),t=document.createElement("details");t.classList.add("__tl-info");const e=document.createElement("summary");t.appendChild(e),e.textContent="i",e.setAttribute("aria-label","information");const o=document.createElement("div");t.appendChild(o);const a=document.createElement("h1");o.appendChild(a),a.textContent=this.getAttribute("data-heading");const r=document.createElement("p");o.appendChild(r),r.textContent=this.getAttribute("data-description");const i=document.createElement("style");i.textContent="\n.__tl-info {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n}\n\n.__tl-info summary {\n  align-items: center;\n  border: 2px solid currentColor;\n  border-radius: 2rem;\n  color: hsla(0, 0%, 0%, 40%);\n  cursor: pointer;\n  display: flex;\n  font-family: monospace;\n  font-weight: bold;\n  height: 2rem;\n  justify-content: center;\n  width: 2rem;\n}\n\n.__tl-info summary::-webkit-details-marker { display: none; }\n.__tl-info summary::marker { display: none; }\n\n.__tl-info[open] summary,\n.__tl-info summary:focus,\n.__tl-info summary:hover {\n  color: hsla(0, 0%, 0%, 75%);\n}\n\n.__tl-info div {\n  background: white;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 2rem hsla(0, 0%, 0%, 20%);\n  box-sizing: border-box;\n  font-family: inherit;\n  padding: 1rem;\n  position: absolute;\n  right: calc(100% + 1rem);\n  top: 0;\n  width: 20rem;\n  z-index: 1;\n}\n\n.__tl-info div h1 {\n  font-size: 1.5rem;\n  margin: 0 0 1rem;\n}\n\n.__tl-info div p {\n  margin-bottom: 0;\n}\n",n.appendChild(t),n.appendChild(i)}}customElements.define("tl-info",TLInfo);