$(document).ready(function(){
    //menu toggle show hide
    $("#menu , .exit-menu").on("click",function(){
        $(".main-menu").toggleClass("active-main-menu");
    });
    $("#to").hide()
    //form
    $("#from").on("change",function(){
      $("#to").show();
      $("#from").hide();
        $(".secondary-nav").toggleClass("secondary-nav-active");
        gsap.to(".main-nav",{
            y:-4,
            background:"red",
            duration:1,
            ease:"smooth"
        })
    })
});