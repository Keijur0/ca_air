// This script takes strings as arguments and returns them moved one notch to the left

// Functions
function nbArgCheck(number){
    if(number < 2){
        return false;
    }
    return true;
}
function moveToLeft(param1){
    newArray = [];
    list1Length = param1.length;
    newArrayLength = newArray.length;
    for(let i=0; i<list1Length; i++){
        newArray[i-1] = param1[i];
    }
    newArray.push(param1[0]);
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
            result = result + ", " + param1[i];
        }   
    }
    return result;
}
// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;

// Part 2: Error management
if (!nbArgCheck(nbArg)){
    console.log("error");
    return;
}

// Part 3: Resolution
movedToLeft = moveToLeft(argList);
finalResult = formatResult(movedToLeft);

// Part 4: Result display
console.log(finalResult);