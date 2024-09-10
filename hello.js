class MyCustomElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>My Custom Element</title>
      </head>
      <body>
        <h1>Hello from my custom element!</h1>
        <p>This is some content within the custom element.</p>
      </body>
      </html>
    `;
  }
}

customElements.define('my-custom-element', MyCustomElement);
