//menu toggler
$("#menu-btn , #exit-menu").on("click",function(){
  $(".main-menu").toggleClass("menu-active");
});
//hiding the to form
$("#to").hide();
//the from functionality
//hides the logo
$("#from").on("click",function(){
  $(".menu-logo").css({opacity:0})
})
$("#from").on("change",function(){
     var from = $("#from").val();
     $("#at").text(from);
     $("#from").hide();
     $("#to").slideDown(300);
})
//the to functionality
$("#to").on("change",function(){
     var to = $("#to").val();
     $("#dest").text(to);
     //reverses eveything
     $("#from").slideDown(300);
     $("#to").slideUp(200);
     $(".menu-logo").css({opacity:1})
})