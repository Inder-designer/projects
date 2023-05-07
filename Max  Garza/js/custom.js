$(document).ready(function () {
    $('.nav_btn').click(function () {
        $('.side-menu').toggleClass('menu-show')
        $('body').toggleClass('overflow-hidden')
    })
    $('.backdrop').click(function () {
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })
    $('.close_btn').click(function () {
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })
    $('.nav-item').click(function () {
        $('.side-menu').removeClass('menu-show')
        $('body').removeClass('overflow-hidden')
    })

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY
        // console.log("M", scroll);
        if (scroll > 100) {
            document.getElementById("header")?.classList.add("header-light")

        }
        else {
            document.getElementById("header")?.classList.remove("header-light")

        }
    })

    $('.bannerslider').slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });

    $('.metaverse-slider').slick({
        dots: true,
        // vertical: true,
        // verticalSwiping: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });
})


function getActiveId() {


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry, ">>>>>>>>>entry")
            if (entry.isIntersecting) {
                const visibleSectionId = entry.target.getAttribute('id');
                console.log(visibleSectionId, "visibleSectionId");
                // activeId = visibleSectionId;
                const activeTab = document.querySelector(`a[href="#${visibleSectionId}"]`);
                console.log(activeTab, ">>>>>>", `a[href="#${visibleSectionId}]"`)
                const activeTabs = document.querySelectorAll('.page-active');
                activeTabs.forEach(tab => {
                    tab.classList.remove('page-active');
                });
                activeTab.classList.add('page-active');
            }

        });
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}
getActiveId()

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY
    console.log("M",scroll);
    if(scroll>100){
      document.getElementById("header")?.classList.add("header-light")

    }
    else{
      document.getElementById("header")?.classList.remove("header-light")

    }
  })
