



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



  // Scroll Active Menu 
  const li = document.querySelectorAll(".nav-item")
  const sec = document.querySelectorAll("section")
  
  
  function activemenu(){
    let len = sec.length;
    while(--len && window.scrollY + 80 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
  }
  activemenu();
  window.addEventListener("scroll", activemenu);


  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("header").addClass("header-dark");
      }
  
      else{
        $("header").removeClass("header-dark");
      }
    })
  })

  
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
  ]
});

  AOS.init()