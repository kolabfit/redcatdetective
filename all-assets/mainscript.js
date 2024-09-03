function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("resize", function () {
    setPage();
});

window.addEventListener("load", function () {
    setPage();
});

function setPage() {
    const framescreen = document.getElementById("framescreen");
    framescreen.style.height = window.innerHeight + "px";
    console.log(framescreen.style.height + "px");
}