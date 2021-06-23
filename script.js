// Write your JavaScript code here!

document.getElementById("submitForm").addEventListener("click", function(event){
   event.preventDefault();
});

function validateForm(){
   let pilot = document.forms["launchForm"]["pilotName"].value;
   let copilot = document.forms["launchForm"]["copilotName"].value;
   let fuel = document.forms["launchForm"]["fuelLevel"].value;
   let cargo = document.forms["launchForm"]["cargoMass"].value;
   
   if (pilot == "" || copilot == "" || fuel == "" || cargo == ""){
      alert("All fields required");
      
   }else if(fuel == NaN){
      alert("Please enter a number for the fuel level.");
      
   }else if(cargo == Nan){
      alert("Please enter a number for the cargo mass.");
      
   }else if(fuel < 10000){
      //"Fuel level is too low."
      //"Shuttle not ready for launch."
      
   }else if(mass > 10000){
      //"Cargo mass is too high."
      //"Shuttle not ready for launch."
      
   }else{
      //"Shuttle ready for launch"
   }
}
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




