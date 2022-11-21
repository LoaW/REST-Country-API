export async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all", {
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok === true) {
        return response.json();
    } else {
        throw new Error("Impossible de contacter le serveur");
    }
}
// fetchCountries().then((countries) => console.log(countries[64]));
