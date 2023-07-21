digitsArray = ["1","2","3","4","5","6","7","8","9"];
operatorsArray = ["+","-","x","÷"];

let displayValue = 0;
display.innerText = 0;
let buttons = document.querySelectorAll("button");

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
updateDisplay();

function getFirstNumber(){
    displayNumArray = [];

    for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        if (buttons[i].classList.contains("number")){
        displayNumArray.push(buttons[i].value);
        
        console.log("displayNumArray: "+displayNumArray);
        display.innerText = displayNumArray.join("");
        
        }
        else if (buttons[i].classList.contains("decimal")){
        if(buttons[i].value === "." && displayNumArray.length===0){
            displayNumArray.push("0", ".");
            display.innerText = displayNumArray.join("");
        } else {
            displayNumArray.push(buttons[i].value);
            display.innerText = displayNumArray.join("");

            }
        }
        else if (buttons[i].classList.contains("operator")){
        if (displayNumArray.some( ai => operatorsArray.includes(ai) )==false ){
            displayNumArray.push(buttons[i].value);
            display.innerText = displayNumArray.join("");
            //console.log("displayNumArray: "+displayNumArray);
            }            
        }          
    })
    }      
}
getFirstNumber();


num1=[];
num1Integers = [];
num1Fractions = [];
num2=[];
num2Integers = [];
num2Fractions = [];

let operatorIndex;
let decimalIndex;

let value1;
let value2;

let intValue1;
let intValue2;
let fracValue1;
let fracValue2;

// equals button function
let equals = document.getElementById("equals");
equals.addEventListener("click", function(){
        
    if (displayNumArray.some( ai => operatorsArray.includes(ai) )==true){
    //console.log("displayNumArray: "+displayNumArray);
    for (let a of displayNumArray){          
        if (a== "+"){            
        operatorIndex = displayNumArray.indexOf("+");
        //console.log("operator index :"+displayNumArray.indexOf("+"));            
        }
        else if (a=="-"){
        operatorIndex = displayNumArray.indexOf("-");
        //console.log("operator index: "+displayNumArray.indexOf("-"));
        }
        else if (a=="x"){
        operatorIndex = displayNumArray.indexOf("x");
        //console.log("operator index: "+displayNumArray.indexOf("x"));
        }
        else if (a=="÷"){
        operatorIndex = displayNumArray.indexOf("÷");
        //console.log("operator index: "+displayNumArray.indexOf("/"));
        }
    }
    // now create num1 and num2 arrays
    for (let d = 0; d<operatorIndex; d++){
        num1.push(displayNumArray[d]);
    }
    for (let f=operatorIndex+1; f<displayNumArray.length; f++){
        num2.push(displayNumArray[f]);
    }
    console.log("num1: "+num1);
    console.log("num2: "+num2);

    // create num1 value
    
    if (num1.includes(".")==false){
        value1 = 0;
        let length1 = num1.length;
        newArr1 = [];
        for (let x=0; x<length1; x++){
        newArr1.push(num1[x]*10**(length1-x-1));
        }
        console.log("newArr1: "+newArr1);
        
        for (let i = newArr1.length; i--;){
        value1 += newArr1[i];
        }
        console.log("value1: "+value1);

    } else if (num1.includes(".")){
        //find decimal point index 
        for (let d of num1){
        if (d=="."){
            decimalIndex = num1.indexOf(".");
        }
        }
        //create array of integers from num1
        for (let x = 0; x < decimalIndex; x++){
        num1Integers.push(num1[x]);
        console.log("num1Integers: "+num1Integers);
        }
        //create array of fractions from num1
        for (let x = decimalIndex+1; x<num1.length; x++){
        num1Fractions.push(num1[x]);
        console.log("num1Fractions: "+num1Fractions);
        }
        //calculate integer array value
        let integers1Length = num1Integers.length;
        intValue1=0;
        tempArr1 = [];
        for (let x=0; x<integers1Length; x++){
        tempArr1.push(num1Integers[x]*10**(integers1Length-x-1));
        }
        console.log("tempArr1: "+tempArr1);
        for (let i = tempArr1.length; i--;){
        intValue1 += tempArr1[i];
        }
        //calculate fraction array value
        let fractions1Length = num1Fractions.length;
        fracValue1 = 0;
        tempArr2 = [];
        for (let x = 0; x<fractions1Length; x++){
        tempArr2.push((num1Fractions[x]*10**(-x-1)).toFixed(4));
        }
        console.log("tempArr2: "+tempArr2);
        for (let i = tempArr2.length; i--;){
        fracValue1 += Number(tempArr2[i]);
        }
        // sum integer value and fractional value
        value1 = intValue1 + fracValue1;
        console.log("value1: "+value1);
    }
    //console.log("value1: "+value1);
    
    /*
    let length2 = num2.length;
    newArr2 = [];
    for (let y=0; y<length2; y++){
        newArr2.push(num2[y]*10**(length2-y-1));
    }
    console.log("newArr2: "+newArr2);
    value2 = 0;
    for (let j = newArr2.length; j--;){
        value2 += newArr2[j];
    }
    console.log("value2: "+value2);
    */

    // create num2 value
    if (num2.includes(".")==false){
        value2 = 0;
        let length2 = num2.length;
        newArr2 = [];
        for (let x=0; x<length2; x++){
        newArr2.push(num2[x]*10**(length2-x-1));
        }
        console.log("newArr2: "+newArr2);
        
        for (let i = newArr2.length; i--;){
        value2 += newArr2[i];
        }
        console.log("value2: "+value2);

    } else if (num2.includes(".")){
        //find decimal point index 
        for (let d of num2){
        if (d=="."){
            decimalIndex = num2.indexOf(".");
        }
        }
        //create array of integers from num1
        for (let x = 0; x < decimalIndex; x++){
        num2Integers.push(num2[x]);            
        }
        console.log("num2Integers: "+num2Integers);
        //create array of fractions from num1
        for (let x = decimalIndex+1; x<num2.length; x++){
        num2Fractions.push(num2[x]);
        }
        console.log("num2Fractions: "+num2Fractions);
        //calculate integer array value
        let integers2Length = num2Integers.length;
        intValue2=0;
        tempArr2 = [];
        for (let x=0; x<integers2Length; x++){
        tempArr2.push(num2Integers[x]*10**(integers2Length-x-1));
        }
        console.log("tempArr2: "+tempArr2);
        for (let i = tempArr2.length; i--;){
        intValue2 += tempArr2[i];
        }
        //calculate fraction array value
        let fractions2Length = num2Fractions.length;
        fracValue2 = 0;
        tempArr2 = [];
        for (let x = 0; x<fractions2Length; x++){
        tempArr2.push((num2Fractions[x]*10**(-x-1)).toFixed(4));
        }
        console.log("tempArr2: "+tempArr2);
        for (let i = tempArr2.length; i--;){
        fracValue2 += Number(tempArr2[i]);
        }
        // sum integer value and fractional value
        value2 = intValue2 + fracValue2;
        console.log("value2: "+value2);
    }
            
    }

    // final function to display calcualtion result
    for (let a of displayNumArray){          
    if (a== "+"){                        
        display.innerText = add(Number(value1),Number(value2));
    }
    else if (a== "-"){                        
        display.innerText = subtract(Number(value1),Number(value2));
    }
    if (a== "x"){                        
        display.innerText = multiply(Number(value1),Number(value2));
    }
    if (a== "÷"){                        
        display.innerText = divide(Number(value1),Number(value2));
    }
    }
})


let deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function(){
    displayNumArray.pop();
    display.innerText = displayNumArray.join("");
    console.log("displayNumArray: "+displayNumArray);
})




// operator functions
function add(x,y){return (x + y).toFixed(3);}
function subtract(x,y){return (x - y).toFixed(3);}
function multiply(x,y){return (x * y).toFixed(3);}
function divide(x,y){
    const number = x/y;
    if (x==0 && y==0){
    return "silly billy";
    } else if (y==0){
    return "∞";
    }
    else {
    return Math.round((number + Number.EPSILON) * 100) / 100;
    }
    
}

let clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    location.reload();
})




