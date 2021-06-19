//goodies

//prevent default
export const prevDef = event => event.preventDefault();

//get vertical position
export const verticalPosition = (item, position) => item.getBoundingClientRect().top < position;

//getTimeDifference
export class TimeDifference {
    constructor() {
        this._time = 0;
    }

    set current(time) {
        this._time = time;
    }

    get difference() {
        return new Date() - this._time;
    }
}

//check element is visible
export function isPartialyVisible(item) {
    let elemRect = item.getBoundingClientRect();
    let top = elemRect.top;
    let bottom = elemRect.bottom;
    let height = elemRect.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

//throttle function
export function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}