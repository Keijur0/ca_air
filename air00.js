// This script takes 1 string as argument, and returns it split by spaces

// Functions
function nbArgCheck(number) 
{
    if(nbArg !== 1)
    {
        return false;
    }
    return true;
}

function splitString(string_to_cut, separator)
{
    arrayOfWords = [];
    j = 0;
    for (let i = 0; i < string_to_cut.length; i++)
    {
        
        if (string_to_cut[i] !== separator)
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
argList = process.argv.splice(2);
nbArg = argList.length;
separator = " ";
string = argList[0];

// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
listOfWords = splitString(string, separator);

// Part 4: Result display
console.log(formatResult(listOfWords));