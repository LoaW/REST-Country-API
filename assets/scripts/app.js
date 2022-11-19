import { fetchCountries } from "./fetchCountries.js";
import { fetchCountry } from "./fetchCountry.js";
import { toggleDarkMode } from "./darkMode.js";
const modal = document.querySelector(".modal");
const darkMode = document.querySelector(".darkMode");

darkMode.addEventListener("click", toggleDarkMode);

async function openCountryModal(event) {
    let country = event.currentTarget.dataset.country;
    let countryData = await fetchCountry(country); // FETCH ONE CONTRY SELECTED
    modal.showModal();
    const currencyArray = Object.values(countryData[0].currencies);
    const languageArray = Object.values(countryData[0].languages);
    function getBorder() {
        let borderCountries = [];
        for (const element of countryData[0].borders) {
            borderCountries += `<a>${element}</a>`;
        }
        return borderCountries;
    }
    let htmlSection = `
        <section class="modal__header">
            <h2>Where in the world</h2>
            <div class="darkModeDetail">
                <img
                    class="darkModeModal__icon"
                    src="./assets/img/moon-outline.svg"
                    alt="darkMode__icon"
                />
                <span class="darkMode__text">Dark Mode</span>
            </div>
        </section>
        <div class="button close-button">
            <img src="./assets/img/retour.png" alt="">
            <span>Back</span>
        </div>
        <div class="modal__container">
            <div class="modal__container__flag">
                <img src="${countryData[0].flags.png}" alt="${
        countryData[0].name.common
    }">
            </div>
            <div class="modal__container__information">
                <h2>${countryData[0].name.common}</h2>
                <div class="modal__container__information__description">
                    <span><b>Native Name:</b> ${
                        countryData[0].name.official
                    }</span>
                    <span><b>Population:</b> ${countryData[0].population}</span>
                    <span><b>Region:</b> ${countryData[0].region}</span>
                    <span><b>Sub Region:</b> ${countryData[0].subregion}</span>
                    <span><b>Capital:</b> ${countryData[0].capital}</span>
                    <span><br><b>Top Level Domain:</b> ${
                        countryData[0].tld[0]
                    }</span>
                    <span><b>Currencies:</b> ${currencyArray[0].name}</span>
                    <span><b>Languages:</b> ${languageArray[0]}</span>
                </div>
                <div class="modal__container__information__border">
                    <p>Border Countries: </p>
                    <div class="modal__container__information__border__country">
                        ${getBorder()}
                    </div>
                </div>
            </div>
        </div>`;
    
    modal.innerHTML = htmlSection;

    let darkModeDetail = document.querySelector(".darkModeDetail");
    darkModeDetail.addEventListener('click', toggleDarkMode)
    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", function () {
        modal.close();
    });
}

fetchCountries()
    .then((countries) => {
        let html = "";
        let container = document.querySelector(".api-container"); // DOM container
        for (let i = 0; i < 8; i++) {
            let randomNum = Math.floor(Math.random() * countries.length); // Random number between 0 & 250
            let country = countries[randomNum]; // Random pick country
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
    })
    .then(() => {
        let countries = document.getElementsByClassName("country");
        for (let country of countries) {
            country.classList.add("open-button");
            country.classList.add("button");
            country.addEventListener("click", openCountryModal);
        }
    });
