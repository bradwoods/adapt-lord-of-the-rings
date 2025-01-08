import { setState } from "../util/state";
import { isBoolean } from "../util/isBoolean";
import { addObservers } from "../util/addObservers";
import { setTimelineState } from "../_3_timelineLayer/setTimelineState";

function addStateObservers(attribute: string) {
    addObservers({
        elems: document.querySelectorAll(`.storyLayer [${attribute}]`),
        options: {
            rootMargin: "-50% 0%",
        },
        onIntersect: (entry) => {
            const { target, isIntersecting } = entry;
            const value = target.getAttribute(attribute);

            if (!value) {
                return;
            }

            if (!isIntersecting && isBoolean(value)) {
                setState({ attribute, value: "false" });
                return;
            }

            if (isIntersecting) {
                setState({ attribute, value });

                if (attribute === "data-ring-location") {
                    setTimelineState(value);
                }
            }
        },
    });
}

["data-ring-location", "data-crows"].forEach(addStateObservers);
