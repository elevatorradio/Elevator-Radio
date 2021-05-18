var opendoor = false;

$(document).ready(function() {


    $(".door").on("click", function(event) {
        if (opendoor === false) {
            if ($('#mobile-indicator').css('float') == "none") {
                console.log("omobile")
                $("#left-door").css("width", "0%");
                $("#right-door").css("width", "0%");

            } else {
                console.log("open the door")
                $("#left-door").css("width", "25%")
                $("#right-door").css("width", "25%");
            }
            opendoor = true;
        }

        if (opendoor === true) {
            document.getElementById("rd-top").innerHTML = "Thu 20.05.2021<br> 16:00–20:00 CEST";
            document.getElementById("phone-top").innerHTML = "ELEVATOR RADIO - Thu 20.05.2021<br> 16:00–20:00 CEST";
        }


    });


})

$(window).resize(adaptsize);

function adaptsize() {
    if (opendoor === true) {

        if ($('#mobile-indicator').css('float') == "none") {

            $("#left-door").css("width", "0%");
            $("#right-door").css("width", "0%");
        }


        if ($('#mobile-indicator').css('float') == "left") {
            $("#left-door").css("width", "25%")
            $("#right-door").css("width", "25%");
        }
    }
};