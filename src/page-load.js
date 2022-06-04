import { removePage } from ".";
import { addPageTitle } from ".";
import renderHomePage from "./pages/home";

function initialPageLoad(){

    removePage();
    addPageTitle("Welcome to Optimistic's Fried Chicken!");
    renderHomePage();
}

export default initialPageLoad;