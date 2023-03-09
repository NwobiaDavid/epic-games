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


 //create carousel with captions using tailwind and jquery?

//  let slideIndex = 1;
// showSlides(slideIndex);

// // Thumbnail image controls
// function currentSlide(n) {
//    showSlides(slideIndex = n);
//  }

//  function showSlides(n) {
//    let i;
//    let slides = document.getElementsByClassName("mySlides");
//    let dots = document.getElementsByClassName("dot");

//    if (n > slides.length) {slideIndex = 1}
//    if (n < 1) {slideIndex = slides.length}

//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "flex";
//     dots[slideIndex-1].className += " active";
//   }


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
