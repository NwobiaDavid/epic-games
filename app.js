$(document).ready(
   ()=>{
      alert("ready");
   }
)

$("#responsive-toggle").on("click",()=>{
   
//   if( $("#responsive-toggle").attr("class").includes("flex")){
//    $("#responsive-toggle").toggleClass("flex");
//    $("#responsive-toggle").toggleClass("hidden");
//    $("#ex").toggleClass("flex");
//    $("#ex").toggleClass("hidden");
//   }else $("#responsive-toggle").addClass("flex");
$("#responsive-toggle").toggleClass("flex");
$("#responsive-toggle").toggleClass("hidden");
$("#ex").toggleClass("hidden");
$("#ex").toggleClass("flex");

});


$("#responsive-toggle").on("click", function () {
   $("#side-bar").toggleClass("flex");
   // $("#side-bar").animate({ right: "0" }, 500);
   // console.log("clicked");
 });

$("#ex").on("click",()=>{
   $("#responsive-toggle").toggleClass("flex");
   $("#responsive-toggle").toggleClass("hidden");
   $("#ex").toggleClass("hidden");
   $("#ex").toggleClass("flex");
});

 $("#ex").on("click", function () {
   $("#side-bar").toggleClass("flex");
   // $("#side-bar").fadeOut();
   // $("#side-bar").animate({ right: "-100%" }, 500);
 });