const temperature = document.querySelector(".temperature")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind_speed = document.querySelector(".wind_speed")
const search_btn = document.querySelector(".search_btn")
const city_name_ = document.querySelector(".city_name_")
const weather_icon = document.querySelector(".weather_icon")
const weather = document.querySelector(".weather")
const undefined_name = document.querySelector(".undefined_name")
const card = document.querySelector(".card")


const key = '4d009c14e064304ab27eb3d6e0b65ac5'
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`

const getWeather = (cityname) =>{
    fetch(`${url}&q=${cityname}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)

        if(json.cod == 404){
            undefined_name.style.display = "block"
            weather.style.display = "none"
        }
        
        else{
        city.innerHTML = json.name
        temperature.innerHTML = `${Math.floor(json.main.temp)}°C`
        humidity.innerHTML = `${json.main.humidity}% <p>Humidity</p>`
        wind_speed.innerHTML = `${json.wind.speed} Km/h <p>Wind Speed</p>`
        
        if(json.weather[0].main == "Clouds"){
            weather_icon.src = "3D_clouds-removebg-preview.png"
        }
        else if(json.weather[0].main == "Clear"){
            weather_icon.src = "3D sun.png"
        }
        else if(json.weather[0].main == "Drizzle"){
            weather_icon.src = "Drizzle.png"
        }
        else if(json.weather[0].main == "Haze" || json.weather[0].main == "Fog" || json.weather[0].main == "Smoke"){
            weather_icon.src = "Haze_icon.png"
        }
        else if(json.weather[0].main == "Thunderstorm"){
            weather_icon.src = "thunder_3D-removebg-preview.png"
        }
        else if(json.weather[0].main == "Rain"){
            weather_icon.src = "Rain_only_3D-removebg-preview.png"
        }
        else if(json.weather[0].main == "Snow"){
            weather_icon.src = "Snow_3D-removebg-preview.png"
        }
        else if(json.weather[0].main == "Squall"){
            weather_icon.src = "wind_3D-removebg-preview.png"
        }

        undefined_name.style.display = "none"
        weather.style.display = "block"

    }
})
}

search_btn.onclick = () => getWeather(city_name_.value)