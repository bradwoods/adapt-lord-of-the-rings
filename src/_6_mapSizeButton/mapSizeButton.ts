import { enablePanning, disablePanning } from "../_1_mapLayer/pan";
import { storeStoryScrollY, restoreStoryScrollY } from "../util/scrollY";
import { getState, setState } from "../util/state";

document.querySelector("button.mapSize")?.addEventListener("click", () => {
    const size = getState("data-map-size");
    const isStoryScreen = getState("data-screen") === "story";

    if (size === "small") {
        isStoryScreen && storeStoryScrollY();
        setState({ attribute: "data-map-size", value: "large" });
        enablePanning();
    } else {
        disablePanning();
        setState({ attribute: "data-map-size", value: "small" });
        isStoryScreen && restoreStoryScrollY();
    }
});
