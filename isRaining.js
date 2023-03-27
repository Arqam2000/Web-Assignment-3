let isRaining = true;
let notRaining = prompt("Is it not raining? (true/false):");

if (notRaining == "true") {
    isRaining = false;
}

if (isRaining){
    console.log("Bring an umbrella");
}
else {
    console.log("Leave the umbrella at home");
}
