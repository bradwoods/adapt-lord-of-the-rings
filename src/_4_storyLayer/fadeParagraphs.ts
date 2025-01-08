import { addObservers } from "../util/addObservers";

function fade(elem: Element) {
    if (!elem.classList.contains("fade")) {
        elem.classList.toggle("fade");
    }
}

function unfade(elem: Element) {
    if (elem.classList.contains("fade")) {
        elem.classList.toggle("fade");
    }
}

function addFadeObservers() {
    addObservers({
        options: {
            threshold: 1,
        },
        elems: document.querySelectorAll(".storyLayer :is(p, h2)"),
        onIntersect: (entry) => {
            const { target, isIntersecting } = entry;
            isIntersecting ? unfade(target) : fade(target);
        },
    });
}

window.innerWidth > 900 && addFadeObservers();
