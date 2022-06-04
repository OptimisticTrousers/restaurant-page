(()=>{"use strict";var e={30:(e,t,i)=>{i.d(t,{If:()=>l,QS:()=>a,fD:()=>d});var n=i(726);var c=i(204);const o=document.querySelector(".home"),r=document.querySelector(".menu"),s=document.querySelector(".contact-us"),a=document.querySelector("div#content");function d(){for(;a.lastElementChild;)a.removeChild(a.lastElementChild)}function l(e){const t=document.createElement("div");t.classList.add("title");const i=document.createElement("img");i.src="../src/assets/chicken-leg.svg",i.width="50",i.height="50",i.classList.add("left-leg");const n=document.createElement("h1");n.textContent=e;const c=document.createElement("img");c.src="../src/assets/chicken-leg.svg",c.width="50",c.height="50",c.classList.add("right-leg"),t.appendChild(i),t.appendChild(n),t.appendChild(c),a.appendChild(t)}o.addEventListener("click",(()=>{d(),l("Welcome to Optimistic's Fried Chicken!"),(0,n.Z)()})),r.addEventListener("click",(()=>{d(),l("Menu"),function(){const e=document.createElement("div");e.classList.add("menu-info"),[{title:"Combos",meals:[{name:"8PC Meal",price:"$30",description:"8 Pieces of Chicken. Includes 2 sides of your choice"},{name:"Tango For Two",price:"$13",description:"Includes 8 tenders and 2 sides of your choice"},{name:"Bingo Boongo",price:"$10",description:"Includes 2 tenders, 2 chicken pieces, and 1 side of your choice"},{name:"12PC Meal",price:"$25",description:"12 Pieces of Chicken. Includes 2 sides of your choice"}]},{title:"Buckets",meals:[{name:"8PC Chicken",price:"$20",description:"8 Pieces of Chicken. No sides included"},{name:"12PC Chicken",price:"$25",description:"12 Pieces of Chicken. No sides included"},{name:"8PC Tenders",price:"$17",description:"8 Pieces of Tenders. No sides included"},{name:"12PC Chicken",price:"$21",description:"12 Pieces of Tenders. No sides included"}]},{title:"Sides",meals:[{name:"Macaroni and Cheese",price:"$2",description:"A delicious, home-made mac and cheese. You'll never want those mediocre Kraft macaroni and cheese again!"},{name:"Mashed Potatoes and Gravy",price:"$3",description:"These mashed potatoes will make you ravenous for more once you try them. Gravy is optional."},{name:"Homestyle Fries",price:"$3",description:"Home-made, organic fries."}]},{title:"Drinks",meals:[{name:"Cola",price:"$2",description:"2 Liter Coca-Cola"},{name:"Sprite",price:"$2",description:"2 Liter Sprite"},{name:"Water",price:"$1.50",description:"2 Liter Water"}]},{title:"Deserts",meals:[{name:"Chocolate Cookie",price:"$2",description:"Includes 2 home-baked, fresh chocolate cookies that your grandmother used to make."},{name:"Ice Cream",price:"$1",description:"Includes one cup of ice cream."},{name:"Apple Pie",price:"$1.50",description:"Mmm. That's the smell of an Apple Pie straight out of the oven."}]}].forEach((t=>{const i=document.createElement("div");i.classList.add("item-content");const n=document.createElement("p");n.textContent=t.title,n.classList.add("item-title"),i.appendChild(n),t.meals.forEach((e=>{i.innerHTML+=`<p style="font-size: 32px; color: black;">${e.name}</p> <br><br> ${e.price} <br><br> <p style="border-bottom: 1px solid black;">${e.description} <br><br></p>`})),e.appendChild(i)})),a.appendChild(e)}()})),s.addEventListener("click",(()=>{d(),l("Contact Us"),(0,n.Z)()})),(0,c.Z)()},204:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(30),c=i(726);const o=function(){(0,n.fD)(),(0,n.If)("Welcome to Optimistic's Fried Chicken!"),(0,c.Z)()}},726:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(30);const c=function(){n.QS.classList.add("div#content");const e=document.createElement("p");e.textContent="Here at Optimistic's Fried Chicken, we are honored to serve you with top quality home-made fried chicken. We offer fried chicken, sides, desserts, and drinks, all made with culinary excellence. Our establishment is renowned for top tier customer service.",n.QS.appendChild(e);const t=document.createElement("p");t.innerHTML="Sunday: 10am - 6pm <br> Monday: 6am - 10pm <br> Tuesday: 6am - 10pm <br> Wednesday: 6am - 10pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 8pm <br>",n.QS.appendChild(t);const i=document.createElement("p");i.innerHTML="We are located at: <br> 123 Millcreek Drive, Secaucus, New Jersey",n.QS.appendChild(i)}}},t={};function i(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(30),i(204)})();