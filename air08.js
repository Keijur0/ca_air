// This script takes 2 groups of integers as arguments, both in ascending order, and returns the merged numbers in ascending order.

// Functions
function nbArgCheck(number){
    if(number < 3){
        return false;
    }
    return true;
}
function argValidityCheck(param1){   
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
// Sorted lists?
function argSortCheck(param1){
    listLength=param1.length;
    for(let i = 0; i < listLength-1; i++){
        if(param1[i] > param1[i+1]){
            return false;
        }
    }
    return true;
}
function argEqualityCheck(param1, param2){
    listlength=param1.length;
    for(let i = 0; i < listLength; i++){
        for(let j = 0; j < listLength; j++){
            if(i==j){
                continue;
            }
            else if(param1[i] == param2[j]){
                return false;
            }
        }
    }
    return true;
}
function findSeparator(param1){
    separatorFound = false;
    listLength=param1.length;
    list1 = [];
    list2 = [];
    sepArray = [list1, list2];
    for(let i=0; i<listLength; i++){
        if(param1[i] == "fusion" && i == 0){
            return false;
        }
        else if(param1[i] == "fusion" && i == listLength-1)
        {
            return false;
        }
        else if(param1[i] == "fusion"){
            separatorFound = true;
        }
        else if(!separatorFound){
            list1.push(param1[i]);
        }
        else if(separatorFound)
        {
            list2.push(param1[i]);
        }
    }
    if(!separatorFound){
        return false;
    }
    else{
        return sepArray;
    }
}
function mergeArrays(param1, param2){
    list1Length = param1.length;
    list2Length = param2.length;
    for(let i=0; i<list1Length; i++){
        for(let j=1; j<list2Length; j++){
            if(+param1[i] < +param2[0]){
                list2Length = param2.unshift(param1[i]);
            }
            else if(+param1[i] > +param2[list2Length-1]){
                list2Length = param2.push(param1[i]);
            }
            else if(+param1[i] < +param2[j] && +param1[i] > +param2[j-1]){
                param2.splice(j, 0, param1[i]);
                list2Length++;
            }

        }
    }
    return param2;
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
newArray = findSeparator(argList);
array1 = newArray[0];
array2 = newArray[1];
nbArg = argList.length;

// Part 2: Error management
if (!nbArgCheck(nbArg) || !newArray || !argValidityCheck(array1) || !argValidityCheck(array2) || !argEqualityCheck(array1, array2) || !argEqualityCheck(array1, array1) || !argEqualityCheck(array2, array2) || !argSortCheck(array1) || !argSortCheck(array2)){
    console.log("error");
    return;
}

// Part 3: Resolution
mergedArrays = mergeArrays(array1, array2);
finalResult = formatResult(mergedArrays);

// Part 4: Result display
console.log(finalResult);