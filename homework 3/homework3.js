let apiUrl = 'https://restcountries.com/v3.1/alpha/';
let debounceTimer;

document.getElementById("countryCode").addEventListener("keyup", function(){
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        let code = this.value;
        if (code === "") return;
        try {
            let response = await fetch(apiUrl + code);
            console.log('Fetching country data for:', code);
            if (response.ok === false) throw new Error('Country not found');
            
            let countryData = await response.json();
            console.log('Country data received:', countryData);
            let country = countryData[0];
            document.getElementById("output").innerHTML = `<h2>${country.name.common}</h2>`;
            
            if (country.borders === undefined) {
                console.log('No bordering countries found.');
                document.getElementById("output").innerHTML += "<p>No bordering countries.</p>";
                return;
            }
            
            console.log('Fetching bordering countries:', country.borders);
            let neighbors = await Promise.all(country.borders.map(async border => {
                let res = await fetch(apiUrl + border);
                let data = await res.json();
                console.log('Bordering country data received:', data[0].name.common);
                return `<li>${data[0].name.common}</li>`;
            }));
            
            document.getElementById("output").innerHTML += `<h3>Neighbours:</h3><ul>${neighbors.join('')}</ul>`;
        } catch (error) {
            document.getElementById("output").innerHTML = `${error.message}`;
        }
    }, 500);
});