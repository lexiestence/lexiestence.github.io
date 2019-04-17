var equationInitRegex = /^y=/;
var parenthesisRegex = /\(.*\)/;


function drawGraph(){

    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    try{
        if(!equationInitRegex.exec(input)) throw "err: No init";
    }
    catch(e){
        displayError(e);
    }

    function displayError(e){
        output.innerHTML = e;
    }
    
}