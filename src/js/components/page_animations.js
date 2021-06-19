//animate page elements
export function pageAnimations(complex, boolFunction) {
    if (!complex) return;

    let item = complex.item;
    let classList = complex.classList;

    if (Array.isArray(item)) {
        for (let element of item) {
            (boolFunction(element)) ? element.classList.add(classList) : element.classList.remove(classList);
        }
    } else {
        (boolFunction(item)) ? item.classList.add(classList) : item.classList.remove(classList);
    }
}


