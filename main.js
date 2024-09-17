let purpose = 0;
let idleReflectionCount = 0;
let idleReflectionPrice = 10;
let sharpenFocusCount = 0;
let sharpenFocusPrice = 30;
let operationNr = 0;
const delay = 50;

//make the button and co-existing text
//purpose scale
const purpose_scale = document.getElementById("purpose_scale");
//idle reflection button
const Idle_reflection = document.createElement("button");
Idle_reflection.textContent = "Idle reflection";
Idle_reflection.setAttribute("id", "Idle_reflection");
Idle_reflection.setAttribute("onClick", "buyIdleReflection(1)");
//idle reflection price display
const idleReflectionPriceDisplay = document.createElement("p");
idleReflectionPriceDisplay.innerHTML ="Buy for <span id = 'idleReflectionPriceID'>10</span> purpose (0.5 purpose/s)"
idleReflectionPriceDisplay.setAttribute("id", "'idleReflectionPriceDisplay'");
idleReflectionPriceDisplay.setAttribute("style", "margin-top: 4px; margin-bottom: 0px; margin-left: 10px;");
//sharpen focus button
const sharpenFocus = document.createElement("button");
sharpenFocus.textContent = "Sharpen focus";
sharpenFocus.setAttribute("id", "sharpenFocusButton");
sharpenFocus.setAttribute("onClick", "buySharpenFocus(1)");
//sharpen focus price display
const sharpenFocusPriceDisplay = document.createElement("p");
sharpenFocusPriceDisplay.innerHTML = "Buy for <span id = 'sharpenFocusPriceDisplayID'>30</span> purpose (+50% Idle reflection effectiveness)";
sharpenFocusPriceDisplay.setAttribute("style", "margin-top: 4px; margin-bottom: 0px; margin-left: 10px;");

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
        idleReflectionPrice = Math.round(idleReflectionPrice * 1.1);
        document.getElementById("idleReflectionPriceID").innerHTML = idleReflectionPrice;
    } else{
        Idle_reflection.innerHTML = "Not enough purpose";
        setTimeout(1000);
        Idle_reflection.innerHTML = "Idle reflection";
    }
}

function buySharpenFocus(count){
    if(purpose >= sharpenFocusPrice){
        purpose = purpose - sharpenFocusPrice;
        sharpenFocusCount = sharpenFocusCount + count;
        sharpenFocusPrice = Math.round(sharpenFocusPrice * 1.15);
        document.getElementById("sharpenFocusPriceDisplayID").innerHTML = sharpenFocusPrice;
    } else {
        Idle_reflection.innerHTML = "Not enough purpose";
        setTimeout(1000);
        Idle_reflection.innerHTML = "Sharpen focus";
    }
}

//increase purpose counter every (delay)ms
window.setInterval(function(){
    purpose = purpose + idleReflectionCount + (sharpenFocusCount/2 * idleReflectionCount) *(delay/2000);
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
        operationNr = 2;
    }
    if(purpose >= 100 && purpose < 500 && operationNr === 2){
        purpose_scale.innerHTML = "A stray cat brushes against your leg.";
        document.getElementById("sharpenFocus").appendChild(sharpenFocus);
        document.getElementById("sharpenFocus").insertAdjacentElement("beforeend", sharpenFocusPriceDisplay);
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