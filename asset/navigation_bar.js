class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
      <header id="header" class="my-head">
      <nav id="nav_gate" class="nav_gate">
        <div class="title">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path
              class="svg"
              d="M18.25 26.805L22.535 45L26.79 26.775L45 22.525L26.765 18.23L22.51 0L18.215 18.255L0 22.545L18.25 26.805Z"
            ></path>
          </svg>
        </div>
        <ul class="menu_for_user">
          <li class="this_select">
            <a href="index.html"> Home. </a>
          </li>
          <li class="this_select">
            <a href="about.html"> about. </a>
          </li>
          <li class="this_select">
            <a href="projects.html"> project. </a>
          </li>
          <li class="this_select">
            <a href="contact.html"> contact. </a>
          </li>
        </ul>
        <div class="my_toggle">
          <div class="toggle_nav">
            <div class="line_toggle"></div>
            <div class="line_toggle"></div>
          </div>
        </div>
      </nav>
      <div class="container_panel">
        <div class="side_panel_menu">
          <div class="panel_menu">
            <div class="studies_case">
              <div class="h2"><h2>studies case</h2></div>
              <li class="menu_li"><a href="../accounting.html">accounting</a></li>
              <li class="menu_li"><a href="#">programing</a></li>
              <li class="menu_li"><a href="../projects.html">art</a></li>
            </div>
            <div class="more_menu">
              <li class="more_li this_select">
                <a href="../about.html">about</a>
              </li>
              <li class="more_li this_select">
                <a href="../contact.html">contact</a>
              </li>
            </div>
            <div class="icon_my_social_media">
              <ul class="center_icon_media-q">
                <li class="facebook iconify">
                <a href="https://www.facebook.com/arif.saeful.92">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  </a>
                </li>
                <li class="instagram iconify">
                <a href="https://www.instagram.com/perl_if?igshid=YmMyMTA2M2Y">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  </a>
                </li>
                <li class="linkedin iconify">
                <a href="https://www.linkedin.com/in/arif-saefulloh-76016425b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  </a>
                </li>
                <li class="github iconify">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  </a>
                </li>
                <li class="medium iconify">
                <a
                  href="mailto:arif.saefulloh2004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                    />
                  </svg> </a
              >
                </li>
              </ul>
            </div>
            <div class="text-copyright">
              <span>
                <p><strong>&#169;copyright</strong> Primodial 2022</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
   
    `;
  }
}

customElements.define("header-prototype", Header);

function sizeW() {
  const nav = document.getElementById("nav_gate");
  const toggle = document.querySelector(".my_toggle");
  const menu_ul = document.querySelector(".menu_for_user");
  let lastScroll = 0;
  function sticky() {
    const mediaQuery = window.matchMedia("(max-width: 968px)");
    if (mediaQuery.matches) {
      window.addEventListener("scroll", () => {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY <= 10) {
          nav.classList.remove("head--down");
          toggle.style.display = "block";
          menu_ul.style.display = "none";
        }
        if (
          currentScrollY >= lastScroll &&
          !nav.classList.contains("head--down")
        ) {
          toggle.style.display = "block";
          toggle.style.boxShadow = "rgb(0 0 0 / 6%) 0px 3px 20px 5px";
          menu_ul.style.display = "none";
        }
        lastScroll = currentScrollY;
      });
    }
  }
  sticky();
  function stickyActive() {
    const mediaQuery = window.matchMedia("(min-width: 968px)");
    if (mediaQuery.matches) {
      window.addEventListener("scroll", () => {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY <= 10) {
          nav.classList.remove("head--down");
          toggle.style.display = "none";
          menu_ul.style.display = "flex";
        }
        if (
          currentScrollY > lastScroll &&
          !nav.classList.contains("head--down")
        ) {
          toggle.style.display = "block";
          toggle.style.boxShadow = "rgb(0 0 0 / 6%) 0px 3px 20px 5px";
          menu_ul.style.display = "none";
        }
        lastScroll = currentScrollY;
      });
    }
  }
  stickyActive();
}
sizeW();
document.addEventListener("resize", sizeW);

const pageCurrentActive = window.location.pathname;
const navCurrentLink = document
  .querySelectorAll(".this_select a")
  .forEach((link) => {
    if (link.href.includes(`${pageCurrentActive}`)) {
      link.classList.add("show");
    }
  });
