// Write your JavaScript code here!
window.addEventListener("load", function(){
//define everything I need to manipulate in the html here
let pilotName = document.getElementById("pilotName");
//let pilotNameInput = pilotName.name;
let copilotName = document.getElementById('copilotName');
let fuelLevel = document.getElementById('fuelLevel');
let cargoMass = document.getElementById('cargoMass');
let formSubmit = document.getElementById('formSubmit');
let launchStatusCheck = document.getElementById('launchStatusCheck');
let launchStatus = document.getElementById('launchStatus');
let faultyItems = document.getElementById('faultyItems');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById('cargoStatus');
let form = document.querySelector("form");

this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
      let randomPlanet = (Math.floor(Math.random()*5));
      missionTarget.innerHTML =`<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[randomPlanet].name}</li>
         <li>Diameter: ${json[randomPlanet].diameter}</li>
         <li>Star: ${json[randomPlanet].star}</li>
         <li>Distance from Earth: ${json[randomPlanet].distance}</li>
         <li>Number of Moons: ${json[randomPlanet].moons}</li>
      </ol>
      <img src="${json[randomPlanet].image}">`;

   });
   
});

form.addEventListener("submit", function(event){
   event.preventDefault();

if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value=== ""){
   window.alert("All fields must contain a value");
}
else if (isNaN(pilotName.value)=== false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
   window.alert("All fields must contain correct type of data");
}
else {
   faultyItems.style.visibility="visible";
   document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;

   if(fuelLevel.value < 10000 && cargoMass.value <= 10000){ 
      fuelStatus.innerHTML="Fuel level to low for launch.";
      launchStatus.innerHTML="Not Ready for Launch";
      launchStatus.style.color="red";

   } else if(fuelLevel.value >= 10000 && cargoMass.value > 10000){
      cargoStatus.innerHTML="Cargo mass too heavy for launch.";
      launchStatus.innerHTML="Not Ready for Launch";
      launchStatus.style.color="red";
   }else if(fuelLevel.value < 10000 && cargoMass.value > 10000){
      fuelStatus.innerHTML="Fuel level to low for launch.";
      cargoStatus.innerHTML="Cargo mass too heavy for launch.";
      launchStatus.innerHTML="Not Ready for Launch";
      launchStatus.style.color="red";
   } else { 
      launchStatus.innerHTML="Ready for Launch";
      launchStatus.style.color="green";
   }
}















  
   // if (isNaN(pilotName.value)) {
   //    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName.value} is ready for launch.`;

   // }
   // if(isNaN(copilotName.value)){
   //    document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
   // }
   // if(fuelLevel.value < 10000){
   //    faultyItems.style.visibility="visible";
   //    fuelStatus.innerHTML="Fuel level to low for launch.";
   //    launchStatus.innerHTML="Shuttle not ready for launch.";
   //    launchStatus.style.color="red";
   // } else {
   //    faultyItems.style.visibility = "hidden";
   //    fuelStatus.innerHTML="Fuel level high enough for launch";
   // }
   // if(cargoMass.value > 10000 && fuelLevel.value >= 10000){
   //    faultyItems.style.visibility="visible";
   //    cargoStatus.innerHTML="Cargo mass too heavy for launch.";
   //    launchStatus.style.color="red";
   // }else {
   //    faultyItems.style.visibility = "hidden";
   //    cargoStatus.innerHTML="Cargo mass low enough for launch";
   // }
   
   
//    if(isNaN(copilotName.value) && (copilotName.value !== "")){
   
//    } else{
//       window.alert("Copilot name cannot be left blank and must contain letters only");
//    }
//    if ((isNaN(fuelLevel.value) === false) && (fuelLevel.value !== "")) {
      
//       }
//       else{ window.alert("Fuel level must contain a numerical value and not be left blank");
//    }
   
//    if ((isNaN(cargoMass.value) === false) && (cargoMass.value !== "")){
      
//       }else{ window.alert("Cargo Mass must contain a numerical value and not be left blank");
//    }
   
});

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
