const elem = document.querySelector(".tombLight ");

const options = {
    // Trigger intersection when top of the element hits the top of the viewport
    rootMargin: "0px 0px -100% 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries[0].isIntersecting
        ? elem?.classList.add("show")
        : elem?.classList.remove("show");
}, options);

elem && observer.observe(elem);
