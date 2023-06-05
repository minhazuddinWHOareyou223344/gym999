$(function(){
  var mixer = mixitup('.ourimg');
   AOS.init();
   //baner slider
   $('#baner').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
   });
   $('#testimonial').slick({
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   });
   $('#plan').slick({
    slidesToShow: 5,
    autoplay: true,
   autoplaySpeed: 700,
   prevArrow:"#plans .arrows  span.laftarrows",
   nextArrow:"#plans .arrows  span.rightarrows",
   dots: false,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });
   $('#member').slick({
    slidesToShow: 3,
   autoplay: true,
   autoplaySpeed: 700,
   arrows: false,
   dots: false,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });
 $('#team').slick({
   slidesToShow: 4,
   autoplay: true,
   autoplaySpeed: 700,
   arrows: false,
   dots: false,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
 });
 let navbar = $(".navbar");
  let backToTopBtn = $(".backToTopBtn");
  let number = 10;



  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    console.log(scrTop);
    if (scrTop > 400) {
      navbar.addClass("menuFixed");
    } else {
      navbar.removeClass("menuFixed");
    }

    //*Back to top button view
    if (scrTop > 700) {
      backToTopBtn.fadeIn();
    } else {
      backToTopBtn.fadeOut();
    }
  });
  
})
new VenoBox({
   selector: '.boss',
   share:true,
   spinner:'flow' ,
  
});
