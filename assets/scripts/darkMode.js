export function toggleDarkMode() {
    const icon = document.querySelector(".darkMode__icon");
    const iconModal = document.querySelector(".darkModeDetail__icon");
    const search = document.querySelector(".search-container__search");
    const header = document.querySelector("header");
    const searchIcon = document.querySelector(".searchIcon");
    const searchText = document.querySelector(".searchText");
    const filter = document.querySelector(".search-container__filter");

    document.body.classList.toggle("darkModeAll");
    document.querySelector(".modal").classList.toggle("darkModeAll");
    filter.classList.toggle("deepColor")
    searchIcon.classList.toggle("deepColor")
    searchText.classList.toggle("deepColor")
    header.classList.toggle("deepColor")
    search.classList.toggle("deepColor")

    if (document.body.classList.contains("darkModeAll")) {
        icon.src = "./assets/img/sunny-outline.svg";
        iconModal.src = "./assets/img/sunny-outline.svg";
        
    } else {
        icon.src = "./assets/img/moon-outline.svg";
        iconModal.src = "./assets/img/moon-outline.svg";
        
    }
}
