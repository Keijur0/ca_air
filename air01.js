// This script takes 1 string as argument, and returns it split by the last argument.

// Functions
function nbArgCheck(number) 
{
    if(number !== 2)
    {
        return false;
    }
    return true;
}

function splitStringWithSpaces(string_to_cut, sepa)
{
    arrayOfWords = [];
    j = 0;
    for (let i = 0; i < string_to_cut.length; i++)
    {
        if (string_to_cut[i] !== sepa)
        {
            if (!arrayOfWords[j])
            {
                arrayOfWords[j] = string_to_cut[i];
            }
            else
            {
                arrayOfWords[j] = arrayOfWords[j] + string_to_cut[i]; 
            }
        }
        else if (!arrayOfWords[j])
        {
            continue;
        }
        else
        {
            j++;
        }        
    }
    return arrayOfWords;
}

function splitStringWithString (string_to_cut, sepa)
{
    stringSplitbyString = [];
    j = 0;
    for (let i = 0; i < string_to_cut.length; i++)
    {
        if (string_to_cut[i] !== sepa)
        {
          if (!stringSplitbyString[j])
           {
                stringSplitbyString[j] = string_to_cut[i];
           }
           else
           {
                stringSplitbyString[j] = stringSplitbyString[j] + " " + string_to_cut[i];
           }
        }
        else if (!stringSplitbyString)
        {
            continue;
        }
        else
        {
            j++;
        }
    }

    return stringSplitbyString;
}

function formatResult(array)
{
    var result;
    for (let i = 0; i < array.length; i++)
    {
        if (!result)
        {
           result = array[i];
        }
        else
        {
            result = result + "\n" + array[i];
        }
    }
    return result;
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length - 1);
nbArg = argList.length;
separator1 = " ";
separator2 = argList[nbArg - 1];
string = argList[0];

// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
listOfWords = splitStringWithSpaces(string, separator1);
finalResult = splitStringWithString(listOfWords, separator2);

// Part 4: Result display
console.log(formatResult(finalResult));