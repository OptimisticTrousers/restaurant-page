(()=>{"use strict";var e={30:(e,t,i)=>{i.d(t,{If:()=>d,QS:()=>r,fD:()=>a});var n=i(726);const o=document.querySelector(".home"),c=document.querySelector(".menu"),s=document.querySelector(".contact-us"),r=document.querySelector("div#content");function a(){for(;r.lastElementChild;)r.removeChild(r.lastElementChild)}function d(e){const t=document.createElement("div");t.classList.add("title");const i=document.createElement("img");i.src="../src/assets/chicken-leg.svg",i.width="50",i.height="50",i.classList.add("left-leg");const n=document.createElement("h1");n.textContent=e;const o=document.createElement("img");o.src="../src/assets/chicken-leg.svg",o.width="50",o.height="50",o.classList.add("right-leg"),t.appendChild(i),t.appendChild(n),t.appendChild(o),r.appendChild(t)}o.addEventListener("click",(()=>{a(),d("Welcome to Optimistic's Fried Chicken!"),(0,n.Z)()})),c.addEventListener("click",(()=>{a(),d("Menu"),function(){const e=document.createElement("div");e.classList.add("menu-info"),[{title:"Combos",meals:[{name:"8PC Meal",price:"$30",description:"8 Pieces of Chicken. Includes 2 sides of your choice"},{name:"Tango For Two",price:"$13",description:"Includes 8 tenders and 2 sides of your choice"},{name:"Bingo Boongo",price:"$10",description:"Includes 2 tenders, 2 chicken pieces, and 1 side of your choice"},{name:"12PC Meal",price:"$25",description:"12 Pieces of Chicken. Includes 2 sides of your choice"}]},{title:"Buckets",meals:[{name:"8PC Chicken",price:"$20",description:"8 Pieces of Chicken. No sides included"},{name:"12PC Chicken",price:"$25",description:"12 Pieces of Chicken. No sides included"},{name:"8PC Tenders",price:"$17",description:"8 Pieces of Tenders. No sides included"},{name:"12PC Chicken",price:"$21",description:"12 Pieces of Tenders. No sides included"}]},{title:"Sides",meals:[{name:"Macaroni and Cheese",price:"$2",description:"A delicious, home-made mac and cheese. You'll never want those mediocre Kraft macaroni and cheese again!"},{name:"Mashed Potatoes and Gravy",price:"$3",description:"These mashed potatoes will make you ravenous for more once you try them. Gravy is optional."},{name:"Homestyle Fries",price:"$3",description:"Home-made, organic fries."}]},{title:"Drinks",meals:[{name:"Cola",price:"$2",description:"2 Liter Coca-Cola"},{name:"Sprite",price:"$2",description:"2 Liter Sprite"},{name:"Water",price:"$1.50",description:"2 Liter Water"}]},{title:"Deserts",meals:[{name:"Chocolate Cookie",price:"$2",description:"Includes 2 home-baked, fresh chocolate cookies that your grandmother used to make."},{name:"Ice Cream",price:"$1",description:"Includes one cup of ice cream."},{name:"Apple Pie",price:"$1.50",description:"Mmm. That's the smell of an Apple Pie straight out of the oven."}]}].forEach((t=>{const i=document.createElement("div");i.classList.add("item-content");const n=document.createElement("p");n.textContent=t.title,n.classList.add("item-title"),i.appendChild(n),t.meals.forEach((e=>{i.innerHTML+=`<p style="font-size: 32px; color: black;">${e.name}</p> <br><br> ${e.price} <br><br> <p style="border-bottom: 1px solid black;">${e.description} <br><br></p>`})),e.appendChild(i)})),r.appendChild(e)}()})),s.addEventListener("click",(()=>{a(),d("Contact Us"),function(){const e=document.createElement("div"),t=document.createElement("p");t.textContent="Got a question about us or our clothing? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.",e.classList.add("contact-info"),[{name:"Bob Jonessss",position:"Manager",phoneNumber:"123-456-7890",email:"bobjonesss@gmail.com",image:"../../src/assets/optimistictrousers.jpg"},{name:"Christina Phillips",position:"Cook",phoneNumber:"124-164-4351",email:"christinaphillips@gmail.com",image:"../../src/assets/cook-girl.jpg"},{name:"Loco Poco",position:"Cashier",phoneNumber:"121-321-4351",email:"locopoco@gmail.com",image:"../../src/assets/locopoco.png"}].forEach((function(t){const i=document.createElement("div");i.style="display: flex; flex-direction: column; align-items: center; gap: 16px; margin-top: 16px; padding: 1rem; border: 3px solid #f7f6f3;",i.innerHTML="Name: "+t.name+"<br> Position: "+t.position+"<br> Phone Number: "+t.email;const n=document.createElement("img");n.src=t.image,n.width="100",n.height="100",i.appendChild(n),e.appendChild(i)})),r.appendChild(t),r.appendChild(e)}()}))},204:(e,t,i)=>{var n=i(30),o=i(726);(0,n.fD)(),(0,n.If)("Welcome to Optimistic's Fried Chicken!"),(0,o.Z)()},726:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(30);const o=function(){n.QS.classList.add("div#content");const e=document.createElement("p");e.textContent="Here at Optimistic's Fried Chicken, we are honored to serve you with top quality home-made fried chicken. We offer fried chicken, sides, desserts, and drinks, all made with culinary excellence. Our establishment is renowned for top tier customer service.",n.QS.appendChild(e);const t=document.createElement("p");t.innerHTML="Sunday: 10am - 6pm <br> Monday: 6am - 10pm <br> Tuesday: 6am - 10pm <br> Wednesday: 6am - 10pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 8pm <br>",n.QS.appendChild(t);const i=document.createElement("p");i.innerHTML="We are located at: <br> 123 Millcreek Drive, Secaucus, New Jersey",n.QS.appendChild(i)}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,i),c.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(30),i(204)})();