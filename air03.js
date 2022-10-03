// This script takes several strings as argument which must include only 1 intruder, and will return which is the intruder. Elements can have several pairs.

// Functions
function nbArgCheck(number) 
{
    if(nbArg < 3)
    {
        return false;
    }
    return true;
}

function argValidityCheck(array, array1)
{
    hasPair = 0;
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < array1.length; j++)
        {
            if (i == j)
            {
                continue;
            }
            else if (array[i] == array1[j])
            {
                hasPair++;
                break;
            }
        }
    }
    if (array.length - hasPair !== 1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function findIntruder(array, array1)
{
    for (let i = 0; i < array.length; i++)
    {
        var pair = 0;
        for (let j = 0; j < array1.length; j++)
        {
            if (i == j)
            {
                continue;
            }
            if (array[i] == array1[j])
            {
                pair++;
            }
        }
        if (pair == 0)
        {
            return array[i];
        }
    }
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;

// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}
else if (!argValidityCheck(argList, argList))
{
    console.log("error");
    return;
}

// Part 3: Resolution
finalResult = findIntruder(argList, argList);

// Part 4: Result display
console.log(finalResult);