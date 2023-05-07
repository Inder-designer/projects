$('.care-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$('.privacy-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




//   var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

let navlinks = document.querySelectorAll(".nav-item");
navlinks.forEach(a=>{
  a.addEventListener('click',function(){
    navlinks.forEach(a=>a.classList.remove('active'));

    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop")?.remove()
    this.classList.add('active')
    modalToogle.removeAttribute("aria-modal")
    modalToogle.removeAttribute("role")
  })})






  document.getElementById("tgl_btn").addEventListener('click', () => {
    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop").remove()
  })

  document.querySelector('.btn-close').addEventListener('click', () => {
    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop").remove()
  })

  AOS.init();