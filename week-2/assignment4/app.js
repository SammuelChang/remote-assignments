//Request 1: Click to Change Text.
const welcomeMessage = document.querySelector(".message-container");
welcomeMessage.addEventListener('click', () => {
    welcomeMessage.innerHTML = '<h1>Have a Good Time!</h1>';
    welcomeMessage.style.color = 'darkred';
    welcomeMessage.style.fontSize = "x-large";
});


//Request 2: Click to Show / Close Menu.
const asideMenuCloseButton = document.querySelector("aside img");
const asideMenu = document.querySelector("aside");
const topMenuButton = document.querySelector(".altMenu");

asideMenuCloseButton.addEventListener('click', () => {
    asideMenu.style.display = 'none';
});

topMenuButton.addEventListener('click', () => {
    asideMenu.style.display = 'block';
});

//Request 3: Click to Show More Content Boxes.
const callToActionButton = document.querySelector(".actionButton");
const secondContainer = document.querySelector(".secondContainer");
callToActionButton.addEventListener('click', () => {
    secondContainer.style.display = 'block';
});