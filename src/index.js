const homeButton = document.querySelector('.home');

const menuButton = document.querySelector('.menu');

const contactUsButton = document.querySelector('.contact-us');

const pageContent = document.querySelector('main');

const content = document.querySelector('div#content');

function removePage(){

    while(pageContent.lastElementChild){

        if(pageContent.lastElementChild.classList.contains('title')){

            console.log(pageContent.lastElementChild.classList)
            break;
        }
        pageContent.removeChild(pageContent.lastElementChild);
    }
}

function createMenuPage(){

    const divTitle = document.createElement('div');

}

menuButton.addEventListener('click', () => {

    removePage();

})