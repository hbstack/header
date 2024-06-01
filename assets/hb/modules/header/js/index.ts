import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        const nav = header.querySelector('.hb-header-nav') as HTMLElement
        if (!header) {
            return;
        }

        const menus = nav.querySelectorAll(`a[href="${window.location.href}"], a[href="${window.location.pathname}"]`)
        menus.forEach(menu => {
            menu.classList.add('active')
            menu.setAttribute('aria-current', 'page')
            menu.parentElement?.classList.add('active')
            const parent = menu.closest('.hb-header-menu')
            parent?.classList.add('active')
            parent?.querySelector('.nav-link:first-child')?.classList.add('active')
        })

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
