import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        const nav = header.querySelector('.hb-header-nav') as HTMLElement
        if (!header) {
            return;
        }

        const activeMenu = (menu: Element) => {
            menu.classList.add('active')
            menu.setAttribute('aria-current', 'page')
            menu.parentElement?.classList.add('active')
            // active the 2nd level menu if current activated menu is 3rd level menu.
            if (menu.classList.contains('dropdown-item-child')) {
                menu.closest('.dropdown-item')?.classList.add('active')
            }
            const parent = menu.closest('.hb-header-menu')
            parent?.classList.add('active')
            parent?.querySelector('.nav-link:first-child')?.classList.add('active')
        }

        const isMenuParent = (parent) => {
            const href = parent.getAttribute('href')
            if (!href) {
                return false
            }

            return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1
        }

        const menus = nav.querySelectorAll(`.hb-header-menus a[href="${window.location.href}"],.hb-header-menus a[href="${window.location.pathname}"]`)
        if (menus.length > 0) {
            menus.forEach(menu => {
                activeMenu(menu)
            })
        } else {
            let foundParent = false
            const submenus = Array.from(document.querySelectorAll('a.hb-header-submenu'))
            // find parent menu from second-level and third-level menus.
            for (let menu of submenus) {
                if (isMenuParent(menu)) {
                    activeMenu(menu)
                    foundParent = true
                    break
                }
            }
            if (!foundParent) {
                // find parent menu from top-level menus.
                for (let menu of Array.from(nav.querySelectorAll('a.nav-link'))) {
                    if (isMenuParent(menu)) {
                        activeMenu(menu)
                        break
                    }
                }
            }
        }

        const shadow = () => {
            nav.classList.add('shadow-sm')
        }

        const removeShadow = () => {
            nav.classList.contains('shadow-sm') && nav.classList.remove('shadow-sm')
        }

        const show = () => {
            nav.style.removeProperty('opacity');
            nav.style.removeProperty('z-index');
        }

        const hide = () => {
            nav.style.opacity = '0';
            nav.style.zIndex = '0';
        }

        let h = 0;
        const threshold = 20;
        if (document.documentElement.scrollTop !== 0) {
            header.classList.add('scrolling')
        }

        const isMobile = (): boolean => {
            return window.innerWidth < 576
        }

        window.addEventListener('resize', () => {
            if (!isMobile()) {
                show()
            }
        })

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop === 0) {
                header.classList.remove('scrolling')
                removeShadow()
            } else {
                header.classList.add('scrolling')
                shadow()
            }
            if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
                document.documentElement.scrollTop > h ? hide() : show();
                h = document.documentElement.scrollTop;
            }
        })
    })
})()
