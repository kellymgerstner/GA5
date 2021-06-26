// Write your JavaScript code here!

window.addEventListener("load", function(){
    console.log("Page loaded");
    
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submission cancelled");
    }
  });
});


function submitForm(){
 let pilotName = document.querySelectorf("input[name = pilotName]");
 let copilotName = document.querySelector("input[name = copilotName");
 let fuelLevel = document.querySelector("input[name = fuelLevel]");
 let cargoMass = document.querySelector("input[nme = cargoMass");

 let launchStatus = document.getElementById("launchStatus");
 let faultyItems = document.getElementById("faultyItems");
 let fuelStatus = document.getElementById("fuelStatus");
 let cargoStatus = document.getElementById("cargoStatus");

    if (pilotName ==="" || copilotName === "" || fuelLevel === "" || cargoMass ===""){
        alert("All fields are required.");
     }
     if (isNaN(fuelLevel) === true){
        alert("Please enter a number for the fuel level.");
      }
      if (isNaN(cargoMass) === true){
        alert("Please enter a number for the fuel level.");
       }
    
    document.getElementById("pilotStatus").innerHTML = `${pilotName}`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName}`;
   
    if(< 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible"
        fuelStatus.innerHTML = "Insufficient fuel for journey."
     }
     if(cargoMass > 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible"
        cargoStatus.innerHTML = "Cargo mass exceeds limit."
      }
      if(fuelLevel > 10000 && cargoMass < 10000){
         launchStatus.innerHTML = "Shuttle ready for launch."
         launchStatus.style.color = "green";
       }
  fetch(https://handlers.education.launchcode.org/static/planets.json).then(function(response){
    //function code
   });
 }            
            
// /* This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
// */




