let purpose = 0;
let idleReflectionCount = 0;
let idleReflectionPrice = 10;
let operationNr = 0;
const delay = 50;

//make the button and co-existing text
const purpose_scale = document.getElementById("purpose_scale");
const Idle_reflection = document.createElement("button");
Idle_reflection.textContent = "Idle reflection";
const idleReflectionPriceDisplay = document.createElement("p");
idleReflectionPriceDisplay.innerHTML = "Buy for <span id = 'idleReflectionPriceID'>10</span> purpose (0.5 purpose/s)";
idleReflectionPriceDisplay.setAttribute("id", "'idleReflectionPriceDisplay'");

//function for gaining purpose on click
function gainPurpose(gain){
    //increment purpose counter
    purpose = purpose + gain;
    
}

//function for buying 1st idle purpose gain upgrade
function buyIdleReflection(count){
    if(purpose >= idleReflectionPrice){
        purpose = purpose - idleReflectionPrice;
        idleReflectionCount = idleReflectionCount + count;
        idleReflectionPrice = Math.round(idleReflectionPrice * 1.2);
        document.getElementById("idleReflectionPriceID").innerHTML = idleReflectionPrice;
    } else{
        Idle_reflection.innerHTML = "Not enough purpose";
        setTimeout(1000);
        Idle_reflection.innerHTML = "Idle reflection";
    }
}

//increase purpose counter every (delay)ms
window.setInterval(function(){
    purpose = purpose + idleReflectionCount * (delay/2000);
    document.getElementById("purpose").innerHTML = Math.round(purpose);

    //change scale based on purpose
    if(purpose >= 10 && purpose < 50 && operationNr === 0){
        purpose_scale.innerHTML = "A flea notices you and jumps onto your hair.";
        
        operationNr = 1;
    }
    if(purpose >= 50 && purpose < 100 && operationNr === 1){
        purpose_scale.innerHTML = "A bird briefly lands near you before flying away.";
        //add the idle purpose button
        document.getElementById("Idle_reflection").appendChild(Idle_reflection);
        document.getElementById("Idle_reflection").insertAdjacentElement("beforeend", idleReflectionPriceDisplay);
        Idle_reflection.setAttribute("onClick", "buyIdleReflection(1)");
        operationNr = 2;
    }
    if(purpose >= 100 && purpose < 500 && operationNr === 2){
        purpose_scale.innerHTML = "A stray cat brushes against your leg.";
        operationNr = 3;
    }
    if(purpose >= 500 && purpose < 1000 && operationNr === 3){
        purpose_scale.innerHTML = "A child looks at you, and then quickly loses interest.";
        operationNr = 4;
    }
    if(purpose >= 1000 && purpose < 10000 && operationNr === 4){
        purpose_scale.innerHTML = "A neighbor glances at you through their window, but then averts his gaze.";
        operationNr = 5;
    }
}, delay);