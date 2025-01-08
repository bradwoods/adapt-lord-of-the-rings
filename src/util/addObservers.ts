export function addObservers({
    elems,
    onIntersect,
    options,
}: {
    elems: NodeListOf<Element>;
    onIntersect: (entry: IntersectionObserverEntry) => void;
    options?: IntersectionObserverInit;
}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(onIntersect);
    }, options);

    for (let i = 0; i < elems.length; i++) {
        observer.observe(elems[i]);
    }
}
