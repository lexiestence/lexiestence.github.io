$(document).ready(function(){

    
    
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

            typeoutJqueryBeta("I have been waiting for you, "+$("#sample-textbox").val()+".", "typeout", "5000");
        },
        "input": function(){
            $("#output").text("Hello " + $("#sample-textbox").val());
        }
    })

}) 