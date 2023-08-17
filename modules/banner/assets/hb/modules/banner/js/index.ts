(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".hb-header") as HTMLElement;
    if (!header.hasAttribute("data-banner")) {
      return;
    }

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        header.setAttribute("data-banner", "");
      } else {
        header.removeAttribute("data-banner");
      }
    });
  });
})();
