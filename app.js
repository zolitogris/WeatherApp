window.addEventListener('load',()=>{

let long;
let lat;
let tempDescrip=document.querySelector(".temp-description");
let tempGrado=document.querySelector(".temp-grados");
let tempZona=document.querySelector(".Zona");
let celGrade;
let name,country;
let weather = {};
let tempIcon=document.querySelector(".weather-icon");

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(posi=>{
    long=posi.coords.longitude;
    lat=posi.coords.latitude;
    console.log(long,lat);
const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=44b30cf1a810398c43c5b5441749003b`;
fetch(api)
.then(response =>{
    return response.json();

})
.then(data=>{
    console.log(data);
   const {temp}=data.main
   name=data.name
   weather.iconId=data.weather[0].icon;
   weather.temp=data.weather[0].description;
   country=data.sys.country
   celGrade=Math.floor(temp-273,15)
   
tempZona.textContent=`${country}, ${name}`;
tempGrado.textContent=`${celGrade}°c`;
tempDescrip.innerHTML=`${weather.temp}`;
tempIcon.innerHTML=`<img src="icons/${weather.iconId}.png"/>`;
})
    });
}
}
);