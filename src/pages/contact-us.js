import { pageContent } from "..";

function renderContactPage(){

    const employees = [
        {
            name: "Bob Jonessss",
            position: "Manager",
            phoneNumber: "123-456-7890",
            email: "bobjonesss@gmail.com",
            image: '../../src/assets/optimistictrousers.jpg',
        },
        {
            name: "Christina Phillips",
            position: "Cook",
            phoneNumber: "124-164-4351",
            email: "christinaphillips@gmail.com",
            image: '../../src/assets/cook-girl.jpg',
        },
        {
            name: "Loco Poco",
            position: "Cashier",
            phoneNumber: "121-321-4351",
            email: "locopoco@gmail.com",
            image: "../../src/assets/locopoco.png",
        },
    ]

    const contactInfo = document.createElement('div');

    const paragraph = document.createElement('p');

    paragraph.textContent = "Got a question about us or our clothing? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you."

    contactInfo.classList.add('contact-info');

    employees.forEach(function (employee) {

        const personInfo = document.createElement('div');

        personInfo.classList.add('person-info-style');

        personInfo.innerHTML = "Name: " + employee.name + "<br> Position: " + employee.position + "<br> Phone Number: " + employee.email;

        const img = document.createElement('img');

        img.src = employee.image;

        img.width = "100";

        img.height = "100";

        personInfo.appendChild(img);

        contactInfo.appendChild(personInfo);

    })


    pageContent.appendChild(paragraph);
    pageContent.appendChild(contactInfo);
}

export default renderContactPage;