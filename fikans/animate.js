$(document).ready(function(){
    //menu toggle show hide
    $("#menu , .exit-menu").on("click",function(){
        $(".main-menu").toggleClass("active-main-menu");
        
    });
    
    //forms
    //from
    $(".secondary-nav").hide();
    $("#from").on("change",function(){
        $(".secondary-nav").toggle(100);
    })
    //hide the nav when user clicks the from form
    $("#from").on("click",function(){
        $(".menu").css({
            opacity:0,
        })
    })
  //action on the to form
  $("#to").on("change",function(){
      //something happens on change tob form
      $(".secondary-nav").toggle(100);
      ///shows the hidden menu again
      gsap.to(".menu",{
          opacity:1,
          duration:1,
      })
  })
});