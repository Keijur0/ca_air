// This script takes integers as arguments in ascending order, and returns the last argument included among the first ones, in ascending order.

// Functions
function nbArgCheck(number){
    if(number < 2){
        return false;
    }
    return true;
}
function argValidityCheck(param1)
{   
    // All integers?
    listLength = param1.length;
    for(let i = 0; i < listLength; i++){
        nbLength = param1[i].length;
        for(let j = 0; j < nbLength; j++){
            if(param1[i].charCodeAt(j) < 48 || param1[i].charCodeAt(j) > 57){
                return false;
            }
        }
    }
    return true;
}
// Sorted list?
function argSortCheck(param1){
    if(param1.length > 1){
        for(let i = 0; i < listLength-1; i++){
            if(param1[i] > param1[i+1]){
                return false;
            }
        }
    }
    return true;
}
function argEqualityCheck(param1, param2){
    for(let i = 0; i < listLength; i++){
        if(param2 == param1[i]){
            return false;
        }
        else{
            for(let j = 0; j < listLength; j++){
                if(i==j){
                    continue;
                }
                else if(param1[i] == param1[j]){
                    return false;
                }
            }
        }
    }
    return true;
}
function addValue(param1, param2){
    listLength = param1.length;
    if(+param2 > +param1[listLength-1])
    {
        param1.push(param2);
        return param1;
    }
    else if(+param2 < +param1[0]){
        param1.splice(0, 0, param2);
        return param1;
    }
    else{
        for(let i = 0; i < listLength-1; i++){
            if(+param2 > +param1[i] && +param2 < +param1[i+1])
            {
                param1.splice(i+1, 0, param2);
                return param1;
            }
        }
    }
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
nbToAdd = argList[argList.length - 1];
nbList = argList.splice(0, argList.length - 1)

// Part 2: Error management
if (!nbArgCheck(nbArg) || !argValidityCheck(nbToAdd) || !argValidityCheck(nbList) || !argEqualityCheck(nbList, nbToAdd) || !argSortCheck(nbList)){
    console.log("error");
    return;
}

// Part 3: Resolution
nbAdded = addValue(nbList, nbToAdd);
finalResult = formatResult(nbAdded);

// Part 4: Result display
console.log(finalResult);