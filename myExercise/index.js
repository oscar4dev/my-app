
const formEl = document.getElementById('form-el')
let tempEl = document.getElementById('temp-el')
let descEl = document.getElementById('desc-el')
const inputEl = document.getElementById('input-el')
let humidityEl = document.getElementById('humidity-el')
let windSpeedEl = document.getElementById('wind-speed-el')
let feelsLikeEl = document.getElementById('feels-like-el')
const appID = 'fe009e5b5030d7669f9f4aaf27a63421'

formEl.addEventListener('submit', (e) => {
   e.preventDefault()
   getWeather()
})

async function getWeather () {
   const inputValue = inputEl.value
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${appID}&units=metric`
   try {
      const res = await fetch(url)
      if (!res) {
         throw new Error (console.log('there was an error'))
      }
      const data = await res.json()
      
      const temp = Math.round(data.main.temp) 
      const desc = data.weather[0].description
      const feelsLike = data.main.feels_like
      const humidity = data.main.humidity
      const windSpeed = data.wind.speed

      tempEl.innerHTML = `<h3>${temp}°C</h3>`
      descEl.textContent = desc
      feelsLikeEl.textContent = feelsLike
      humidityEl.textContent = humidity
      windSpeedEl.textContent = windSpeed

   } catch (error) {
      console.log('there was an error');
   }
}
