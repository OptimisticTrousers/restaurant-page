const homeButton = document.querySelector('.home');

const menuButton = document.querySelector('.menu');

const contactUsButton = document.querySelector('.contact-us');

const pageContent = document.querySelector('div#content');

function removePage(){

    while(pageContent.lastElementChild){

        pageContent.removeChild(pageContent.lastElementChild);
    }
}

function addPageTitle(title){

    const pageTitle = document.createElement('div');

    pageTitle.classList.add('title');

    const leftLeg = document.createElement('img');

    leftLeg.src = "../src/chicken-leg.svg";
    leftLeg.width = "50";
    leftLeg.height= "50";
    leftLeg.classList.add('left-leg');

    const h1 = document.createElement('h1');

    h1.textContent = title;

    const rightLeg = document.createElement('img');

    rightLeg.src = "../src/chicken-leg.svg";
    rightLeg.width = "50";
    rightLeg.height= "50";
    rightLeg.classList.add('right-leg');

    pageTitle.appendChild(leftLeg);
    pageTitle.appendChild(h1);
    pageTitle.appendChild(rightLeg);
    pageContent.appendChild(pageTitle);
}

homeButton.addEventListener('click', () => {

    removePage();
    addPageTitle("Welcome to Optimistic's Fried Chicken!");
    renderHomePage();
})

menuButton.addEventListener('click', () => {

    removePage();
    addPageTitle("Menu");
    renderMenuPage();
})

contactUsButton.addEventListener('click', () => {

    removePage();
    addPageTitle("Contact Us");
    renderHomePage();
})