function updateTime(){

let losAgelesElement =document.querySelector("#los-angeles");
let losAngelesDateElement = losAgelesElement.querySelector(".date");
let losAngelesTimeElement =losAgelesElement.querySelector(".time");
let losAngelesTime=moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML= moment().format("MMMM Do YYYY");
losAngelesTmeElement.inneerHTML=losAngelesTimeElement.format("h:mm:ss [<small>P</small>]");



let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTme = moment().tz("Europe/Paris");

parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTmeElement.inneerHTML = parisTimeElement.format(
  "h:mm:ss [<small>P</small>]"
);

updateTime();
setInterval(updateTime, 1000);
}