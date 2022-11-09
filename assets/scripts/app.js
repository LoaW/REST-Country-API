import { fetchCountries } from "./fetchCountries.js";
import { fetchCountry } from "./fetchCountry.js";

fetchCountries().then((countries) => {
    let html = "";
    let container = document.querySelector(".api-container"); // DOM container
    for (let i = 0; i < 8; i++) {
        let randomNum = Math.floor(Math.random() * 250); // Random number between 0 & 250
        let country = countries[randomNum]; // Random pick country
        const countryContainer = document.createElement("div");
        let htmlSegment = `<div class='country' id='${i}'> 
                                <img class='country__flag' src="${country.flags.png}" alt="">
                                <h2 class='country__name'>${country.name.common}</h2>
                                <span class='country__population'>Population: ${country.population}</span>
                                <span class='country__region'>Region: ${country.region}</span>
                                <span class='country__capital'>Capital: ${country.capital} </span>
                            </div>`; // country card html
        html += htmlSegment;
    }
    container.innerHTML = html;
});
