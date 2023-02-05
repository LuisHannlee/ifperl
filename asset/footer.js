class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <div class="footer">
          <div class="foo_content">
            <div class="part_foo_one">
              <ul class="contain_one">
                <span>
                  <li class="part_foo"><p>case studies</p></li>
                </span>
                <span>
                  <li class="part_foo">
                    <p href="projects.js"><a href="../projects.html">Gallery</a></p>
                  </li>
                </span>
                <span>
                  <li class="part_foo">
                    <p><a href="../projects.html">learning path</a></p>
                  </li>
                </span>
                <span>
                  <li class="part_foo">
                    <p><a href="../projects.html">file learn</a></p>
                  </li>
                </span>
              </ul>
              <ul class="contain_two">
                <li class="part_foo"><p><a href="../about.html">about.</a></p></li>
                <li class="part_foo"><p><a href="../contact.html">contact.</a></p></li>
              </ul>
              <div class="logo_primodial">
                <p>Primodial</p>
              </div>
            </div>
            <div class="contact_gmail">
              <p><strong>connections</strong> and hire me</p>
              <form action="">
                <input
                  class="placeHolder"
                  type="text"
                  placeholder="Enter Your Valid Email"
                  data-place=""
                />
                <button type="submit"></button>
              </form>
            </div>
            <div class="footer_copyright">
              <p>
                <strong>designed </strong>and <strong>build </strong> by
                <strong>primodial</strong>
              </p>
              <div class="linking-article"></div>
            </div>
          </div>
        </div>`;
  }
}
customElements.define("footer-prototype", Footer);
