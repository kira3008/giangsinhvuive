const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

showButton.addEventListener("click", function () {
    if (christmasMessage.style.display === "none") {
        christmasMessage.style.display = "block";
    } else {
        christmasMessage.style.display = "none";
    }
});

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("as").style.display = "block";
});

document.getElementById("showButton").addEventListener("click", function () {
    var guideInfo = document.getElementById("guideInfo");
    var button = document.getElementById("showButton");
    var treeContainer = document.querySelector(".tree-container");

    button.classList.add("hidden");
    guideInfo.classList.remove("hidden");
    guideInfo.classList.add("show");
    treeContainer.classList.add("hidden");
});

document.getElementById("closeButton").addEventListener("click", function () {
    var guideInfo = document.getElementById("guideInfo");
    var button = document.getElementById("showButton");
    var treeContainer = document.querySelector(".tree-container");

    guideInfo.classList.remove("show");
    setTimeout(function () {
        guideInfo.classList.add("hidden");
        button.classList.remove("hidden");
        treeContainer.classList.remove("hidden");
    }, 500);
});

const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
    treeIcon.classList.add("shake-animation");
});

treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
});

function createSnowflakes() {
    const snowflakesContainer = document.createElement("div");
    snowflakesContainer.classList.add("snowflakes");
    document.body.appendChild(snowflakesContainer);

    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        const shape = Math.random();
        if (shape < 0.33) {
            snowflake.classList.add("star");
        } else if (shape < 0.66) {
            snowflake.classList.add("diamond");
        }

        const size = Math.random() * 10 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.setProperty("--random-x", Math.random());

        snowflakesContainer.appendChild(snowflake);
    }
}

window.onload = function() {
    createSnowflakes();
    
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translate(-50%, -50%) perspective(2000px) rotate(15deg) scale(1.2)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translate(-50%, -50%) perspective(2000px)';
        });
    }
    
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('mouseover', function() {
            this.style.color = 'red';
        });
        
        closeBtn.addEventListener('mouseout', function() {
            this.style.color = 'black';
        });
    }
};

function playChristmasSound() {
    const audio = new Audio('christmas-sound.mp3');
    audio.play();
}

document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

function optimizeForMobile() {
    if (window.innerWidth < 768) {
        return 50;
    }
    return 100;
}

window.addEventListener('resize', function() {
    const snowflakes = document.querySelector('.snowflakes');
    if (snowflakes) {
        snowflakes.remove();
        createSnowflakes();
    }
});

window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    document.body.appendChild(loader);
    
    setTimeout(function() {
        loader.remove();
    }, 1000);
});

function adjustForScreenSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Điều chỉnh kích thước message
    const christmasMessage = document.getElementById("as");
    if (screenWidth < 768) {
        christmasMessage.style.fontSize = '40px';
        christmasMessage.style.top = '10px';
    } else {
        christmasMessage.style.fontSize = '80px';
        christmasMessage.style.top = '15px';
    }

    // Điều chỉnh kích thước cây thông
    const treeIcon = document.querySelector(".tree-icon");
    if (screenWidth < 480) {
        treeIcon.style.width = '200px';
    } else if (screenWidth < 768) {
        treeIcon.style.width = '300px';
    }

    // Điều chỉnh card
    const card = document.querySelector('.card');
    if (screenWidth < 480) {
        card.style.width = '280px';
        card.style.height = '380px';
    } else {
        card.style.width = '300px';
        card.style.height = '400px';
    }
}

// Thêm event listeners
window.addEventListener('load', adjustForScreenSize);
window.addEventListener('resize', adjustForScreenSize);
