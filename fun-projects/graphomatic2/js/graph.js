var equationInitRgx = /^y=/;
var parenthesisRgx = /\(.*?\)/;
var exponentRgx = /x\^[0-9]/;
var multiplicateRgx = /([0-9]+\*?x|x\*[0-9]+)/;
var divideXRgx = /x\\[0-9]+/;
var divideByXRgx = /[0-9]+\\x/;
var addRgx = /(x\+[0-9]+|[0-9]+\+x)/;
var subtractXRgx = /[0-9]+-x/;
var subtractFromXRgx = /x-[0-9]+/;

var parenthesisArray = [];
var multiplication = [];

function drawGraph(){

    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    try{
        if(!equationInitRgx.exec(input)) throw "err: No init";
    }
    catch(e){
        displayError(e);
    }

    input = input.replace(equationInitRgx, "");
    
    while(parenthesisRgx.exec(input)){
        parenthesisArray.push(parenthesisRgx.exec(input));
        input = input.replace(parenthesisRgx, "");
    }

    function displayError(e){
        output.innerHTML = e;
    }
    
}