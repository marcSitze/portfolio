$(document).ready(function() {
    $(".navbar-toggler").click(function() {
      $(".navbar-toggler").toggleClass("change");
    });
  
    //window scroll
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
  
      if (position >= 149) {
        $(".navbar").addClass("navbar-background");
        $(".navbar").addClass("fixed-top");
        $("#back-to-top").fadeIn();
      } else {
        $(".navbar").removeClass("navbar-background");
        $(".navbar").removeClass("fixed-top");
        $("#back-to-top").fadeOut();
      }
    });
    //smooth scroll
    $(".nav-item a").click(function(link) {
      link.preventDefault();
      let target = $(this).attr("href");
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top
          },
          1800
        );
      $(".navbar-toggler").toggleClass("change");
      $("#myNavbar").collapse("hide");
    });
  
    // Isotope
    let $grid = $(".grid").isotope({
      // options
    });
    // filter items on button click
    $(".filter-button-group").on("click", "button", function() {
      let filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue
      });
    });
  });
  
  // responsive tabs that is changes depending on the page and position
$(function(){
  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    const sections = $('section').attr('id');
    // console.log($(this));
  });
});