
// This function takes the value of the button pressed and adds it to the display screen.
function toScreen(buttonValue) {
    // Get the display screen element by its ID
    screen=document.getElementById("display");
    // Append the button value to the current value of the display screen
    screen.value += buttonValue; 
}

function calculate(){
    if( screen.value == "" || screen.value == undefined ){ 
        screen.value = "0";
    }
    else {
        screen.value = eval(screen.value);
    }

}

function remember(){
    //define the memory variable to store the value 
    memory = document.getElementById("memory");

    //if the memory variable has a value, display it on the screen
    if(memory.value){
        //display the value of the memory variable on the screen using the toScreen function
        toScreen(memory.value);
    }
    //if the memory variable is empty, store the value of the screen variable in it and clear the screen
    else if(screen.value !=''){
        
        memory.value = screen.value;
        screen.value = "";
    }


}

function clearScreen(){

    screen.value = "";
}

function clearMemory(){
    memory.value = "";
}

function switchSign(){
screen.value = screen.value * -1;  
}

function toPercent(){
    if(screen.value){
        screen.value = screen.value / 100;
    }
}