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

    const menu = [
        {
            title: "Buckets",
            meals: [ 
                {name: "8PC Chicken", price: "$20", description: "8 Pieces of Chicken. No sides included"},
                {name: "12PC Chicken", price: "$25", description: "12 Pieces of Chicken. No sides included"},
            ],
        },
        {
            title: "Sides",
            meals: [ 
                {name: "Macaroni and Cheese", price: "$3", description: "A delicious, home-made mac and cheese. You'll never want those mediocre Kraft macaroni and cheese again!"},
                {name: "12PC Chicken", price: "$25", description: "12 Pieces of Chicken. No sides included"},
            ]
        },
        {
            title: "Drinks",
            meals: [ 
                {name: "Macaroni and Cheese", price: "$3", description: "A delicious, home-made mac and cheese. You'll never want those mediocre Kraft macaroni and cheese again!"},
                {name: "12PC Chicken", price: "$25", description: "12 Pieces of Chicken. No sides included"},
            ]
        },
    ]

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
            img: '../src/optimistictrousers.jpg',
        },
        {
            name: "Christina Phillips",
            position: "Cook",
            phoneNumber: "124-164-4351",
            email: "christinaphillips@gmail.com",
            img: '../src/optimistictrousers.jpg',
        },
        {
            name: "Loco Poco",
            position: "Cashier",
            phoneNumber: "121-321-4351",
            email: "locopoco@gmail.com",
            img: '../src/optimistictrousers.jpg',
        },
    ]

    const contactInfo = document.createElement('div');

    const paragraph = document.createElement('p');

    const divContent = document.querySelector('div#content');

    contactInfo.style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); gap: 32px;"

    divContent.style = "row-gap: 10px;";

    paragraph.textContent = "Got a question about us or our clothing? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you."

    contactInfo.classList.add('contact-info');

    employees.forEach(function (employee) {

        const personInfo = document.createElement('div');

        personInfo.style = "display: flex; flex-direction: column; align-items: center; gap: 16px; margin-top: 16px; padding: 1rem; border: 3px solid #f7f6f3;"

        personInfo.innerHTML = "Name: " + employee.name + "<br> Position: " + employee.position + "<br> Phone Number: " + employee.email;

        const img = document.createElement('img');

        img.src = employee.img;

        img.width = "100";

        img.height = "100";

        personInfo.appendChild(img);

        contactInfo.appendChild(personInfo);

    })


    pageContent.appendChild(paragraph);
    pageContent.appendChild(contactInfo);
})