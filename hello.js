class OneDialog extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="box" class="red-box">Hi Noa</div>
    `;
  }
}

customElements.define('one-dialog', OneDialog);
