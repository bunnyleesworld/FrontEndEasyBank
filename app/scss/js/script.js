const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger')

    if(header.classList.contains('open')){//closed Hamburger Menu
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            
        })
    }
    else{//Open Hamburger Menu
        header.classList.add('open');
        body.classList.add('noScroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');

        })

    }
})
