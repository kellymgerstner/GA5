// Write your JavaScript code here!

window.addEventListener("load", function(){
    console.log("Page loaded");
    
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submission cancelled");
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
        if(isNaN(pilotName) === false || isNaN(copilotName) === false){
            alert("Please enter a valid name.");
        }
            if (isNaN(fuelLevel) === true || isNaN(cargoMass) === true){
                alert("Please enter a number.");
                }
    
    document.getElementById("pilotStatus").innerHTML = `${pilotName}`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName}`;
   
    if(fuelLevel > 10000 && cargoMass < 10000){
        launchStatus.innerHTML = "Shuttle ready for launch."
        launchStatus.style.color = "green";
      }
        if(fuelLevel < 10000){
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
      
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(json){
        let missionTarget =  document.getElementById("missionTarget");
        missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json.name[4]}</li>
                <li>Diameter: ${json.diameter[4]}</li>
                <li>Star: ${json.star[4]}</li>
                <li>Distance from Earth: ${json.distance[4]}</li>
                <li>Number of Moons: ${json.moons[4]}</li>
            </ol>
            <img src = "${json.image[4]}">`
    });      
 });     

document.getElementById("formSubmit").addEventListener("click", function(){
    submitForm();
});