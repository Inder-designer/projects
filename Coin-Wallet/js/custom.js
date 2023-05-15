$(document).ready(function(){
    $('.nav_btn').click(function(){
        $('.side-menu').toggleClass('menu-show')
        $('body').toggleClass('overflow-hidden')
    })
    $('.backdrop').click(function(){
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })
    $('.close_btn').click(function(){
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })
    $('.nav-item').click(function(){
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })

    window.addEventListener("scroll",()=>{
        let scroll = window.SecurityPolicyViolationEvent
        if(scroll>100){
          document.getElementById("header")?.classList.add("header-light")
  
        }
        else{
          document.getElementById("header")?.classList.remove("header-light")
  
        }
    })
})
