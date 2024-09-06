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

// Animasi Belt

const beltSound = new Audio("assets/sounds/sabukmuter.MP3");
beltSound.loop = false;
let running = false;

function rotatebeltlogo() {
    if (running) {
        return;
    }

    running = true;
    let move = null;
    let rotation = 0;
    beltSound.play();
    beltSound.currentTime = 0;
    const elem = document.getElementById("logobelt");

    clearInterval(move);
    move = setInterval(frame, 20);

    function frame() {
        if (rotation >= 720) {
            running = false;
            beltSound.pause();
            clearInterval(move);
        } else if (rotation == 360) {
            beltSound.play();
            rotation += 2;
        } else {
            rotation += 2;
            elem.style.transform = `rotate(${rotation}deg)`;
        }
    }
}

// Animasi Motor

const motorJauh = new Audio("assets/sounds/motorjauh.MP3");
motorJauh.loop = false;
const motorDekat = new Audio("assets/sounds/motordekat.MP3");
motorDekat.loop = false;
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

    motorJauh.play();
    motorJauh.currentTime = 0;

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
                motorDekat.play();
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
            rotationMotor += 0.2;
            motor.style.transform = `rotate(${rotationMotor}deg) translate(${posX}%, ${posY}%)`;
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
            posX -= 2;
            posY += 1.5;
            rotationMotor += 0.2;
            motor.style.transform = `rotate(${rotationMotor}deg) translate(${posX}%, ${posY}%)`;
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

// Hyperlink
function goToTelegram() {
    window.open("https://t.me/hamburg_sol");
}

function goToTwitter() {
    window.open("https://x.com/Hamburg_tuff");
}

function goToDexTools() {
    window.open(
        "https://www.dextools.io/app/en/solana/pair-explorer/6TdbXgBENkkwrjrYCopDdNCCyZnmodpu6pYXRAgZdMLg"
    );
}

function goToDexScreener() {
    window.open(
        "https://dexscreener.com/solana/6tdbxgbenkkwrjrycopddnccyznmodpu6pyxragzdmlg"
    );
}

function copyText() {
    navigator.clipboard.writeText(
        "CP4AK1sZfucyM7LBFr2eMJqd9wYcfR9nay8QgiC2Sasaww"
    );

    alert("Link berhasil disalin!");
}

function copyEmail() {
    navigator.clipboard.writeText("rcatdetective@gmail.com");

    alert("Email berhasil disalin!");
}
