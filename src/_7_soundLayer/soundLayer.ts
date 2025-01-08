import { setState } from "../util/state";
import {
    initButtonClickSounds,
    initPronounceSounds,
    initRingHoverSound,
    initStorySounds,
} from "./sounds";

const buttons = {
    on: document.querySelector(`.soundLayer button[data-value="on"]`),
    off: document.querySelector(`.soundLayer button[data-value="off"]`),
};

function changeScreen() {
    setState({ attribute: "data-screen", value: "story" });
}

buttons.on?.addEventListener("click", () => {
    changeScreen();
    initStorySounds();
    initPronounceSounds();
    initButtonClickSounds();
    initRingHoverSound();
});

buttons.off?.addEventListener("click", () => {
    changeScreen();
    // Even if sound disabled, the user would expect a pronounce button to trigger sound when clicked
    initPronounceSounds();
});
