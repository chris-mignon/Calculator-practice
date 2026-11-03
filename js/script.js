//This function takes the value of the button pressed and adds it to the display screen.
function toScreen(buttonValue){
// Get the display screen element by its ID
    screen= document.getElementById("display");
//Append the button value to the current value of the display screen
    screen.value += buttonValue;
}

function calculate(){
    if(screen.value === "" || screen.value === undefined ){
    screen.value = "0";}

    else{
        screen.value = eval(screen.value);
    }
}