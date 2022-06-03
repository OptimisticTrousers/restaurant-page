const homeButton = document.querySelector('.home');

const menuButton = document.querySelector('.menu');

const contactUsButton = document.querySelector('.contact-us');

const pageContent = document.querySelector('div#content');

function removePage(){

    while(pageContent.lastElementChild){

        if(pageContent.lastElementChild.classList.contains('title')){

            break;
        }
        pageContent.removeChild(pageContent.lastElementChild);
    }
}

function changePageTitle(title){

    const pageTitle = document.querySelector('.title > h1');

    pageTitle.textContent = title;

}

menuButton.addEventListener('click', () => {

    removePage();
    changePageTitle("Menu");

})

contactUsButton.addEventListener('click', () => {

    removePage();
    changePageTitle("Contact Us");

    const employees = [
        {
            name: "Bob Joness",
            position: "Manager",
            phoneNumber: "123-456-7890",
            email: "bobjonesss@gmail.com",
        },
        {
            name: "Christina Phillips",
            position: "Cook",
            phoneNumber: "124-164-4351",
            email: "christinaphillips@gmail.com",
        },
        {
            name: "Loco Poco",
            position: "Cashier",
            phoneNumber: "121-321-4351",
            email: "locopoco@gmail.com",
        },
    ]

    const contactInfo = document.createElement('div');

    const paragraph = document.createElement('p');

    paragraph.textContent = "Got a question about us or our clothing? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you."

    div.classList.add('contact-info');

    for(const employee in employees){

        const personInfo = document.createElement('div');

        personInfo.style = "display: flex; flex-direction: column; align-items: center; gap: 16px;"

        const contactInfo = document.createElement('p');

        contactInfo.innerHTML = "Name: Bob Jonessss <br> <br> Position: Manager <br> <br> Phone Number: 123-456-7890 <br> <br> Email: bobjonessss@gmail.com"

        personInfo.appendChild(contactInfo);

        const img = document.createElement('img');

        img.src = '../src/optimistictrousers.jpg';

        img.width = "100";

        img.height = "100";

        personInfo.appendChild(img);

        personInfo.appendChild(contactInfo);
    }

})