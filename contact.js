function setDefaultEmail(){
    let area = document.getElementById("finalmail");
    area.innerHTML = getBaseMessage();
}

function getBaseMessage(){
    return "The Main Stain, \n\nI am writing to you to inquire about some stained glass. \n\nLet me know, \n\n-Inquiring Mind";
}

function getPriceRangeString(value){
    let resp = "I'm looking for ";
    if(value == "lowest"){
        resp += " something lower priced.";
    }
    else if(value == "middle"){
        resp += " something medium priced, fancy but not crazy.";
    }
    else if(value == "unknown"){
        resp = "I have no idea where to even begin with pricing, show me some estimates.";
    }
    else if(value == "high"){
        resp += " something fancy, give me the best.";
    }
    return resp;
}

function getTimeRangeString(value){
    let resp = "I need it ";
    if(value == "asap"){
        resp += " as quick as you can.";
    }
    else if(value == "soon"){
        resp += " relatively soon, I have a spot prepared and waiting for it.";
    }
    else if(value == "norush"){
        resp = " whenever you can get around to it. I'm in no hurry.";
    }
    return resp;
}


function updateEmailBox(){
    let area = document.getElementById("finalmail");
    let intro = "The Main Stain,";
    let outro = document.getElementById("usermail").value;
    let built = `${intro}${outro}`;
    area.innerHTML = built;
}