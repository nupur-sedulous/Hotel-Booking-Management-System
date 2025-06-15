$(document).ready(function () {
  let currentIndex = 0;
  const testimonials = $(".testimonial-item");
  const dots = $(".dot");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    
    testimonials.hide();
    
    testimonials.eq(index).show();
    
    dots.removeClass("active");
    dots.eq(index).addClass("active");
  }

  
showTestimonial(currentIndex);

 
setInterval(function () {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}, 5000);

  // On click of a dot, change the testimonial
dots.on("click", function () {
    const index = $(this).data("slide");
    currentIndex = index;
    showTestimonial(currentIndex);
});
});


