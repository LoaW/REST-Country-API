export function toggleDarkMode() {
    const icon = document.querySelector(".darkMode__icon");
    const iconModal = document.querySelector(".darkModeModal__icon")
    const search = document.querySelector(".search-container__search");
    const header = document.querySelector("header");
    const searchIcon = document.getElementById("searchIcon");
    const searchText = document.getElementById("searchText");
    const filter = document.querySelector(".search-container__filter")
    

    document.body.classList.toggle("darkModeAll");
    document.querySelector(".modal").classList.toggle('darkModeAll')
    if (document.body.classList.contains("darkModeAll")) {
        icon.src = "./assets/img/sunny-outline.svg";
        iconModal.src = "./assets/img/sunny-outline.svg"
        header.style.backgroundColor = "#2b3945";
        search.style.backgroundColor = "#2b3945";
        searchIcon.style.backgroundColor = "#2b3945";
        searchText.style.backgroundColor = "#2b3945";
        filter.style.backgroundColor = "#2b3945";
        filter.style.color = "#858585";
    } else {
        icon.src = "./assets/img/moon-outline.svg";
        iconModal.src = "./assets/img/moon-outline.svg"
        header.style.backgroundColor = "#fafafa";
        search.style.backgroundColor = "#fafafa";
        searchIcon.style.backgroundColor = "#fafafa";
        searchText.style.backgroundColor = "#fafafa";
        filter.style.backgroundColor = "#fafafa";
        filter.style.color = "#858585";

    }
}
