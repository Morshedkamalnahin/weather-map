const loadWeather = () => {
    const searchFied = document.getElementById("search-field");
    const searchText = searchFied.value;
    if (searchText === "") {
        console.log('hi ami khali')
        alert('pls search a valid city name')
        return;
    }
    const apiKey = "3f69a4156ca60f6cd963f59b963b3549";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`;

    fetch(url).then(res => res.json())
        .then(data => tempareture(data));
    searchFied.value = '';

}

const tempareture = data => {

    const cityName = document.getElementById("city-name");
    const tempa = document.getElementById("tempa");
    const weatherStatus = document.getElementById("weather-status");
    const weatherSt = document.getElementById("weather-section");
    weatherSt.innerHTML = "";

    if (data.cod == 404) {
        alert('pls search a valid city name');

    } else {

        const div = document.createElement('div');
        div.innerHTML = `  <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 id="city-name">${data.name}</h1>
            <h3><span id="tempa">${data.main.temp}</span>&deg;C</h3>
            <h1 id="weather-status" class="lead">${data.weather[0].main}</h1>`
        weatherSt.appendChild(div);

    }
}