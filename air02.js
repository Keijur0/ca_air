// This script takes several strings as argument and returns it as a single string, separated by the last argument given.

// Functions
function nbArgCheck(number) 
{
    if(nbArg < 1)
    {
        return false;
    }
    return true;
}

function concatString(array, sepa)
{
    var result;
    for (let i = 0; i < array.length - 1; i++)
    {
        if (!result)
        {
            result = array[i];
        }
        else
        {
            result = result + sepa + array[i];
        }
    }
    return result;
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
separator = argList[nbArg - 1];

// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
finalResult = concatString(argList, separator);

// Part 4: Result display
console.log(finalResult);