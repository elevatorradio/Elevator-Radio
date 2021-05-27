var opendoor = false;

$(document).ready(function() {


    $(".door").on("click", function(event) {
        if (opendoor === false) {

            if ($('#mobile-indicator').css('float') == "none") {
                console.log("on-mobile")
                $("#left-door").css("width", "0%");
                $("#right-door").css("width", "0%");
                x = document.querySelectorAll(".title, .logo");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

            } else {
                console.log("open the door")
                $("#left-door").css("width", "25%")
                $("#right-door").css("width", "25%");
            }
            opendoor = true;
        }

        if (opendoor === true) {
            // $(".logo").css("display", "flex")
            document.getElementById("rd-top").innerHTML = "● Thu 27.05.2021<br> 16:00–18:00 CEST";
            //  document.getElementById("phone-top").innerHTML = 'ELEVATOR RADIO - Thu 20.05.2021<br> 16:00–20:00 CEST <img  src="DAE_logo_white.png">;'
            document.getElementById("phone").innerHTML = ' <h1 id=phone-top>ELEVATOR RADIO </h1><br><br>'
        }


    });


})

$(window).resize(adaptsize);

function adaptsize() {
    if (opendoor === true) {
        x = document.querySelectorAll(".title , .logo");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        if ($('#mobile-indicator').css('float') == "none") {

            $("#left-door").css("width", "0%");
            $("#right-door").css("width", "0%");
        }


        if ($('#mobile-indicator').css('float') == "left") {
            console.log("not on mobile")
            $("#left-door").css("width", "25%")
            $("#right-door").css("width", "25%");
            x = document.querySelectorAll(".title");
            $(".logo").css("display", "flex")
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "";
            }
        }
    }
};
