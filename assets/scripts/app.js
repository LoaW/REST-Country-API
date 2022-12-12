// Import section
import { fetchCountries } from "./fetchCountries.js";
import { fetchCountry } from "./fetchCountry.js";
import { toggleDarkMode } from "./darkMode.js";
import { autocomplete } from "./autoComplete.js";
import { filterRegion } from "./filterRegion.js";

// Variable declaration
const container = document.querySelector(".api-container"); // DOM container
const modal = document.querySelector(".modal");
const darkMode = document.querySelector(".darkMode");
const inputBtn = document.getElementById("searchIcon");
const filterBtn = document.getElementById("region-select");
let inputCountry = document.getElementById("searchText");

// Add eventListener on user interface
darkMode.addEventListener("click", toggleDarkMode);
inputBtn.addEventListener("click", openInputCountry);
filterBtn.addEventListener("change", filterRegion);
inputCountry.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        openInputCountry();
    }
});

// Show Modal (by input country)
async function openInputCountry() {
    // Get the input value
    const inputCountry = document.getElementById("searchText").value;

    // Fetch data for the selected country
    const countryData = await fetchCountry(inputCountry);

    // Show the modal
    modal.showModal();

    // Extract currencies and languages from the data
    const currencyArray = Object.values(countryData[0].currencies);
    const languageArray = Object.values(countryData[0].languages);

    // Create a function for getting border countries
    function getBorder() {
        // If the country has borders, return a list of links for each border country
        if (countryData[0].borders) {
            const borderCountries = [];
            for (const element of countryData[0].borders) {
                borderCountries.push(`<a>${element}</a>`);
            }
            return borderCountries;
        } else {
            // Otherwise, return a message saying there are no borders
            return "No physical borders";
        }
    }

    // HTML with data to inject
    let content = `
        <section class="modal__header">
            <h2>Where in the world</h2>
            <div class="darkModeDetail">
                <img
                    class="darkModeDetail__icon"
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
                    <span><b>Official Name:</b> ${
                        countryData[0].name.official
                    }</span>
                    <span><b>Population:</b> ${new Intl.NumberFormat().format(
                        countryData[0].population
                    )}</span>
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
    modal.innerHTML = content;

    // Add an event listener for the "click" event on the dark mode detail element,
    // which will toggle the dark mode when clicked
    const darkModeDetail = document.querySelector(".darkModeDetail");
    darkModeDetail.addEventListener("click", toggleDarkMode);

    // Add an event listener for the "click" event on the close button,
    // which will close the modal when clicked
    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", function () {
        modal.close();
    });
}

// Show Modal (by select country)
async function openCountryModal(event) {
    // Get the country value
    let country = event.currentTarget.dataset.country;

    // Fetch data for the selected country
    let countryData = await fetchCountry(country);

    // Show the modal
    modal.showModal();

    // Extract currencies and languages from the data
    const currencyArray = Object.values(countryData[0].currencies);
    const languageArray = Object.values(countryData[0].languages);

    // Create a function for getting border countries
    function getBorder() {
        // If the country has borders, return a list of links for each border country
        if (countryData[0].borders) {
            const borderCountries = [];
            for (const element of countryData[0].borders) {
                borderCountries.push(`<a>${element}</a>`);
            }
            return borderCountries;
        } else {
            // Otherwise, return a message saying there are no borders
            return "No physical borders";
        }
    }

    // HTML with data to inject
    let content = `
        <section class="modal__header">
            <h2>Where in the world</h2>
            <div class="darkModeDetail">
                <img
                    class="darkModeDetail__icon"
                    src="./assets/img/moon-outline.svg"
                    alt="darkMode__icon"
                />
                <span class="darkModeDetail__text">Dark Mode</span>
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
                    <span><b>Official Name:</b> ${
                        countryData[0].name.official
                    }</span>
                    <span><b>Population:</b> ${new Intl.NumberFormat().format(
                        countryData[0].population
                    )}</span>
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
    modal.innerHTML = content;

    // Add an event listener for the "click" event on the dark mode detail element,
    // which will toggle the dark mode when clicked
    const darkModeDetail = document.querySelector(".darkModeDetail");
    darkModeDetail.addEventListener("click", toggleDarkMode);

    // Add an event listener for the "click" event on the close button,
    // which will close the modal when clicked
    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", function () {
        modal.close();
    });
}

// Fetch and display 8 (all) countries
fetchCountries()
    // Fetch and display 8 (all) countries
    .then((countries) => {
        let content = "";
        // Put all country in array
        let countryData = [];
        for (const country of countries) {
            countryData.push(country.name.common);
        }
        console.log(countryData);
        autocomplete(document.getElementById("searchText"), countryData);
        // SELECT 8 CONTRY
        for (let i = 0; i < 8; i++) {
            let randomNum = Math.floor(Math.random() * countries.length); // Random number between 0 & 250
            let country = countries[randomNum]; // Random pick country
            let htmlSegment = `<div class='country' data-country=${
                country.name.common
            } id='${i}'> 
                                <img class='country__flag' src="${
                                    country.flags.png
                                }" alt="">
                                <div class='country__description'>
                                    <h2 class='country__name'>${
                                        country.name.common
                                    }</h2>
                                    <span class='country__population'><b>Population:</b> ${new Intl.NumberFormat().format(
                                        country.population
                                    )}</span>
                                    <span class='country__region'><b>Region:</b> ${
                                        country.region
                                    }</span>
                                    <span class='country__capital'><b>Capital:</b> ${
                                        country.capital
                                    } </span>
                                </div>

                            </div>`; // country card html
            content += htmlSegment;
        }
        container.innerHTML = content;
    })
    // Set addEventListener on 8 countries
    .then(() => {
        let countries = document.getElementsByClassName("country");
        for (let country of countries) {
            country.classList.add("open-button");
            country.classList.add("button");
            country.addEventListener("click", openCountryModal);
        }
    });
