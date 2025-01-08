export type Character = {
    id: string;
    name: string;
    update?: string;
    description: string;
    equipment: string[];
    race: string;
};

export const characters = [
    {
        name: "Gandalf the Grey",
        update: "Defeated by a balrog in Moria.",
        description:
            "Wise and powerful wizard. Mentor and guide. Vast knowledge, strategic mind and unwavering commitment to the fight against Sauron.",
        id: "gandalf",
        race: "Mairar",
        equipment: [
            "Staff.",
            "Elven-sword Glamdring, the mate of Orcrist that lay now upon the breast of Thorin under the Lonely Mountain.",
            "Flask of <em>miruvor</em>, the cordial of Imladris. Warm and fragrant liquor that gives fresh hope and vigour.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Aragorn (Strider)",
        description: `Son of Arathorn II. Descendant of Isildur. A ranger of the North and the heir to the throne of <button class="lore" type="button" data-value="gondor">Gondor</button>. Skilled in combat and survival. Acts as both a protector and guide.`,
        id: "aragorn",
        race: "Man",
        equipment: ["And&ucirc;ril.", "Jacket and cloak lined with fur."],
    },
    {
        name: "Boromir",
        description: `Son of Denethor II. Valiant warrior of <button class="lore" type="button" data-value="gondor">Gondor</button>. Renowned for his prowess in combat and skill on the battlefield.`,
        id: "boromir",
        race: "Man",
        equipment: [
            "Long sword in fashion like And&ucirc;ril but of less lineage.",

            "Shield.",
            "War-horn.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Legolas Greenleaf",
        description: "Son of Thranduil, King of Mirkwood. Master archer.",
        id: "legolas",
        race: "Elf",
        equipment: [
            "Bow and a quiver.",
            "Long white knife.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Gimli",
        description: "Son of Gl&#xf3;in",
        id: "gimli",
        race: "Dwarf",
        equipment: [
            "Short shirt of steelrings.",
            "Broad-bladed axe.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Frodo Baggins",
        description:
            "Frodo Baggins A humble hobbit from the Shire. Ring-bearer tasked with destroying the One Ring.",
        id: "frodo",
        race: "Hobbit",
        equipment: [
            "The one ring.",
            "Sting.",
            "Bilbo's mail-coat made of mithril (concealed).",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Samwise Gamgee (Sam)",
        description: "Frodo's loyal gardener and steadfast friend.",
        id: "sam",
        race: "Hobbit",
        equipment: [
            "Sword from the barrow.",
            "Cooking gear.",
            "Little box of salt.",
            "Supply of pipe-weed.",
            "Flint and tinder.",
            "Woollen hose.",
            "Linen.",
            `Various small belongings of his master's that Frodo had forgotten and Sam had stowed to bring them out in triumph when they were called for.`,
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Meriadoc Brandybuck (Merry)",
        description: "Has a deep bond with Pippin.",
        id: "merry",
        race: "Hobbit",
        equipment: [
            "Sword from the barrow.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Peregrin Took (Pippin)",
        description:
            "The youngest and most curious member of the Fellowship. Impulsive.",
        id: "pippin",
        race: "Hobbit",
        equipment: [
            "Sword from the barrow.",
            "Jacket and cloak lined with fur.",
        ],
    },
    {
        name: "Bill",
        id: "bill",
        race: "Pony",
        description:
            "Purchased in Bree from Bill Ferny for twelve silver pennies.",
        equipment: ["Spare food, clothes, blankets and other needs."],
        update: "Fled during the encounter with the <em>Watcher in the Water</em>",
    },
];
