let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let positiveNegative = document.querySelector(".positive-negative");
let symbol;
let num1;
let num2;
let currentNum=0;
let latestEquals=0;

buttons.forEach((button)=>{
   button.addEventListener("click",function(){
    // var audio = new Audio("../sound/buttonClick.mp3");
    // audio.play();
        //Numbers digit get
        if (button.classList.contains("digit-btn")) {
            if (display.textContent =='Infinity') {
                display.textContent = 0;
            }
            if (symbol===undefined) {
                if (display.textContent=="0") {
                  display.textContent = button.textContent;
                }
                else{
                    display.textContent += button.textContent;
                }
                num1 = Number(display.textContent);
                currentNum = num1;
            }
            else{
                if (display.textContent=="0") {
                  display.textContent = button.textContent;
                }
                else{
                    display.textContent += button.textContent;
                }
                num2 = Number(display.textContent);
                currentNum = num2;
            }
        }     
        //Positive-Negative
        if (button.classList.contains("positive-negative")) {
           if (currentNum==num1) {
                if (num1>0) {
                    console.log('its positive now: ', num1);
                    num1 = num1*(-1);
                    currentNum =  num1;
                    display.textContent = num1;
                }
                else{
                    console.log('its negative now: ', num1);
                    num1 = num1*(-1);
                    currentNum =  num1;
                    display.textContent = num1;
                }
           }
           if (currentNum==num2) {
                if (num2>0) {
                    num2 = num2*(-1);
                    currentNum =  num2;
                    display.textContent = num2;
                }
                else{
                    num2 = num2*(-1);
                    currentNum =  num2;
                    display.textContent = num2;
                }
           }
        }
        //Clear All Button
        if (button.classList.contains("clear-all")) {
            display.textContent = "0";
            num1 = undefined;
            num2 = undefined;
            symbol = undefined;
        }
        //Plus
        if (button.classList.contains("plus")) {
            if (num1==undefined) {
                num1 = 0;
            }
            if (num1!=undefined && num2!=undefined) {
                num1= calculate(num1,num2,symbol);
            }
            display.textContent = "";
            symbol = button.textContent;
          
        }
         //Minus
         if (button.classList.contains("minus")) {
            if (num1==undefined) {
                num1 = 0;
            }
            if (num1!=undefined && num2!=undefined) {
                num1= calculate(num1,num2,symbol);
            }
            display.textContent = "";
            symbol = button.textContent;
           
        }
         //Multiply
         if (button.classList.contains("multiply")) {
            if (num1==undefined) {
                num1 = 0;
            }
            if (num1!=undefined && num2!=undefined) {
                num1 = calculate(num1,num2,symbol);
            }
            display.textContent = "";
            symbol = button.textContent;
        }
         //Divide
         if (button.classList.contains("divide")) {
            if (num1==undefined) {
                num1 = 0;
            }
            if (num1!=undefined && num2!=undefined) {
                num1= calculate(num1,num2,symbol);
            }
            display.textContent = "";
            symbol = button.textContent;
           
        }
        //Percentage
        if (button.classList.contains("percentage-btn")) {
            if (currentNum!=0) {
                if (num1==currentNum) {
                    num1 = currentNum/100;
                    display.textContent = num1;
                }
                else if(num2 == currentNum){
                    display.textContent = num2;
                }
            }
        }
        //Make Number Float
        if (button.classList.contains("float-btn")) {
            if (!display.textContent.includes(".")) {
                display.textContent += '.';
            }

        }
        //Equals
        if (button.classList.contains("equals")) {
            if ((display.textContent!=latestEquals && num2!=undefined) || symbol!=undefined || (display.textContent==0)) {
                    num1= calculate(num1,num2,symbol);
                    latestEquals = num1;
                    display.textContent = num1;
                    currentNum = Number(num1);
                    num1 = Number(num1);
                    num2 = undefined;
                    symbol = undefined;
           }
        }
   });
});



//All the calculation goes here
function calculate(num1,num2,symbol) {
    var result;
    switch(symbol) {
        //Plus Case
        case '+':
            let resultNumPlus = Number(num1)+Number(num2);
            if (Math.floor(resultNumPlus)===(resultNumPlus)) {
                result = resultNumPlus;
            }
            else{
                result = (resultNumPlus).toFixed(2)
            }
          break;
        //Minus Case
        case '-':
            let resultNumMinus = Number(num1)-Number(num2);
            if (Math.floor(resultNumMinus)===(resultNumMinus)) {
                result = resultNumMinus;
            }
            else{
                result = (resultNumMinus).toFixed(2)
            }
          break;
        //Multiply Case
        case '*':
            let resultNumMultiply = Number(num1)*Number(num2);
            if (Math.floor(resultNumMultiply)===(resultNumMultiply)) {
                result = resultNumMultiply;
            }
            else{
                result = (resultNumMultiply).toFixed(2)
            }
          break;
        //Divide Case
          case '/':
            let resultNumDivide = num1/num2;
            if (Math.floor(resultNumDivide)===(resultNumDivide)) {
                result = resultNumDivide;
            }
            else{
                result = (resultNumDivide).toFixed(2)
            }
           break;  
        default:
          console.log("something went wrong!");
          break;
      }
    return result;
}

//Keyboard button clicks
document.addEventListener("keydown",KeyboardClick);

function KeyboardClick(e){
    var keyId = e.keyCode;
    switch (keyId) {
        case 8:
            let newDisplay = display.innerHTML.slice(0,-1);
            if (num1==currentNum) {
                num1 = Number(newDisplay);
                currentNum = num1;
            }
            else if(num2==currentNum){
                num2 = Number(newDisplay);
                currentNum = num2;

            }
            display.innerHTML = newDisplay;
            if (display.innerHTML == "") {
                display.innerHTML = 0;
                break;
            }
            break;
        default:
            break;
    }
}
