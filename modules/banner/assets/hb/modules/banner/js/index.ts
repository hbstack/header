(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".hb-header") as HTMLElement;
    if (!header.hasAttribute("data-banner")) {
      return;
    }

    const scrolling = () => {
      header.removeAttribute("data-banner");
    }

    const reset = () => {
      header.setAttribute("data-banner", "");
    }

    if (document.documentElement.scrollTop !== 0) {
      scrolling();
    }

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        reset();
      } else {
        scrolling();
      }
    });
  });
})();
