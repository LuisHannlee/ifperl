window.onload = () => {
  function video_load() {
    const videoFront = document.querySelector(".my_video");
    function video1(e) {
      const video = document.querySelector(".my_video");
      video.autoplay = true;
      video.preload = e;
      video.loop = true;
      video.muted = true;
      video.controls = false;
      video.play();
    }
    video1();

    videoFront.addEventListener("loadedmetadata", function () {
      if (videoFront.buffered.length === 0) return;
      const bufferedSeconds =
        videoFront.buffered.end(0) - videoFront.buffered.start(0);
    });
  }
  video_load();
};

// PLACEHOLDER
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
