gsap.registerPlugin(ScrollTrigger);
// front page

function Hoop_laaa(item) {
  let tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
  tl.to(item, { y: "0%", duration: 1, delay: 1.5, stagger: 0.2 });
}
Hoop_laaa(".hoop_laap");
Hoop_laaa(".emerge_acc");
Hoop_laaa(".word_about>h1");
Hoop_laaa(".p_contain_about>span");
Hoop_laaa(".text_play_project>p");
Hoop_laaa(".contain_link_project>p");
Hoop_laaa(".link_name_project ");
Hoop_laaa(".context");

function h1_front() {
  const emerge = gsap.utils.toArray(".emerge");
  emerge.forEach((item) => {
    gsap.to(item, {
      y: "0",
      duration: 1.5,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      ease: "SlowMo.easeOut",
    });
  });
}
h1_front();

let skewSetter = gsap.quickSetter(".skew", "skewY", "deg");
let proxy = { skew: 0 };
ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = self.getVelocity() / -1000;
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 1,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
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

gsap.to(".css-acc-opcy", {
  scrollTrigger: {
    trigger: ".css-bg-img",
    start: "500 center",
    scrub: true,
  },
  opacity: 1,
});
gsap.to(".css-3sspxn", {
  scrollTrigger: {
    trigger: ".css-bg-img",
    y: 100,
    duration: 1,
    start: "500 center",
    scrub: true,
  },
  opacity: 1,
});

gsap.to(".css-3sspxn", {
  yPercent: 120,
  ease: "none",
  scrollTrigger: {
    trigger: ".css-bg-img",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});
