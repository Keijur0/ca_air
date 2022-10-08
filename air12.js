// This script takes numbers as arguments and will return them sorted, using the quick sort algorithm

// Functions
function nbArgCheck(number){
    if(number < 2){
        return false;
    }
    return true;
}
function argValidityCheck(param1){
    strLength = param1.length;
    for(let i = 0; i<strLength; i++){
        if(param1[i].charCodeAt() < 48 || param1[i].charCodeAt() > 57){
            return false;
        }
    }
    return true;
}
function swapItems(param1, param2, param3){
    temp = param1[param2];
    param1[param2] = param1[param3];
    param1[param3] = temp;
}
function partitionArray(param1, param2, param3){
    pivot = param1[Math.floor((param2 + param3)/2)];
    i = param2;
    j = param3;
    while(i <= j){
        while(param1[i] < pivot){
            i++;
        }
        while(param1[j] > pivot){
            j--;
        }
        if(i <= j){
            swapItems(param1, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(param1, param2, param3){
    var index;
    if(param1.length > 1){
        index = partitionArray(param1, param2, param3);
        // If more elements on left side of pivot
        if(param2 < index-1){
            quickSort(param1, param2, index-1);
        }
        // If more elements on right side of pivot
        if(index < param3){
            quickSort(param1, index, param3);
        }
    }
    return param1;
}
function formatResult(param1){
    listLength = param1.length;
    result = "";
    for(let i = 0; i < listLength; i++){
        if(!result){
            result = param1[i];
        }
        else{
            result = result + " " + param1[i];
        }   
    }
    return result;
}
// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
firstElem = 0;
lastElem = nbArg-1;

// Part 2: Error management
if (!nbArgCheck(nbArg) || !argValidityCheck(argList)){
    console.log("error");
    return;
}

// Part 3: Resolution
sortedArray = quickSort(argList, firstElem, lastElem);
finalResult = formatResult(sortedArray);

// Part 4: Result display
console.log(finalResult);