// This script takes a file name as argument and returns its content

// Functions
function nbArgCheck(number){
    if(number !== 1){
        return false;
    }
    return true;
}

function displayData(param1)
{
    console.log(param1);
}

function readFileContent(param1){
    var fs = require("fs");
    fs.readFile(param1, "utf-8", function read(err, data){
        if(err)
        {
            console.log("error");
        }
        else{
            const content = data;
            displayData(content);
        }
        
    });
    
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
fileName = argList[0];


// Part 2: Error management
if (!nbArgCheck(nbArg)){
    console.log("error");
    return;
}

// Part 3: Resolution
readFileContent(fileName);

// Part 4: Result display
// N/A