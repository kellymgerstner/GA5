// Write your JavaScript code here!

window.addEventListener("load", function(){
    console.log("Page loaded");
    
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submission cancelled");
    });
 



function submitForm(){
 let pilotName = document.querySelector("input[name = pilotName]");
 let copilotName = document.querySelector("input[name = copilotName]");
 let fuelLevel = Number(document.querySelector("input[name = fuelLevel]"));
 let cargoMass = Number(document.querySelector("input[nme = cargoMass]"));

 let launchStatus = document.getElementById("launchStatus");
 let faultyItems = document.getElementById("faultyItems");
 let fuelStatus = document.getElementById("fuelStatus");
 let cargoStatus = document.getElementById("cargoStatus");

    if(pilotName ==="" || copilotName === "" || fuelLevel === "" || cargoMass ===""){
        alert("All fields are required.");
    }
    if(!isNaN(pilotName) || !isNaN(copilotName)){
            alert("Please enter a valid name.");
    }
    if(isNaN(fuelLevel)|| isNaN(cargoMass)){ 
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
}

  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(json){
        let missionTarget =  document.getElementById("missionTarget");
        console.log(json);
        missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[4].name}</li>
                <li>Diameter: ${json[4].diameter}</li>
                <li>Star: ${json[4].star}</li>
                <li>Distance from Earth: ${json[4].distance}</li>
                <li>Number of Moons: ${json[4].moons}</li>
            </ol>
            <img src = "${json[4].image}">`
    });      
 });     

let formSubmit = document.querySelector("button");
formSubmit.addEventListener("click", function(){
    submitForm();
});
});