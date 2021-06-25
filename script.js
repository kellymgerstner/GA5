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
    if (isNaN(fuelLevel) === true){
        alert("Please enter a number for the fuel level.");
    }
    if (isNaN(cargoMass) === true){
        alert("Please enter a number for the fuel level.");
    }
    
    document.getElementById("pilotStatus").innerHTML = `${pilotName}`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName}`;
    
    if(fuelLevel < 10000){
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible"
        document.getElementById("fuelStatus").innerHTML = "Insufficient fuel for journey."
    }
    if(cargoMass > 10000){
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible"
        document.getElementById("cargoStatus").innerHTML = "Cargo mass exceeds limit."
    }
    if(fuelLevel is > 10000 && cargoMass < 10000){
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch."
         document.getElementById("launchStatus").style.color = "green";
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




