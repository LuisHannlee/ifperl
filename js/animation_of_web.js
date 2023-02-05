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

// img reveal on mouseover
const links = document.querySelectorAll(".do_h1");
const linkHoverReveal = document.querySelectorAll(".reveal_image");
const hide_image = document.querySelectorAll(".hide_image");

function overitem() {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
      for (let j = 0; j < links.length; j++) {
        if (j !== i) {
          links[j].style.opacity = 0.5;
          links[j].style.zIndex = 0;
        } else {
          links[j].style.opacity = 1;
          links[j].style.zIndex = 3;
        }
      }
    });
    links[i].addEventListener("mouseleave", () => {
      for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = 1;
      }
    });
  }
}
overitem();

links.forEach((item, i) => {
  console.info(item);
  item.addEventListener("mouseover", (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.zIndex = -1;
    linkHoverReveal[i].style.transform = "translate(-100%, -50%) rotate(-5deg)";
    linkHoverReveal[i].style.left = e.clientX - 100 + "px";
    linkHoverReveal[i].style.top = e.clientY + "px";
    hide_image[i].style.transform = "scale(1,1)";
  });
  item.addEventListener("mouseout", (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = "translate(-50%, -50%) rotate(-5deg)";
    linkHoverReveal[i].style.left = e.clientX - 100 + "px";
    linkHoverReveal[i].style.top = e.clientY + "px";
    hide_image[i].style.transform = "scale(0.8)";
  });
});

const second_layer = document.querySelector(".second_layer"),
  links_pro = document.querySelectorAll(".links_project"),
  third = document.querySelectorAll(".thrid_layer_2"),
  magnetM = document.querySelectorAll(".magnet");

links_pro.forEach((item, idx) => {
  item.addEventListener("mouseover", () => {
    third[idx].style.transform = "translateX(12px)";
    third[idx].style.transition =
      "opacity 0.45s ease-out 0s, transform 0.65s cubic-bezier(0.23, 1, 0.32, 1) 0s";
  });
  item.addEventListener("mouseout", () => {
    third[idx].style.transform = "translateX(0px)";
  });
});

second_layer.addEventListener("mouseover", () => {
  document.querySelector(".thrid_layer").style.transform =
    "translateY(0px) rotate(90deg)";
  document.querySelector(".thrid_layer").style.transition =
    "opacity 0.45s ease-out 0s, transform 0.65s cubic-bezier(0.23, 1, 0.32, 1) 0s";
});
second_layer.addEventListener("mouseout", () => {
  document.querySelector(".thrid_layer").style.transform =
    "translateY(-12px) rotate(90deg)";
  document.querySelector(".thrid_layer").style.transition =
    "opacity 0.45s ease-out 0s, transform 0.65s cubic-bezier(0.23, 1, 0.32, 1) 0s";
});
