!function(){let t=document.createElement("style");t.textContent="\n  #tl-sf {\n      bottom: 0;\n      box-shadow: 0 0 1rem hsla(0, 0%, 0%, 10%);\n      color: hsl(0, 0%, 75%);\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-size: small;\n      left: 0;\n      padding: 0.5em;\n      position: fixed;\n      right: 0;\n      text-align: center;\n  }\n\n  #tl-sf a {\n      color: hsl(264, 64%, 48%);\n  }\n\n  #tl-sf a:not(:focus):not(:hover) {\n      text-decoration: none;\n  }\n",document.head.appendChild(t);let e=document.createElement("div");e.id="tl-sf";let n='<a href="https://toollama.com">Toollama.com</a>',o=document.querySelector("[data-tl]");o&&(n+=` | <a href="https://github.com/seanmcp/${o.dataset.tl}">Edit this page</a>`),e.innerHTML=n,document.body.appendChild(e)}();