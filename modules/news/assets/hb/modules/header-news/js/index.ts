(() => {
  const toggle = document.querySelector('.header-news-toggle')
  if (toggle === null) {
    return
  }

  const firstDate = (): string => {
    return document.querySelector('.header-news-item')?.getAttribute('data-date')??''
  }

  const readKey = 'header-news-last'
  const counter = document.querySelector('.header-news-count')

  const showCounter = (): void => {
    counter?.classList.remove('d-none')
  }

  const hideCounter = (): void => {
    counter?.classList.add('d-none')
  }

  const toggleCounter = (): void => {
    const last = localStorage.getItem(readKey)
    if (last !== null && last === firstDate()) {
      return
    }

    showCounter()
  }

  toggleCounter()

  toggle.addEventListener('shown.bs.dropdown', () => {
    localStorage.setItem(readKey, firstDate())
    hideCounter()
  })
})()
