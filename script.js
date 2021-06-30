window.addEventListener("load", function(){
    console.log("Page loaded");
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event){
    event.preventDefault();
    submitForm();
    });
function submitForm(){
 let pilotName = document.querySelector("input[name = pilotName]");
 let copilotName = document.querySelector("input[name = copilotName]");
 let fuelLevel = document.querySelector("input[name = fuelLevel]");
 let cargoMass = document.querySelector("input[name = cargoMass]");
 let launchStatus = document.getElementById("launchStatus");
 let faultyItems = document.getElementById("faultyItems");
 let fuelStatus = document.getElementById("fuelStatus");
 let cargoStatus = document.getElementById("cargoStatus");
    console.log(pilotName.value);
    console.log(copilotName.value);
    console.log(fuelLevel.value);
    console.log(cargoMass.value);
    if (pilotName.value ==="" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ===""){
        alert("All fields are required.");
    }
    if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
        alert("Please enter a valid name.");
    }
    if (isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) { 
        alert("Please enter a number.");
    }
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value}`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value}`;
    if(fuelLevel.value > 10000 && cargoMass.value < 10000){
        launchStatus.innerHTML = "Shuttle ready for launch."
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "visible"
    }
    if(fuelLevel.value < 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible"
        fuelStatus.innerHTML = "Insufficient fuel for journey."
    }else{
        fuelStatus.innerHTML = "Sufficient fuel for journey."
    }
    if(cargoMass.value > 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible"
        cargoStatus.innerHTML = "Cargo mass exceeds limit."
    }else{
        cargoStatus.innerHTML = "Cargo mass is within limit."
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
});
