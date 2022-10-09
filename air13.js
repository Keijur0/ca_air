// This script will check if the other scripts of this directory are present and test them.

// Functions
function nbArgCheck(param1){
    if(param1 > 0){
        return false;
    }
    return true;
}

async function executeTest(param1, param2){
    command = param1 + " " + param2;
    let testResult = "";
    try{
        testResult = await execProm("node " + command);
    }
    catch(ex){
        testResult = ex;
    }
    return testResult.stdout;
}
async function allTests(){
    await testAir00();
    await testAir01();
    await testAir02();
    await testAir03();
    await testAir04();
    await testAir05();
    await testAir06();
    await testAir07();
    await testAir08();
    await testAir09();
    await testAir10();
    await testAir11();
    await testAir12();
}
function displayResult(param1, param2, param3, param4)
{
    if(param4 == true){
        console.log(param1 + " (" + param2 + "/" + param3 + "): " + "\x1b[38;2;0;255;0msuccess\x1b[0m");
    }
    else{
        console.log(param1 + " (" + param2 + "/" + param3 + "): " + "\x1b[38;2;255;0;0mfailure\x1b[0m");
    }
}
function testingResults(param1, param2){
    if(param1 == param2){
        testSuccess = true;
    }
    else{
        testSuccess = false;
    }
    return testSuccess;
}
async function testAir00(){
    let script = "air00";
    let test1 = "'Bonjour les gars'";
    let test2 = "'Salutations    à     tous    mes       amis'";
    let test3 = "";
    let test4 = "'Je mets' '2 arguments'";
    // Test1
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Bonjour\nles\ngars\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "Salutations\nà\ntous\nmes\namis\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4);
}
async function testAir01(){
    let script = "air01";
    let test1 = "'Crevette magique dans la mer des étoiles' 'la'";
    let test2 = "'Un seul argument'";
    let test3 = "";
    let test4 = "'Je mets' 'trois' 'arguments'";
    // Test1
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Crevette magique dans\nmer des étoiles\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4);    
}
async function testAir02(){
    let script = "air02";
    let test1 = "'Je' 'teste' 'des' 'trucs' ' '";
    let test2 = "'Je' 'teste' 'autre' 'chose' 'encore' ' '";
    let test3 = "";
    let test4 = "'Je' ' '";
    // Test1
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Je teste des trucs\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "Je teste autre chose encore\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "Je\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4);    
}
async function testAir03(){
    let script = "air03";
    let test1 = "1 2 3 4 5 4 3 2 1";
    let test2 = "'bonjour' 'monsieur' 'bonjour'";
    let test3 = "";
    let test4 = "1 2 3 3 2 1";
    // Test1
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "5\n");
        displayResult("air03", 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "monsieur\n");
        displayResult("air03", 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult("air03", 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult("air03", 4, 4, testSuccess);
    });
    await executeTest(script, test4);    
}
async function testAir04(){
    let script = "air04";
    let test1 = "'Hello milady,     bien ou quoi ??'";
    let test2 = "'bboonnjjoouurr   àà ttoouuss!!'";
    let test3 = "";
    let test4 = "'deux' 'arguments'";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Helo milady, bien ou quoi ?\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "bonjour à tous!\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir05(){
    let script = "air05";
    let test1 = "1 2 3 4 5 '+2'";
    let test2 = "10 11 12 20 '-5'";
    let test3 = "";
    let test4 = "1 2 5 7 9";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "3 4 5 6 7\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "5 6 7 15\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir06(){
    let script = "air06";
    let test1 = "'Michel' 'Albert' 'Thérèse' 'Benoit' 't'";
    let test2 = "'Michel' 'Albert' 'Thérèse' 'Benoit' 'a'";
    let test3 = "";
    let test4 = "'Michel' 'Albert' 'Thérèse' 'Benoit' 'e'";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Michel\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "Michel, Thérèse, Benoit\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "No result: character(s) contained in all arguments.\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir07(){
    let script = "air07";
    let test1 = "1 3 4 2";
    let test2 = "10 20 30 40 50 60 70 90 33";
    let test3 = "";
    let test4 = "10";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "1 2 3 4\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "10 20 30 33 40 50 60 70 90\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir08(){
    script = "air08";
    test1 = "10 20 30 fusion 15 25 35";
    test2 = "10 20 30 fusion";
    test3 = "";
    test4 = "fusion 10 20 30";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "10 15 20 25 30 35\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir09(){
    let script = "air09";
    let test1 = "'Michel' 'Albert' 'Thérèse' 'Benoit'";
    let test2 = "10 20 30 40 50";
    let test3 = "";
    let test4 = "Michel";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "Albert, Thérèse, Benoit, Michel\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "20, 30, 40, 50, 10\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir10(){
    let script = "air10";
    let test1 = "'bonjour.txt'";
    let test2 = "'test.txt'";
    let test3 = "";
    let test4 = "'bonjour.txt' '1'";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "bonjour\ntout le monde\n\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir11(){
    let script = "air11";
    let test1 = "0 5";
    let test2 = "% 8";
    let test3 = "";
    let test4 = "= b";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "    0\n   000\n  00000\n 0000000\n000000000\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "       %\n      %%%\n     %%%%%\n    %%%%%%%\n   %%%%%%%%%\n  %%%%%%%%%%%\n %%%%%%%%%%%%%\n%%%%%%%%%%%%%%%\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}
async function testAir12(){
    let script = "air12";
    let test1 = "6 5 4 3 2 1";
    let test2 = "100 60 85 23 45";
    let test3 = "";
    let test4 = "2";
    await executeTest(script, test1).then(result => {
        testSuccess = testingResults (result, "1 2 3 4 5 6\n");
        displayResult(script, 1, 4, testSuccess);
    });
    await executeTest(script, test1);
    // Test2
    executeTest(script, test2).then(result => {
        testSuccess = testingResults (result, "23 45 60 85 100\n");
        displayResult(script, 2, 4, testSuccess);
    });
    await executeTest(script, test2);
    // Test3 (No argument)
    executeTest(script, test3).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 3, 4, testSuccess);
    });
    await executeTest(script, test3);
    // Test4
    executeTest(script, test4).then(result => {
        testSuccess = testingResults (result, "error\n");
        displayResult(script, 4, 4, testSuccess);
    });
    await executeTest(script, test4); 
}

// Part 1: Parsing
argList = process.argv.splice(2, process.argv.length-1);
nbArg = argList.length;
separator = "______________________";
const util = require("util");
const { exec } = require("child_process");
const execProm = util.promisify(exec);

// Part 2: Error management
if(!nbArgCheck){
    console.log("error");
    return;
}

// Part 3: Resolution


// Part 4: Result display
allTests();
