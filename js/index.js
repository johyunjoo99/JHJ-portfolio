// slogan
const visual = document.querySelector("#visual");
const slogan = visual.querySelector(".slogan");
const origin = slogan.querySelector(".origin");
const clone = origin.cloneNode(true);

clone.classList.remove("origin");
clone.classList.add("clone");
slogan.append(clone);