function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function scrollit(arg) {
    // location.href = '#' + arg
    let a = '#' + arg
    
    document.querySelector(a).scrollIntoView({
        behavior: 'smooth'
    });
    // window.scrollBy(0, -60)

    let b = document.querySelector('.active')
        if (b) {
            b.classList.remove("active")
        }



    let c = document.querySelector(`.${arg}`)
    c.classList.add('active')
}


if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
    });
}