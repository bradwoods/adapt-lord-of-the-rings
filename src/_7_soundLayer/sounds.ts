import { addObservers } from "../util/addObservers";

export function initStorySounds() {
    const sounds = {
        wind: new Audio("/sounds/story/wind.mp3"),
        drums: new Audio("/sounds/story/drums.mp3"),
        horn: new Audio("/sounds/story/horn.mp3"),
        pass: new Audio("/sounds/story/pass.mp3"),
    };

    const elems = document.querySelectorAll(".storyLayer [data-sound]");

    type Sound = keyof typeof sounds;

    addObservers({
        elems,
        onIntersect: (entry) => {
            const { target, isIntersecting } = entry;

            if (isIntersecting) {
                const value = target.getAttribute("data-sound") as Sound;
                const sound = sounds[value as Sound];

                sound.currentTime = 0;
                sound.play();
            }
        },
        options: {
            rootMargin: "-50% 0%",
        },
    });
}

export function initPronounceSounds() {
    const sounds: { [key: string]: HTMLAudioElement } = {
        gandalf: new Audio("/sounds/names/gandalf.mp3"),
        aragorn: new Audio("/sounds/names/aragorn.mp3"),
        boromir: new Audio("/sounds/names/boromir.mp3"),
        legolas: new Audio("/sounds/names/legolas.mp3"),
        gimli: new Audio("/sounds/names/gimli.mp3"),
        frodo: new Audio("/sounds/names/frodo.mp3"),
        sam: new Audio("/sounds/names/sam.mp3"),
        merry: new Audio("/sounds/names/merry.mp3"),
        pippin: new Audio("/sounds/names/pippin.mp3"),
        bill: new Audio("/sounds/names/bill.mp3"),
    };

    const buttons = document.querySelectorAll(".loreLayer button.pronounce");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.getAttribute(
                "data-value",
            ) as keyof typeof sounds;
            sounds[name].play();
        });
    });
}

export function initButtonClickSounds() {
    const elems = document.querySelectorAll(`
        button:not(.pronounce), 
        input[type="radio"]
    `);
    const sound = new Audio("/sounds/click.mp3");

    elems.forEach((button) => {
        button.addEventListener("click", () => {
            sound.play();
        });
    });
}

export function initRingHoverSound() {
    const elem = document.querySelector(`.mapLayer button.ring`);
    const sound = new Audio("/sounds/blackSpeech.mp3");

    elem?.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
    });

    elem?.addEventListener("mouseleave", () => {
        sound.pause();
    });
}
