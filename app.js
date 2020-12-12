window.addEventListener('load',()=>{

let long;
let lat;
let tempDescrip=document.querySelector(".temp-decription");
let tempGrado=document.querySelector(".temp-grados");
let celGrade;

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
   celGrade=Math.floor(temp-273,15)

tempGrado.textContent=celGrade;
})
    });
}
}
);