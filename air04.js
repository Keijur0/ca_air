// This script takes 1 string as argument, and will return it without any adjacent identical characters.

// Functions
function nbArgCheck(number) 
{
    if(nbArg !== 1)
    {
        return false;
    }
    return true;
}


function removeAdjRepChars(param1)
{
    result = param1[0];
    for (let i = 1; i < param1.length; i++)
    {
        if (param1[i] !== param1[i+1])
        {
            result = result + param1[i];
        }
    }
    return result;
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
string = argList[0];

// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
finalResult = removeAdjRepChars(string);
// Part 4: Result display
console.log(finalResult);