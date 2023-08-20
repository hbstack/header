import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        const nav = header.querySelector('.hb-header-nav') as HTMLElement
        if (!header) {
            return;
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

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop === 0) {
                header.classList.remove('scrolling')
                removeShadow()
            } else {
                header.classList.add('scrolling')
                shadow()
            }
            if (window.innerWidth < 576 && Math.abs(document.documentElement.scrollTop - h) > threshold) {
                document.documentElement.scrollTop > h ? hide() : show();
                h = document.documentElement.scrollTop;
            }
        })
    })
})()
