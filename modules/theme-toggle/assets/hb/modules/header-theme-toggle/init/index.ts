(() => {
    'use strict'

    const THEME_AUTO = 'auto'
    const THEME_DARK = 'dark'
    const THEME_LIGHT = 'light'

    const THEME_KEY = 'hb-theme'

    /**
     * Get the system's preferred theme.
     * 
     * @returns {string}
     */
    const getPreferredTheme = (): string => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT
    }

    /**
     * Get current theme.
     * 
     * @returns {string}
     */
    const getTheme = (): string => {
        const v = localStorage.getItem(THEME_KEY)
        return v ? v : THEME_AUTO
    }

    /**
     * Set the theme with the given theme.
     * 
     * @param {string} theme
     * @param {boolean} save whether to save it to localStorage.
     */
    const setTheme = (theme: string, save = false) => {
        save && localStorage.setItem(THEME_KEY, theme)
        const value = theme === THEME_AUTO ? getPreferredTheme() : theme
        document.documentElement.setAttribute('data-bs-theme', value)
        onSet(value)
    }

    /**
     * Emits a custom event on theme change.
     * 
     * @param {string} theme 
     */
    const onSet = (theme) => {
        const event = new CustomEvent('hb:theme', { detail: { theme: theme } });
        document.dispatchEvent(event);
    }

    /**
     * Active current theme's icon.
     * 
     * @param {string} theme 
     */
    const activeTheme = (theme: string) => {
        let name = ''
        document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
            if (toggle.getAttribute('data-bs-theme-value') === theme) {
                toggle.classList.add('active')
                name = toggle.getAttribute('data-bs-theme-name') ?? ''
            } else {
                toggle.classList.remove('active')
            }
        })

        // sync theme icon.
        const newIcon = document.body.querySelector(`[data-bs-theme-value="${theme}"] svg`)?.cloneNode(true) as HTMLElement
        const oldIcon = document.body.querySelector('.btn-theme-toggle svg')
        oldIcon?.replaceWith(newIcon)
        // sync theme name.
        const nameEle = document.querySelector('.theme-toggle .theme-name') as HTMLElement
        nameEle.innerHTML = name
    }

    const theme = getTheme()
    // Set the data attribute ASAP, in order to avoid flickering.
    setTheme(theme)

    window.addEventListener('DOMContentLoaded', () => {
        // Active the theme's icon on page load.
        activeTheme(theme)

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (getTheme() !== THEME_AUTO) {
                return
            }

            // DO NOT save the theme.
            setTheme(e.matches ? THEME_DARK : THEME_LIGHT)
        })

        const activeToggle = (toggle: Element): void => {
            const v = toggle.getAttribute('data-bs-theme-value')
            const theme = v ? v : THEME_AUTO
            setTheme(theme, true)
            activeTheme(theme)
        }

        const toggles = document.querySelectorAll('[data-bs-theme-value]')
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                activeToggle(toggle)
            })
        })

        const btnToggle = document.querySelector('.btn-theme-toggle')
        if (btnToggle !== null && btnToggle.getAttribute('data-style') === 'switch') {
            btnToggle.addEventListener('click', () => {
                let next = 0
                toggles.forEach((toggle, i) => {
                    if (toggle.classList.contains('active')) {
                        next = i+1
                        return
                    }
                })
                if (next >= toggles.length) {
                    next = 0
                }
                activeToggle(toggles[next])
            })
        }
    })
})()
