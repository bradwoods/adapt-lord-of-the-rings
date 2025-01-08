import { storeStoryScrollY } from "../../util/scrollY";
import { setState } from "../../util/state";
import { disablePanning } from "../pan";

const buttons = document.querySelectorAll(".mapLayer button");

// prevent panning
buttons.forEach((button) => {
    button?.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
    });
});

buttons.forEach((button) => {
    button?.addEventListener("click", () => {
        // If user is panning map, don't store scroll position
        if (window.scrollY > 0) {
            storeStoryScrollY();
        }

        setState({
            attribute: "data-screen",
            value: button.getAttribute("data-value") ?? "",
        });
        setState({ attribute: "data-map-size", value: "small" });
        disablePanning();
        window.scroll(0, 0);
    });
});
