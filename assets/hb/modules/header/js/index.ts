import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        if (!header || window.innerWidth >= 576) {
            return;
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
            if (Math.abs(document.documentElement.scrollTop - h) > threshold) {
                document.documentElement.scrollTop > h ? hide() : show();
                h = document.documentElement.scrollTop;
            }
        })
    })
})()
