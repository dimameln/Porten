const search = document.getElementById('search');
const bigSearch = document.getElementById('bigSearch');
const input = document.getElementById('input');

//Search
search.addEventListener ('click', () => {
    search.style.display = "none";
    bigSearch.style.display = "inline";
    input.focus();

    input.onkeydown = e => {
        if (e.keyCode == 27) {
            input.blur();
        }
    }

   input.onblur = () => {   
       setTimeout(() => {
        bigSearch.style.display = "";
        search.style.display = "block";
       }, 400); 
      
   };
});

//Modals
const modal = document.querySelector('.modal');
const clocks = document.querySelectorAll('.item');
const modalDialog = document.querySelector('.modal_inner');
const body = document.querySelector('body');

function hideModal() {
    modalDialog.style.transform = 'rotateX(90deg)';
    setTimeout(() => {
        modal.style.display = '';
        body.classList.remove('no-scroll');
    }, 300);
}

function showModal() {
    body.classList.add('no-scroll');
    modal.style.display = 'flex';
    setTimeout(() => {
        modalDialog.style.transform = 'rotateX(0)';
    }, 300);
}

clocks.forEach(item => {
    item.addEventListener('click', showModal)

    window.onkeydown = e => {
        if (e.keyCode == 27) {
            hideModal();
        }
    }
})

const close = document.querySelector('.cancel');

close.addEventListener('click', () => {
    hideModal();
})


modal.addEventListener('click', (event) => {
    const target = event.target;
    const modalInner = target.closest('.modal_inner');

    if (!modalInner) {
        hideModal();
    } 
})

//phone button
const phone = document.querySelector('.phone');
const schedule = document.querySelector('.schedule');
const enter = document.querySelector('.top_header_rigth');

if (document.documentElement.clientWidth < 401) {
        phone.addEventListener('click', () => {
        setTimeout(() => {
            schedule.style.display = getComputedStyle(schedule).display == 'block' ? 'none' : 'block';
            enter.style.display = getComputedStyle(enter).display == 'block' ? 'none' : 'block';
        }, 300);
    }
)};

//burger
const burger = document.querySelector('.burger-btn');
const navLinks = document.querySelectorAll('.nav_links');
const nav = document.querySelector('.header_nav');
const header = document.querySelector('header');

if (document.documentElement.clientWidth < 769) {
    burger.addEventListener('click', () => {
        burger.style.display = 'none';
        nav.style.display = 'flex';
    })
}

if (document.documentElement.clientWidth < 769) {
    window.addEventListener('click', (event) => {
        const target = event.target;
        const headerNav = target.closest('.header_nav');
        const burgerBtn = target.closest('.burger-btn')

        if (!headerNav && !burgerBtn) {
            burger.style.display = 'block';
            nav.style.display = '';
        }
    })
}


// show-more 
const showMore = document.querySelector('.show-more');
const items = document.querySelectorAll('.item.item--na');

showMore.addEventListener('click', () => {
    items.forEach(item => {
        if (item.style.display = 'none') {
            item.style.display = 'block';
            showMore.style.display = 'none';
        }
    })
})










// ----------------AOS---------------

AOS.init({
    // Global settings:
    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });







