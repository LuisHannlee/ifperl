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

let workLinks = document.querySelectorAll(".save_a");
console.info(workLinks);
workLinks.forEach((link, index, value) => {
  console.info(link);
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
  function enterAnimation(link, e, index) {
    link.tl.tweenFromTo(0, "midway");
  }
  function leaveAnimation(link, e) {
    link.tl.play();
  }

  // Mouseenter
  link.addEventListener("mouseover", (e) => {
    enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseout", (e) => {
    leaveAnimation(link, e);
  });
});

const current_Touchs = document.querySelectorAll(".css_role_project");
const img_target = document.querySelectorAll(".css-future_project");
current_Touchs.forEach((item, idx) => {
  const scaleTouch = gsap.timeline({
    defaults: { ease: "power1.inOut" },
  });
  item.addEventListener("mouseover", () => {
    scaleTouch.to(img_target[idx], {
      scale: 1.2,
    });
  });
  item.addEventListener("mouseleave", () => {
    scaleTouch.to(img_target[idx], {
      scale: 1,
    });
  });
});

{
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
}

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
let circle_magnet = new MagnetMouse({
  magnet: {
    element: ".magnet",
    position: "center",
    enabled: true,
    distance: 10,
  },
});
circle_magnet.init();

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
