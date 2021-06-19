//hover effects toggle (for properly work needs TimeDifference from goodies)
import {throttle} from "./goodies.js";

export let enableHover = throttle(function () {

    if (document.body.classList.contains('hasHover')) return;
    document.body.classList.add('hasHover');
}, 500);

export let disableHover = throttle(function () {

    if (!document.body.classList.contains('hasHover')) return;
    document.body.classList.remove('hasHover');
}, 500);