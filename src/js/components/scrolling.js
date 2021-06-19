//prevent scroll when hamburger is active
import {prevDef} from "./goodies.js";

export function preventScroll(event, HAMBURGER, checkBoxClassname) {

    if ([...event.target.classList].includes(checkBoxClassname)) {
        (HAMBURGER.checked)  ? document.addEventListener('wheel', prevDef, {passive: false})
                            : document.removeEventListener('wheel', prevDef);
    }

    if (event.target.nodeName === 'A' || event.target.nodeName === 'BUTTON') {
        HAMBURGER.checked = false;
        document.removeEventListener('wheel', prevDef);
    }
}