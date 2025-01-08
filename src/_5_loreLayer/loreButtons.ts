import { resetScroll, restoreStoryScrollY } from "../util/scrollY";
import { setState } from "../util/state";

const buttons = document.querySelectorAll(".loreLayer button.lore");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value") ?? "";
        setState({ attribute: "data-screen", value });

        value === "story" ? restoreStoryScrollY() : resetScroll();
    });
});
