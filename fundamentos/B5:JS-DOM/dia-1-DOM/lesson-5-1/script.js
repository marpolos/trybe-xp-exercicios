document.getElementById("header-container").style.backgroundColor = "green";

document.querySelectorAll(".emergency-tasks")[0].style.backgroundColor = "pink";

document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = "yellow";

let emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = "purple";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = "black";
}

document.getElementById("footer-container").style.backgroundColor = "blue";
console.log(document.getElementsByClassName("footer-container"));