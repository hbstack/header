import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        if (!header) {
            return;
        }

        const shadow = () => {
            header.classList.add('shadow-sm')
        }

        const removeShadow = () => {
            header.classList.contains('shadow-sm') && header.classList.remove('shadow-sm')
        }

        const show = () => {
            header.style.removeProperty('opacity');
            header.style.removeProperty('z-index');
        }

        const hide = () => {
            header.style.opacity = '0';
            header.style.zIndex = '0';
        }

        let h = 0;
        const threshold = 20;
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop === 0) {
                removeShadow()
            } else {
                shadow()
            }
            if (window.innerWidth < 576 && Math.abs(document.documentElement.scrollTop - h) > threshold) {
                document.documentElement.scrollTop > h ? hide() : show();
                h = document.documentElement.scrollTop;
            }
        })
    })
})()
