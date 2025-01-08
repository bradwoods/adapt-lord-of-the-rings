import {
    daysCount,
    events,
    Month,
    StartOfMonth,
    startOfMonths,
    StoryEvent,
} from "./data";

const gapPx = 10;
const months = Object.keys(daysCount) as Month[];
const elem = document.querySelector(".timelineLayer");

function addDayLines(count: number) {
    return Array(count).fill('<div class="day"></div>').join(" ");
}

function addStartOfMonth({ copy, month }: StartOfMonth) {
    const left = calcPositionX({
        day: 1,
        month,
    });

    return `
        <div class="startOfMonthCopy" style="left: ${left}px;">
            ${copy}
        </div>
    `;
}

function addEvent({ day, month, copy, id }: StoryEvent) {
    const left = calcPositionX({
        day,
        month,
    });

    return `
        <div class="event ${id}" style="left: ${left}px;">
            <div class="copy">${copy}</div>
            <div class="arrow"></div>
        </div>
    `;
}

function calcPositionX({ day, month }: Pick<StoryEvent, "day" | "month">) {
    let dayCount = 0;
    const monthI = months.indexOf(month);
    const startOfMonthCount = monthI;

    // Add all days before selected month
    for (let i = 0; i < monthI; i++) {
        dayCount += daysCount[months[i] as Month];
    }

    dayCount += day;
    const gapCount = dayCount - 1;

    // -1 because first day should start at 0
    // + startOfMonthCount because startOfMonth line is 2px (days are 1px)
    const xPx = dayCount - 1 + gapCount * gapPx + startOfMonthCount;

    return xPx;
}

// We translate .days so the target event is positioned at the left side of the parent.
// Then .days is set to left: 50% to position the event to the middle.
export function calcTimelineTranslate({
    day,
    month,
}: Pick<StoryEvent, "day" | "month">) {
    return -1 * calcPositionX({ day, month });
}

// prettier-ignore
const html = `
	<div class="days" style="gap: ${gapPx}px;">
        <div class="startOfMonthLine"></div>
        ${months.map((month) => `
            ${addDayLines(daysCount[month] - 1)}
            <div class="startOfMonthLine"></div>`,
        ).join(" ")}
        ${startOfMonths.map(addStartOfMonth).join(" ")}
        ${events.map(addEvent).join(" ")}
	</div>
`;
elem?.insertAdjacentHTML("afterbegin", html);
