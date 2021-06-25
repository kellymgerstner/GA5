// Write your JavaScript code here!

window.addEventListener("load", function(){
    console.log("Page loaded");
    
   
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submission cancelled"
    }
  });
});

function submitForm(){
 let pilotName = document.querySelectorf("input[name = pilotName]");
 let copilotName = document.querySelector("input[name = copilotName");
 let fuelLevel = document.querySelector("input[name = fuelLevel]");
 let cargoMass = document.querySelector("input[nme = cargoMass");

    if (pilotName ==="" || copilotName === "" || fuelLevel === "" || cargoMass ===""){
        alert("All fields are required.");
    }
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




