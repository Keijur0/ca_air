// This script takes numbers as arguments and applies an operation defined by the last argument.

// Functions
function nbArgCheck(number){
    if(number < 2){
        return false;
    }
    return true;
}

function argValidityCheck(list){
    var nbLength = list.length;
    for(i = 0; i < nbLength; i++){
        var strLength = list[i].length;
        for(j = 0; j < strLength; j++){
            if(list[i].charCodeAt(j) < 48 || list[i].charCodeAt(j) > 57){
                return false;
            }
        }
    }
    return true;
}

function calcValidityCheck(string){
    var strLength = string.length;
    if(string.charCodeAt(0) !== 43 && string.charCodeAt(0) !== 45){
        return false
    }
    else{
        for(i = 1; i < strLength; i++){
            if(string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57){
                return false;
            }
        }
    }
    return true;
}


function defineCalculation(param1){
    var opLength = param1.length;
    var number;
    // Defining the number for operation
    for(let i = 1; i < opLength; i++){
        if(!number){
            number = param1[i];
        }
        else{
            number = number + param1[i];
        }
    }
    return number;
}


function applyCalculation(param1, param2){
    listLength = param1.length;
    var result;
    for(let i = 0; i < listLength; i++){
        // Defining the operation
        if(operator == "+"){
            if(!result){
                result = parseInt(param1[i]) + parseInt(param2);
            }
            else{
                result = result + " " + (parseInt(param1[i]) + parseInt(param2));
            }
        }
        else{
            if(!result){
                result = parseInt(param1[i]) - parseInt(param2);
            }
            else{
                result = result + " " + (parseInt(param1[i]) - parseInt(param2));
            }            
        }
    }
    return result; 
}

// Part 1: Parsing
var argList = process.argv.splice(2, process.argv.length - 1);
var nbArg = argList.length;
var operation = argList[argList.length - 1];
var operator = operation[0];
var numbersList = argList.splice(0, argList.length - 1)

// Part 2: Error management
if (!nbArgCheck(nbArg) || !argValidityCheck(numbersList) || !calcValidityCheck(operation)){
    console.log("error");
    return;
}

// Part 3: Resolution
number = defineCalculation(operation);
finalResult = applyCalculation(numbersList, number);

// Part 4: Result display
console.log(finalResult);