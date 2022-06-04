const homeButton = document.querySelector('.home');

const menuButton = document.querySelector('.menu');

const contactUsButton = document.querySelector('.contact-us');

const pageContent = document.querySelector('div#content');

function removePage(){

    while(pageContent.lastElementChild){

        pageContent.removeChild(pageContent.lastElementChild);
    }
}

function changePageTitle(title){

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
    changePageTitle("Welcome to Optimistic's Fried Chicken!");


    pageContent.classList.add('div#content');

    const description = document.createElement('p');

    description.textContent = "Here at Optimistic's Fried Chicken, we are honored to serve you with top quality home-made fried chicken. We offer fried chicken, sides, desserts, and drinks, all made with culinary excellence. Our establishment is renowned for top tier customer service."

    pageContent.appendChild(description);

    const hours = document.createElement('p');

    hours.innerHTML = "Sunday: 10am - 6pm <br> Monday: 6am - 10pm <br> Tuesday: 6am - 10pm <br> Wednesday: 6am - 10pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 8pm <br>";

    pageContent.appendChild(hours);

    const location = document.createElement('p');

    location.innerHTML = "We are located at: <br> 123 Millcreek Drive, Secaucus, New Jersey"

    pageContent.appendChild(location);


})

menuButton.addEventListener('click', () => {

    removePage();
    changePageTitle("Menu");

    const menu = [
        {
            title: "Combos",
            meals: [ 
                {name: "8PC Meal", price: "$30", description: "8 Pieces of Chicken. Includes 2 sides of your choice"},
                {name: "Tango For Two", price: "$13", description: "Includes 8 tenders and 2 sides of your choice"},
                {name: "Bingo Boongo", price: "$10", description: "Includes 2 tenders, 2 chicken pieces, and 1 side of your choice"},
                {name: "12PC Meal", price: "$25", description: "12 Pieces of Chicken. Includes 2 sides of your choice"},
            ],
        },
        {
            title: "Buckets",
            meals: [ 
                {name: "8PC Chicken", price: "$20", description: "8 Pieces of Chicken. No sides included"},
                {name: "12PC Chicken", price: "$25", description: "12 Pieces of Chicken. No sides included"},
                {name: "8PC Tenders", price: "$17", description: "8 Pieces of Tenders. No sides included"},
                {name: "12PC Chicken", price: "$21", description: "12 Pieces of Tenders. No sides included"},
            ],
        },
        {
            title: "Sides",
            meals: [ 
                {name: "Macaroni and Cheese", price: "$2", description: "A delicious, home-made mac and cheese. You'll never want those mediocre Kraft macaroni and cheese again!"},
                {name: "Mashed Potatoes and Gravy", price: "$3", description: "These mashed potatoes will make you ravenous for more once you try them. Gravy is optional."},
                {name: "Homestyle Fries", price: "$3", description: "Home-made, organic fries."},
            ]
        },
        {
            title: "Drinks",
            meals: [ 
                {name: "Cola", price: "$2", description: "2 Liter Coca-Cola"},
                {name: "Sprite", price: "$2", description: "2 Liter Sprite"},
                {name: "Water", price: "$1.50", description: "2 Liter Water"},
            ]
        },
        {
            title: "Deserts",
            meals: [ 
                {name: "Chocolate Cookie", price: "$2", description: "Includes 2 home-baked, fresh chocolate cookies that your grandmother used to make."},
                {name: "Ice Cream", price: "$1", description: "Includes one cup of ice cream."},
                {name: "Apple Pie", price: "$1.50", description: "Mmm. That's the smell of an Apple Pie straight out of the oven."},
            ]
        },
    ]

    const menuContent = document.createElement('div');

    menuContent.classList.add('menu-info')

    menu.forEach(section => {

        const info = document.createElement('div');

        info.classList.add('item-content')

        const title = document.createElement('p');

        title.textContent = section.title;

        title.classList.add('item-title')

        info.appendChild(title);

        section.meals.forEach(meal => {

            info.innerHTML += `<p style="font-size: 32px; color: black;">${meal.name}</p> <br><br> ${meal.price} <br><br> <p style="border-bottom: 1px solid black;">${meal.description} <br><br></p>`
        })

        menuContent.appendChild(info);
    })

    pageContent.appendChild(menuContent);

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