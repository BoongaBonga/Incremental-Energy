let purpose = 0;
let idleReflectionCount = 0;
let idleReflectionPrice = 10;

const purpose_scale = document.getElementById("purpose_scale");
const Idle_reflection = document.createElement("button");
Idle_reflection.textContent = "Idle reflection";

function gainPurpose(gain){
    //increment purpose counter
    purpose = purpose + gain;
    
}


function buyIdleReflection(count){
    if(purpose >= idleReflectionPrice){
        purpose = purpose - idleReflectionPrice;
        idleReflectionCount = idleReflectionCount + count;
        idleReflectionPrice = idleReflectionPrice * 1.3;
    } else{
        Idle_reflection.innerHTML = "Not enough purpose";
        setTimeout(1000);
        Idle_reflection.innerHTML = "Idle reflection";
    }
}

window.setInterval(function(){
    purpose = purpose + idleReflectionCount;
    document.getElementById("purpose").innerHTML = purpose;
    
    //change scale based on purpose
    if(purpose >= 10 && purpose < 50){
        purpose_scale.innerHTML = "A flea notices you and jumps onto your hair.";
        document.getElementById("Idle_reflection").appendChild(Idle_reflection);
        Idle_reflection.setAttribute("onClick", "buyIdleReflection(1)");
    }
    if(purpose >= 50 && purpose < 100){
        purpose_scale.innerHTML = "A bird briefly lands near you before flying away.";
    }
    if(purpose >= 100 && purpose < 500){
        purpose_scale.innerHTML = "A stray cat brushes against your leg.";
    }
}, 50);