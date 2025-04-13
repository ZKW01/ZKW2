

setInterval(show, 500)




function show() {
    console.log($(window).scrollTop());


    if ($(window).scrollTop() <= 650 && $(window).scrollTop() >= 0) {
        $("#cont1").css("opacity", "1")
        $("#cont1").css("transform", "translateY(0)")

    }else{
                $("#cont1").css("opacity", "0")
        $("#cont1").css("transform", "translateY(100px)")
    }


    if ($(window).scrollTop() <= 900 && $(window).scrollTop() >= 0) {
        $("#cont2").css("opacity", "1")
        $("#cont2").css("transform", "translateY(0)")

    }else{
        $("#cont2").css("opacity", "0")
        $("#cont2").css("transform", "translateY(100px)")
    }



    if ($(window).scrollTop() <= 1320 && $(window).scrollTop() >= 410) {
        $("#cont3").css("opacity", "1")
        $("#cont3").css("transform", "translateY(0)")

    }else{
        $("#cont3").css("opacity", "0")
        $("#cont3").css("transform", "translateY(100px)")
    }



    if ($(window).scrollTop() <= 1630 && $(window).scrollTop() >= 680) {
        $("#cont4").css("opacity", "1")
        $("#cont4").css("transform", "translateY(0)")

    }else{
        $("#cont4").css("opacity", "0")
        $("#cont4").css("transform", "translateY(100px)")
    }

    if ($(window).scrollTop() <= 1600 && $(window).scrollTop() >= 680) {
        $("#cont4").css("opacity", "1")
        $("#cont4").css("transform", "translateY(0)")

    }else{
        $("#cont4").css("opacity", "0")
        $("#cont4").css("transform", "translateY(100px)")
    }

    
    if ($(window).scrollTop() <= 1900 && $(window).scrollTop() >= 1200) {
        $("#cont5").css("opacity", "1")
        $("#cont5").css("transform", "translateY(0)")

    }else{
        $("#cont5").css("opacity", "0")
        $("#cont5").css("transform", "translateY(100px)")
    }
  
}



