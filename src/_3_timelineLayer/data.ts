export const daysCount = {
    nov: 30,
    dec: 31,
    jan: 31,
    feb: 28,
    mar: 31,
};

export type Month = keyof typeof daysCount;
export type Id = "rivendell" | "hollin" | "moria" | "balrog";

export type StoryEvent = {
    day: number;
    month: Month;
    copy: string;
    id: Id;
};

export const events: StoryEvent[] = [
    {
        day: 25,
        month: "dec",
        copy: "Depart Rivendell",
        id: "rivendell",
    },
    {
        day: 8,
        month: "jan",
        copy: "Arrive at Hollin",
        id: "hollin",
    },
    {
        day: 13,
        month: "jan",
        copy: "Enter Moria",
        id: "moria",
    },
    {
        day: 15,
        month: "jan",
        copy: "Gandalf defeated by a balrog",
        id: "balrog",
    },
];

export type StartOfMonth = Pick<StoryEvent, "copy" | "month">;

export const startOfMonths: StartOfMonth[] = [
    {
        month: "nov",
        copy: "1<sup>st</sup> November 3018 T.A",
    },
    {
        month: "dec",
        copy: "1<sup>st</sup> December 3018 T.A",
    },
    {
        month: "jan",
        copy: "1<sup>st</sup> January 3019 T.A (Third Age)",
    },
    {
        month: "feb",
        copy: "1<sup>st</sup> February 3019 T.A",
    },
];
