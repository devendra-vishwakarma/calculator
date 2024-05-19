const display = document.getElementById("display")
console.log(display.value);

function appendToDisplay(input){
      display.value += input
    //   console.log((Number)(display.value += input));
}

function clearDisplay(){
     display.value = "";
}

function calculate(){
   try{
      display.value = eval(display.value)
   }catch(error){
      display.value = "error hain re ye to"
   }
}