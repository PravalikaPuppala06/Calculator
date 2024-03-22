const display=document.getElementById("display");

function appendToDiplay(input){
    display.value+=input;

}

function clearDiplay(){
    display.value=""

}

function calculate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }

}