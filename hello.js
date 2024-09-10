<!DOCTYPE html>
class OneDialog extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<html>
<head>
  <title>Red Box with Text</title>
  <style>
    .red-box {
      width: 200px;
      height: 100px;
      background-color: red;
      color: white;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="box"></div>
  <script>
    const box = document.getElementById('box');
    box.classList.add('red-box');
    box.textContent = 'Hi Noa';
  </script>
</body>
</html>`;
  }
}
customElements.define('one-dialog', OneDialog);
