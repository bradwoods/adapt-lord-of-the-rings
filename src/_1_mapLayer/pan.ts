const mapLayer: HTMLElement | null = document.querySelector(".mapLayer");
const mapLayout: HTMLElement | null = document.querySelector(".mapLayout");

type Coords = { x: number; y: number };

const defaultCoords = { x: 0, y: 0 };

let initialPosition = { ...defaultCoords };
let initialTranslate = { ...defaultCoords };

function move({ x, y }: Coords) {
    if (!mapLayout) {
        return;
    }

    mapLayout.style.translate = `${x}px ${y}px`;
}

function reset() {
    initialPosition = { ...defaultCoords };
    initialTranslate = { ...defaultCoords };

    move(defaultCoords);
}

function parseTranslateString(translate?: string) {
    if (!translate) {
        return initialTranslate;
    }

    const [x, y] = translate.split(" ").map((v) => parseInt(v, 10));
    // The browser can change 'translate: 0px 0px;' to 'translate: 0px;'. Workaround:
    return { x, y: isNaN(y) ? 0 : y };
}

function pan(evt: PointerEvent) {
    const dx = evt.clientX - initialPosition.x;
    const dy = evt.clientY - initialPosition.y;
    const x = initialTranslate.x + dx;
    const y = initialTranslate.y + dy;

    move({ x, y });
}

function addListeners() {
    mapLayer?.addEventListener("pointermove", pan);
    mapLayer?.addEventListener("pointerup", removeListeners);
    mapLayer?.addEventListener("pointerleave", removeListeners);
}

function removeListeners() {
    mapLayer?.removeEventListener("pointermove", pan);
    mapLayer?.removeEventListener("pointerup", removeListeners);
    mapLayer?.removeEventListener("pointerleave", removeListeners);
}

function startPanning(evt: PointerEvent) {
    evt.preventDefault();

    initialPosition = { x: evt.clientX, y: evt.clientY };
    initialTranslate = parseTranslateString(mapLayout?.style.translate);

    addListeners();
}

export function enablePanning() {
    mapLayout?.classList.add("disableAnimate");
    mapLayout?.addEventListener("pointerdown", startPanning);
}

export function disablePanning() {
    mapLayout?.classList.remove("disableAnimate");
    mapLayout?.removeEventListener("pointerdown", startPanning);
    reset();
}
