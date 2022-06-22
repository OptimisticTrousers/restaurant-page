import renderContactPage from "./pages/contact-us";
import renderHomePage from "./pages/home";
import renderMenuPage from "./pages/menu";

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactUsButton = document.querySelector('.contact-us');

export const pageContent = document.querySelector('div#content');

export function removePage(){

    while(pageContent.lastElementChild){

        pageContent.removeChild(pageContent.lastElementChild);
    }
}

export function addPageTitle(title){

    const pageTitle = document.createElement('div');
    pageTitle.classList.add('title');

    const leftLeg = document.createElement('img');
    leftLeg.src = "./assets/chicken-leg.svg";
    leftLeg.width = "50";
    leftLeg.height= "50";
    leftLeg.classList.add('left-leg');

    const h1 = document.createElement('h1');
    h1.textContent = title;

    const rightLeg = document.createElement('img');
    rightLeg.src = "./assets/chicken-leg.svg";
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
    renderContactPage();
})