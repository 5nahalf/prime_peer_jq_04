/**
 * Created by ErikJohnson on 5/13/15.
 */
console.log("hi");

$(document).ready(function(){
    $("button").on("click", function(){
        var num = $(this).attr("id");
        console.log(num);
        $("#numbers").append(num);
    });

    $(".equal").on("click", function(){
        var total = document.getElementById('numbers').innerHTML;
        $("#numbers").empty();
        console.log(total);
        var end = eval(total);
        $("#numbers").append(end);

    });
    $(".clear").on("click", function(){
       $("#numbers").empty();
    });



    });