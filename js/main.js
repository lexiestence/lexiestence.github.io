$(document).ready(function(){

    var i = 0
    function typeout(message, target, speed){
        if (i == 0){
            document.getElementById(target).innerHTML += "<br>";
        }
        if (i < message.length){
            document.getElementById(target).innerHTML += message.charAt(i);
            i++;
            setTimeout(function(){typeout(message, target, speed)}, speed);
        }
        else{
            i=0;
        }
    }
    
    $("input").on({
        "focus": function(){
            document.getElementById("sample-textbox").style.boxShadow="0px 0px 5px 5px rgba(255,255,255,0.5)";
            document.getElementById("sample-textbox").style.backgroundColor="rgba(255,255,255,0.5)";
            document.getElementById("sample-textbox").style.border="none";
        },
        "blur": function(){
            document.getElementById("sample-textbox").style.boxShadow="none";
            document.getElementById("sample-textbox").style.backgroundColor="rgba(255,255,255,0";
            document.getElementById("sample-textbox").style.borderBottom="solid 1px black";
            $("input").slideUp(150);
            $("h1").slideUp(150);
            typeout("I have been waiting for you, "+document.getElementById("sample-textbox").value+".", "typeout", "50");
        }

    })

    $("input").on("input", function(){
        document.getElementById("output").innerHTML = "Hello " + document.getElementById("sample-textbox").value;
    })

})