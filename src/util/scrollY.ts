import { setState, getState } from "./state";

export function storeStoryScrollY() {
    setState({ attribute: "data-scroll-y", value: `${window.scrollY}` });
}

export function restoreStoryScrollY() {
    const y = getState("data-scroll-y");

    if (y) {
        window.scroll(0, +y);
    }
}

export function resetScroll() {
    window.scroll(0, 0);
}
