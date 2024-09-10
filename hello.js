class MyCustomElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
    .my-custom-element {
      width: 300px;
      height: 200px;
      background-color: #f0f0f0;
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 16px;
      text-align: center;
      padding: 20px;
      border: 1px solid #ccc;
    }
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
