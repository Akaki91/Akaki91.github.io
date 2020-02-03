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