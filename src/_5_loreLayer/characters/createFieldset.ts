import { setState } from "../../util/state";
import { characters } from "./data";

function createFieldset() {
    const elem = document.querySelector(".loreLayer .characters form");

    function addInput(id: string) {
        return `
            <label>
                <input
                    type="radio"
                    name="character"
                    value="${id}"
                    ${id === characters[0].id ? "checked" : ""}
                />
                <img
                    alt=""
                    src="/images/portraits/${id}.webp"
                    style="aspect-ratio: 186 / 227"
                />
            </label>
        `;
    }

    const html = `
        <fieldset>
            ${characters.map((char) => addInput(char.id)).join(" ")}
        </fieldset>
    `;

    elem?.insertAdjacentHTML("afterbegin", html);
}

function addListeners() {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        ".loreLayer [type='radio']",
    );

    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            setState({
                attribute: "data-character",
                value: input.value,
            });
        });
    });
}

createFieldset();
addListeners();
