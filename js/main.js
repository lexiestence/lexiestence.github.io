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
    
    $("#sample-textbox").on({
        "focus": function(){
            $("#sample-textbox").css({
                "box-shadow": "0px 0px 5px 5px rgba(255,255,255,0.5)",
                "background-color": "rgba(255,255,255,0.5)",
                "border": "none"
            });
        },
        "blur": function(){
            $("#sample-textbox").css({
                "box-shadow": "none",
                "background-color": "rgba(255,255,255,0)",
                "border-bottom": "solid 1px black"
            });

            $("input").slideUp(150);
            $("h1").slideUp(150);

            typeout("I have been waiting for you, "+$("#sample-textbox").val()+".", "output", "50");
        },
        "input": function(){
            $("#output").text("Hello " + $("#sample-textbox").val());
        }
    })

})