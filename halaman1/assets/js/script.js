// Parallax
document.addEventListener("mousemove", function (e) {
    const langit = document.getElementById("langit");
    const awan = document.getElementById("awan");
    const landscape = document.getElementById("landscape");
    const title = document.getElementById("title");

    const speedAwan = 0.06;
    const speedlangit = 0.03;
    const speedLandscape = 0.008;
    const speedTitle = 0.02;

    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;

    const offsetAwan = (mouseX - windowWidth / 2) * speedAwan;
    const offsetlangit = (mouseX - windowWidth / 2) * speedlangit;
    const offsetLandscape = (mouseX - windowWidth / 2) * speedLandscape;
    const offsetTittle = (mouseX - windowWidth / 2) * speedTitle;

    awan.style.transform = `translateX(${offsetAwan}px)`;
    langit.style.transform = `translateX(${offsetlangit}px)`;
    landscape.style.transform = `translateX(${offsetLandscape}px)`;
    title.style.transform = `translateX(${offsetTittle}px)`;
});

// Blinking

const blink = document.getElementById("blink");

const randomDelay = Math.random() * 2 + "s"; // Random delay between 0 and 2 seconds
blink.style.setProperty("--random-delay", randomDelay);

// Animasi Belt

let running = false;

function rotatebeltlogo() {
    if (running) {
        return;
    }

    running = true;
    let move = null;
    let rotation = 0;
    const elem = document.getElementById("logobelt");

    clearInterval(move);
    move = setInterval(frame, 20);

    function frame() {
        if (rotation >= 720) {
            running = false;
            clearInterval(move);
        } else {
            rotation += 2;
            elem.style.transform = `rotate(${rotation}deg)`;
        }
    }
}

// Animasi Motor

let runningMotor = false;

function motorRide() {
    if (runningMotor) {
        return;
    }

    runningMotor = true;

    let move = null;
    let posX = 0;
    let posY = 0;
    let rotationMotor = 0;

    clearInterval(move);
    move = setInterval(firstFrame, 20);

    const motor = document.getElementById("motor");

    function firstFrame() {
        if (posX <= -600 && posY >= 200) {
            clearInterval(move);
            setTimeout(() => {
                motor.style.width = 30 + "%";
                motor.style.height = 64 + "%";
                posX = -130;
                posY = 50;
                motor.style.transform = `translate(${posX}%, ${posY}%)`;
                move = setInterval(secondFrame, 20);
            }, 1000); // Delay 1 detik
        } else {
            posX -= 10;
            posY += 4;
            motor.style.transform = `translate(${posX}%, ${posY}%)`;
        }
    }

    function secondFrame() {
        if (posX <= -40 && posY <= -50) {
            clearInterval(move);
            motor.style.zIndex = 40;
            move = setInterval(thirdFrame, 20);
        } else {
            posX -= 2;
            posY -= 5;
            rotationMotor += 0.1;
            motor.style.transform = `rotate(${rotationMotor}deg)`;
            motor.style.transform = `translate(${posX}%, ${posY}%)`;
        }
    }

    function thirdFrame() {
        if (posX <= -400 && posY >= 50) {
            runningMotor = false;
            motor.style.zIndex = 3;
            motor.style.transform = `translate(0%, 0%)`;
            motor.style.width = 8 + "%";
            motor.style.height = 16 + "%";
            clearInterval(move);
        } else {
            posX -= 1;
            posY += 0.5;
            motor.style.transform = `translate(${posX}%, ${posY}%)`;
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
