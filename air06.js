// This script takes strings as arguments, returns and removes the ones not containing the characters contained in last argument.

// Functions
function nbArgCheck(number){
    if(number < 2){
        return false;
    }
    return true;
}
function addResult(param1){
    if(!result){
        result = param1;
    }
    else{
        result = result + " " + param1;
    }
}

function compareString(param1, param2){
    listLength = param1.length;
    compLength = param2.length;
    for (let i = 0; i<listLength; i++){
        strLength = param1[i].length;
        similar = 0;
        // If the length of the comparison string is higher than the string in the list: can't be contained in it
        if(compLength > strLength){
            addResult(param1[i]);
            param1.splice(i, 1);
            listLength--;
            i--;
        }
        // If the length can be contained and comparison string has more than 1 character
        else if(compLength>1){
            n = strLength-compLength;
            for(j = 1; j < n; j++){
                k = 1;
                do{
                    if(param2[k].toLowerCase()==param1[i][j].toLowerCase() && param2[k-1].toLowerCase()==param1[i][j-1].toLowerCase()){
                        similar++;
                    }
                    k++;
                }while(k<compLength && similar<compLength-1);
                if (similar == compLength-1){
                    break;
                }
                else{
                    addResult(param1[i]);
                    param1.splice(i, 1);
                    listLength--;
                    if(i > 0){
                        i--;    
                    }
                }
            }
        }              
        else{
            // If comparison string has only 1 character
            for (let j=0; j<strLength; j++){
                if(param2.toLowerCase()==param1[i][j].toLowerCase()){
                    similar++;
                }
            }
            if(similar == 0){
                addResult(param1[i]);
                param1.splice(i, 1);
                listLength--;
                if(i > 0){
                    i--;    
                }
            }
        }
    }
    return result; 
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
comparator = argList[argList.length - 1];
stringList = argList.splice(0, argList.length - 1)
result = "";

// Part 2: Error management
if (!nbArgCheck(nbArg)){
    console.log("error");
    return;
}

// Part 3: Resolution
compareString(stringList, comparator);

// Part 4: Result display
console.log(result);