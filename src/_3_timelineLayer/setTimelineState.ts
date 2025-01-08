import { events, Id, StoryEvent } from "./data";
import { calcTimelineTranslate } from "./timelineLayer";

type Acc = Record<Id, Omit<StoryEvent, "id">>;

const eventsById = events.reduce((acc, item) => {
    const { id, ...rest } = item;
    acc[id] = rest;
    return acc;
}, {} as Acc);

export function getEvent(ringLocation: string) {
    switch (ringLocation) {
        case "rivendell":
            return eventsById.rivendell;
        case "hollin1":
        case "hollin2":
        case "caradhras1":
        case "caradhras2":
        case "wallsOfMoria":
            return eventsById.hollin;
        case "dimrillDale":
            return eventsById.balrog;
        default:
            return eventsById.moria;
    }
}

const elem: HTMLElement | null = document.querySelector(".timelineLayer .days");

export function setTimelineState(ringLocation: string) {
    const { day, month } = getEvent(ringLocation);
    const x = calcTimelineTranslate({ day, month });

    if (elem) {
        elem.style.translate = `${x}px`;
    }
}

setTimelineState("rivendell");
