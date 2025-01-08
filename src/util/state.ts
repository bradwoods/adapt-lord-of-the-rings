export function setState({
    attribute,
    value,
}: {
    attribute: string;
    value: string;
}) {
    document.body.setAttribute(attribute, value);
}

export function getState(attribute: string) {
    return document.body.getAttribute(attribute);
}

// FOR DEV --------------------------------------------------------
// (function overrideInitialState() {
//     [
//         // story || characters || gondor || minasTirith || ...
//         ["data-screen", "minasTirith"],
//         // ["data-map-size", "large"],
//         // ["data-ring-location", "hall3"],
//     ].forEach(([attribute, value]) => {
//         setState({ attribute, value });
//     });
// })();

// (function overrideScrollY() {
//     setTimeout(() => {
//         window.scrollTo(0, 5000);
//     }, 100);
// })();
