// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

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

const loopingSound = new Audio("all-assets/backsoundsfx.MP3");

const musichandler = document.getElementById("musichandler");

loopingSound.loop = true;

let isPlaying = false;

function handleMusic() {
    if (isPlaying) {
        loopingSound.pause();
        musichandler.style.backgroundImage = "url('all-assets/play.png')";
        isPlaying = false;
    } else {
        loopingSound.play();
        musichandler.style.backgroundImage = "url('all-assets/pause.png')";
        isPlaying = true;
    }
}
