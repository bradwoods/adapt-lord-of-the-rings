import { Character, characters } from "./data";

function createDetails() {
    const elem = document.querySelector(".loreLayer .characterDetails");

    function addCharacter({
        id,
        name,
        update,
        description,
        equipment,
        race,
    }: Character) {
        return `
            <div class="character ${id}">
                <div class="nameLayout">
                    <h3>${name}</h3>
                    <button
                        type="button"
                        class="pronounce"
                        data-value="${id}"
                    >
                        <svg viewBox="0 0 500 500">
                            <title>Pronounce name</title>
                            <polygon
                                points="69.68 166.86 0 166.86 0 331.3 67.56 331.3 217.42 460.93 217.42 39.07 69.68 166.86"
                            />
                            <path
                                d="M421.72,469.73l-25.99-20.88c22.91-28.52,40.57-60.41,52.49-94.8,11.61-33.5,17.5-68.5,17.5-104.05s-5.89-70.55-17.5-104.05c-11.92-34.39-29.58-66.29-52.49-94.81l25.99-20.88c25.31,31.5,44.82,66.75,58,104.77,12.83,37.02,19.33,75.7,19.33,114.96s-6.5,77.95-19.33,114.96c-13.17,38.01-32.69,73.26-58,104.77Z"
                            />
                            <path
                                d="M366.16,413.2l-26.83-19.78c30.84-41.84,47.15-91.44,47.15-143.42s-16.3-101.58-47.15-143.42l26.83-19.78c35.1,47.61,53.65,104.05,53.65,163.2s-18.55,115.58-53.65,163.2Z"
                            />
                            <path
                                d="M305.52,351.3l-27.87-18.29c33.1-50.43,33.1-115.6,0-166.02l27.87-18.29c40.39,61.54,40.39,141.07,0,202.61Z"
                            />
                        </svg>
                    </button>
                </div>

                ${update ? `<p class="update">${update}</p>` : ""}

                <p>${description}</p>

                <div class="raceLayout">
                    <h4>race:</h4>
                    <p>${race}</p>
                </div>
                
                <div class="equipmentLayout">
                    <h4>equipment</h4>
                    <ul>
                        ${equipment.map((item) => `<li>${item}</li>`).join(" ")}
                    </ul>
                </div>
            </div>
        `;
    }

    const html = characters.map(addCharacter).join(" ");

    elem?.insertAdjacentHTML("afterbegin", html);
}

createDetails();
