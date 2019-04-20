var equationInitRegex = /^y=/;
var parenthesisRegex = /\(.*\)/;
var multiplicationRegex = /[0-9]x/;

var parenthesisArray = [];
var multiplication = [];

function drawGraph(){

    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    try{
        if(!equationInitRegex.exec(input)) throw "err: No init";
    }
    catch(e){
        displayError(e);
    }

    input = input.replace(equationInitRegex, "");
    
    while(parenthesisRegex.exec(input)){
        parenthesisArray.push(parenthesisRegex.exec(input));
        input = input.replace(parenthesisRegex, "");
    }

    displayError(parenthesisArray);

    function displayError(e){
        output.innerHTML = e;
    }
    
}