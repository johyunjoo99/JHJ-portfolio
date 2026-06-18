//100vw
function updateVw() {
    const vw = document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}
updateVw();
window.addEventListener('resize', updateVw);

//100vh
const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
};
window.addEventListener('load', setVh);
setVh();