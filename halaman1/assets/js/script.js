// Parallax
document.addEventListener("mousemove", function (e) {
    const langit = document.getElementById("langit");
    const awan = document.getElementById("awan");
    const landscape = document.getElementById("landscape");

    const speedAwan = 0.06;
    const speedlangit = 0.03;
    const speedLandscape = 0.005;

    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;

    const offsetAwan = (mouseX - windowWidth / 2) * speedAwan;
    const offsetlangit = (mouseX - windowWidth / 2) * speedlangit;
    const offsetLandscape = (mouseX - windowWidth / 2) * speedLandscape;

    awan.style.transform = `translateX(${offsetAwan}px)`;
    langit.style.transform = `translateX(${offsetlangit}px)`;
    landscape.style.transform = `translateX(${offsetLandscape}px)`;
});

// Animasi Belt

let running = false;

function animateBurgerRocket() {
    if (running) {
        return;
    }

    running = true;
    let move = null;
    let posY = 35.0;
    let posX = 32.0;
    rocketTerbangAudio.play();
    rocketTerbangAudio.currentTime = 0;
    const elem = document.getElementById("logobelt");

    clearInterval(move);
    move = setInterval(frame, 20);

    function frame() {
        if (posX >= 80 && posY <= -100) {
            running = false;
            clearInterval(move);
        } else {
            posX += 0.1;
            posY -= 0.7;
            elem.style.left = posX + "%";
            elem.style.top = posY + "%";
        }
    }
}

let runningDoor = false;
let clickedDoor = false;

function animateDoor() {
    if (runningDoor || clickedDoor) {
        return;
    }

    soundOpenDoor.play();
    soundWind.play();

    runningDoor = true;

    let move = null;
    let posX = 0;

    clearInterval(move);
    move = setInterval(openFrame, 20);

    const door = document.getElementById("door");
    const barangMasuk = document.getElementById("barangMasuk");

    function openFrame() {
        if (posX <= -60) {
            clearInterval(move);
            setTimeout(() => {
                move = setInterval(closeFrame, 20);
            }, 2000); // Tahan pintu terbuka selama 2 detik
        } else {
            posX -= 1;
            door.style.transform = `translate(${posX}%, 0)`;
            barangMasuk.style.display = "block";
            // if (posX <= -15) {
            //     barangMasuk.style.display = "block";
            // }
        }
    }

    function closeFrame() {
        if (posX >= 0) {
            clearInterval(move);
            barangMasuk.style.display = "none";
            soundOpenDoor.pause();
            soundWind.pause();
            soundOpenDoor.currentTime = 0;
            soundWind.currentTime = 0;
            clickanimation.style.display = "block";
            runningDoor = false;
        } else {
            posX += 0.8;
            door.style.transform = `translate(${posX}%, 0)`;
        }
    }
}

function enterDoor() {
    if (clickedDoor || runningDoor) {
        return;
    }

    const clickanimation = document.getElementById("clickanimation");
    clickanimation.style.display = "none";

    soundOpenDoor.play();
    soundWind.play();

    clickedDoor = true;
    let move = null;
    let posX = 0;
    const elem = document.getElementById("door");

    clearInterval(move);
    move = setInterval(openFrame, 20);

    const door = document.getElementById("door");
    const barangMasuk = document.getElementById("barangMasuk");

    function openFrame() {
        if (posX <= -60) {
            clearInterval(move);
            soundOpenDoor.pause();
            soundWind.pause();
            soundOpenDoor.currentTime = 0;
            soundWind.currentTime = 0;
            window.top.open("../page2.html", "_self");
        } else {
            posX -= 1;
            elem.style.transform = `translate(${posX}%, 0)`;
            barangMasuk.style.display = "block";
            // if (posX <= -15) {
            //     barangMasuk.style.display = "block";
            // }
        }
    }
}

// Popup
function popupShow() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("container-main").style.filter = "blur(3px)";
    document.getElementById("container-main").style.transition = "filter 0.5s";
}

function popupHide() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("container-main").style.filter = "none";
}
