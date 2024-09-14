let purpose = 0;
const purpose_scale = document.getElementById("purpose_scale");
const Idle_reflection = document.createElement("button");

function gainPurpose(){
    //increment purpose counter
    purpose = purpose + 1;
    document.getElementById("purpose").innerHTML = purpose;
    //change scale based on purpose
    if(purpose >= 10 && purpose < 50){
        purpose_scale.innerHTML = "A flea notices you and jumps onto your hair.";
        document.getElementById("Idle_reflection").appendChild(Idle_reflection);
    }
    if(purpose >= 50 && purpose < 100){
        purpose_scale.innerHTML = "A bird briefly lands near you before flying away.";
    }
    if(purpose >= 100 && purpose < 500){
        purpose_scale.innerHTML = "A stray cat brushes against your leg.";
    }
}




console.log(purpose);