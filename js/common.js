const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelector("#top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
});