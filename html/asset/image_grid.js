class imgGrid extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallBack() {
    this.innerHTML = `
    <style>



    </style>

    `;
  }
}

customElements.define("img-grid", imgGrid);
