export async function fetchCountry(name) {
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );
    if (response.ok === true) {
        return response.json();
    } else {
        throw new Error("Impossible de contacter le serveur");
    }
}
// fetchCountry("france").then((countries) => console.log(countries));
