import "js/bootstrap/src/dropdown";
import "js/bootstrap/src/offcanvas";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.hb-header') as HTMLElement
        if (!header) {
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
        window.addEventListener('scroll', () => {
            console.log( document.documentElement.scrollTop, h)
            document.documentElement.scrollTop > h ? hide() : show();
            h = document.documentElement.scrollTop;
        })
    })
})()
