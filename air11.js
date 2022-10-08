// This script takes 2 arguments, one char and 1 integer. It will return pyramid made with the character, high as defined by the number.

// Functions
function nbArgCheck(number){
    if(number !== 2){
        return false;
    }
    return true;
}
function argValidityCheck(param1){
    strLength = param1.length;
    for(let i = 0; i<strLength; i++){
        if(param1.charCodeAt(i) < 48 || param1.charCodeAt(i) > 57){
            return false;
        }
    }
    return true;
}
function drawPyramid(param1, param2){
    newArray = [];
    line = 1;
    // Line
    for(let i = 0; i < param2; i++){
        strLength = param2+i;
        nbSpaces = param2-line;
        var result = "";
        // Spaces
        for(let j = 0; j < nbSpaces; j++){
            if(!result){
                result = " ";
            }
            else{
                result = result + " ";
            }
        }
        // Character
        for(let k = 0; k < strLength-nbSpaces; k++){
            result = result + param1;
        }
        line++;
        newArray.push(result);
    }
    return newArray;
}
function formatResult(param1){
    listLength = param1.length;
    result = "";
    for(let i = 0; i < listLength; i++){
        if(!result){
            result = param1[i];
        }
        else{
            result = result + "\n" + param1[i];
        }   
    }
    return result;
}
// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
char = argList[0];
height = argList[1];
pyraHeight = parseInt(height);

// Part 2: Error management
if (!nbArgCheck(nbArg) || !argValidityCheck(height)){
    console.log("error");
    return;
}

// Part 3: Resolution
pyramid = drawPyramid(char, pyraHeight);
finalResult = formatResult(pyramid);

// Part 4: Result display
console.log(finalResult);