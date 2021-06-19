//tabs
export function tabToggle(event, TABS, className) {
    let index = +event.target.dataset.id;
    TABS.forEach(tab => tab.classList.remove(className));
    TABS[index].classList.add(className);
}

export function tabUnderline(TAB_LINE, TAB_HOLDER, item) {
    let link = item.getBoundingClientRect();
    let holder = TAB_HOLDER.getBoundingClientRect();
    let left = link.x - holder.x;

    TAB_LINE.style.transform = `translateX(${left}px)`;
    TAB_LINE.style.width = `${link.width}px`;
}