let mm = new MagnetMouse({
  magnet: {
    element: ".magnet",
    position: "center",
    enabled: true,
    distance: 10,
  },
});
mm.init();

function enterAnimation(link, e, index) {
  link.tl.tweenFromTo(0, "midway");
}

// Mouseleave function
function leaveAnimation(link, e) {
  link.tl.play();
}

let workLinks = document.querySelectorAll(".links_project");

workLinks.forEach((link, index, value) => {
  let underline = link.querySelector(".underline_front");
  link.tl = gsap.timeline({ paused: false });

  link.tl.fromTo(
    underline,
    {
      width: "0%",
      left: "0%",
    },
    {
      width: "100%",
      duration: 1,
    }
  );

  link.tl.add("midway");

  link.tl.fromTo(
    underline,
    {
      width: "100%",
      left: "0%",
    },
    {
      width: "0%",
      left: "100%",
      duration: 1,
      immediateRender: false,
    }
  );
  link.tl.fromTo(
    underline,
    {
      width: "100%",
      left: "0%",
    },
    {
      width: "100%",
      left: "0%",
      duration: 1,
      immediateRender: false,
    }
  );

  // Mouseenter
  link.addEventListener("mouseover", (e) => {
    enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseout", (e) => {
    leaveAnimation(link, e);
  });
});

VANTA.NET({
  el: ".footer",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x96868c,
  backgroundColor: 0x10102,
  points: 7.0,
  spacing: 16.0,
});

document.querySelector(".links_project").addEventListener("mouseover", () => {
  document.querySelector(".thrid_layer_2").style.transform = "translateX(12px)";
  document.querySelector(".thrid_layer_2").style.transition =
    "opacity 0.45s ease-out 0s, transform 0.65s cubic-bezier(0.23, 1, 0.32, 1) 0s";
});
document.querySelector(".links_project").addEventListener("mouseout", () => {
  document.querySelector(".thrid_layer_2").style.transform = "translateX(0px)";
});

function _placeHolderHide_Show() {
  const placeHolder = document.querySelector(".placeHolder");
  placeHolder.onfocus = function () {
    this.setAttribute("placeholder", "");
  };
  placeHolder.onblur = function () {
    this.setAttribute("placeholder", "Enter Your Valid Email");
  };
}
_placeHolderHide_Show();

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

// iconify
const iconify = [...document.querySelectorAll(".iconify")];
iconify.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.opacity = "0.7";
  });
  item.addEventListener("mouseleave", () => {
    item.style.opacity = "1";
  });
});

const toggle_nav = document.querySelector(".toggle_nav");
const line_toggle = document.querySelectorAll(".line_toggle");
const side_panel_menu = document.querySelector(".side_panel_menu");
toggle_nav.addEventListener("click", () => {
  line_toggle[0].classList.toggle("active");
  line_toggle[1].classList.toggle("active");
  side_panel_menu.classList.toggle("active");
  if (side_panel_menu.classList.contains("active")) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "visible";
  }
});
