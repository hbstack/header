import params from "@params";
(() => {
  const nav = document.querySelector('.hb-header-nav') as HTMLElement
  if (!nav) {
    return
  }

  const topOffset = () => {
      const v =  nav.clientHeight + 24
      document.body.style.setProperty(`--${params.prefix}top-offset`, v + 'px')
  }

  if (params.sticky) {
      topOffset()
      window.addEventListener('resize', () => {
          topOffset()
      })
  }
})()
