import { pageContent } from "..";

function renderMenuPage(){
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
}

export default renderMenuPage