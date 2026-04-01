const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const api_key = "a36c84991a9fb7f5da92835faccbab19";
let temp = document.querySelector(".temp")
let cityname = document.querySelector(".city")
let humidity = document.querySelector(".humidity")
let speed = document.querySelector(".speed")
let search_icon = document.querySelector(".searchbox button")
let search = document.querySelector(".searchbox input")
let icon = document.querySelector(".weather-img")




 async function checkWeather(city) {
    const response = await fetch(URL + city + `&appid=${api_key}`);
    var data = await response.json()
    console.log(data)
     cityname.innerHTML=data.name;
   temp.innerHTML=Math.round(data.main.temp) + "°C";
   speed.innerHTML = data.wind.speed + "km/h"
   humidity.innerHTML = data.main.humidity + "%";
 
   if(data.weather[0].main =="Clouds"){
      icon.src= "assets/clouds.png"
   }
 
   else if(data.weather[0].main =="Clear"){
      icon.src= "assets/clear.png"
   }

   else if(data.weather[0].main =="Drizzle"){
      icon.src= "assets/drizzle.png"
   }

  else  if(data.weather[0].main =="Mist"){
      icon.src= "assets/mist.png"
   }

   else if(data.weather[0].main =="Rain"){
      icon.src= "assets/rain.png"
   }
 }


   // document.querySelector(".weather").style.display = "block"


search_icon.addEventListener("click",()=>{
      checkWeather(search.value);
})



   humidity.innerHTML = data.main.humidity + "%";
 
   if(data.weather[0].main =="Clouds"){
      icon.src= "assets/clouds.png"
   }
 
   else if(data.weather[0].main =="Clear"){
      icon.src= "assets/clear.png"
   }

   else if(data.weather[0].main =="Drizzle"){
      icon.src= "assets/drizzle.png"
   }

  else  if(data.weather[0].main =="Mist"){
      icon.src= "assets/mist.png"
   }

   else if(data.weather[0].main =="Rain"){
      icon.src= "assets/rain.png"
   }
 

   // document.querySelector(".weather").style.display = "block"


search_icon.addEventListener("click",()=>{
      checkWeather(search.value);
})









