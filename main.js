let purpose = 0;
const purpose_scale = document.getElementById("purpose_scale");

function NGU(){
    //increment purpose counter
    purpose = purpose + 1;
    document.getElementById("purpose").innerHTML = purpose;
    //change scale based on purpose
    if(purpose >= 10 && purpose < 50){
        purpose_scale.innerHTML = "A flea notices you and jumps an your hair.";
    }
    if(purpose >= 50 && purpose < 100){
        purpose_scale.innerHTML = "A stray cat brushes against your leg.";
    }
    if(purpose >= 100 && purpose < 500){
        purpose_scale.innerHTML = "A bird briefly lands near you before flying away.";
    }
}




console.log(purpose);