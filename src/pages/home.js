function renderHomePage(){

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

}

export default renderHomePage;