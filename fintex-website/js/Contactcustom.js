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
    $('#myForm').submit(function(e){
        e.preventDefault();
        e.target.reset();
        // $('#toast').toggleClass('dNone');
        window.alert('Our team will get in touch with you shortly.')
    })
    // $('#closeBtn').click(function(){
    //     $('#toast').removeClass('dNone')
    // })
  })

