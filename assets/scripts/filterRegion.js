import { fetchCountries } from "./fetchCountries.js";

export async function filterRegion() {
    fetchCountries().then((countries) => {
        const filterValue = document.getElementById("region-select").value;
        const filterResult = countries.filter(function (el) {
            return el.region === filterValue;
        });
        let html = "";
        let container = document.querySelector(".api-container"); // DOM container
        // SELECT 8 CONTRY
        for (let i = 0; i < 8; i++) {
            let randomNum = Math.floor(Math.random() * filterResult.length); // Random number between 0 & 250
            let country = filterResult[randomNum]; // Random pick country
            let htmlSegment = `<div class='country' data-country=${country.name.common} id='${i}'> 
                                <img class='country__flag' src="${country.flags.png}" alt="">
                                <div class='country__description'>
                                    <h2 class='country__name'>${country.name.common}</h2>
                                    <span class='country__population'><b>Population:</b> ${country.population}</span>
                                    <span class='country__region'><b>Region:</b> ${country.region}</span>
                                    <span class='country__capital'><b>Capital:</b> ${country.capital} </span>
                                </div>

                            </div>`; // country card html
            html += htmlSegment;
        }
        container.innerHTML = html;
    });
}
