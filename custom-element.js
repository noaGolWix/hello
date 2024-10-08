class RedBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="box">
        Hi Noa
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .box {
        width: 200px;
        height: 100px;
        background-color: red;
        color: white;
        text-align: center;
        padding: 20px;
      }
    `;
    document.head.appendChild(style);
  }
}

customElements.define('red-box', RedBox);
