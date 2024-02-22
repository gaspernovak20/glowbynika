const gallery_container = document.querySelector('.gallery')
const gallery = document.querySelector('.gallery_track');
const slides = Array.from(gallery.children);

const nextButton = document.querySelector('.gallery_button_right');
const prevButton = document.querySelector('.gallery_button_left');

// const dotsNav = document.querySelector('.gallery_nav');
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//move slide
const moveToSlide = (gallery, currenSlide, targetSlide) => {
    gallery.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currenSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}


//when i click left, move to the left
prevButton.addEventListener('click', e => {
    const currenSlide = gallery.querySelector('.current_slide');
    const prevSlide = currenSlide.previousElementSibling;

    //move to next slide
    moveToSlide(gallery, currenSlide, prevSlide);
})


//when i click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currenSlide = gallery.querySelector('.current_slide');
    const nextSlide = currenSlide.nextElementSibling;

    //move to next slide
    moveToSlide(gallery, currenSlide, nextSlide);
})

// Gallery Mobile

const gallery_container_mobile = document.querySelector('.gallery_mobile')
const gallery_mobile = document.querySelector('.gallery_track_mobile');
const slides_mobile = Array.from(gallery_mobile.children);

const nextButton_mobile = document.querySelector('.gallery_button_right_mobile');
const prevButton_mobile = document.querySelector('.gallery_button_left_mobile');

// const dotsNav = document.querySelector('.gallery_nav');
// const dots = Array.from(dotsNav.children);

const slideWidth_mobile = slides_mobile[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePositionMobile = (slide, index) => {
    slide.style.left = slideWidth_mobile * index + 'px';
};
slides_mobile.forEach(setSlidePositionMobile);

//move slide
const moveToSlideMobile = (galleryMobile, currenSlideMobile, targetSlideMobile) => {
    galleryMobile.style.transform = 'translateX(-' + targetSlideMobile.style.left + ')';
    currenSlideMobile.classList.remove('current_slide_mobile');
    targetSlideMobile.classList.add('current_slide_mobile');
}


//when i click left, move to the left
prevButton_mobile.addEventListener('click', e => {
    const currenSlideMobile = gallery_mobile.querySelector('.current_slide_mobile');
    const prevSlideMobile = currenSlideMobile.previousElementSibling;

    //move to next slide
    moveToSlideMobile(gallery_mobile, currenSlideMobile, prevSlideMobile);
})


//when i click right, move slides to the right
nextButton_mobile.addEventListener('click', e => {
    const currenSlideMobile = gallery_mobile.querySelector('.current_slide_mobile');
    const nextSlideMobile = currenSlideMobile.nextElementSibling;

    //move to next slide
    moveToSlideMobile(gallery_mobile, currenSlideMobile, nextSlideMobile);
})




// Navigacija Storitev

const nav_bar = document.querySelector('.storitve_btn');

const storitveOpcije = document.querySelector('.stritve_opcije');
const storitve = Array.from(nav_bar.children);

const uvodStoritve = document.querySelector('.uvod_storitve');
const uvodStoritveArray = Array.from(uvodStoritve.children);

const footerStoritve = document.querySelector('.footer_storitve-var');
const footerStoritveArray = Array.from(footerStoritve.children);



const changeStoritev = (targetStoritev, storitveArray) => {


    if (!targetStoritev) return;

    const currentStoritev = nav_bar.querySelector('.current-storitev');
    const currentStoritevOkno = storitveOpcije.querySelector('.current-storitev-okno');

    const indexTargetStoritevOkno = storitveArray.findIndex(storitev => storitev.firstChild === targetStoritev);
    const targetStoritevOkno = storitveOpcije.children[indexTargetStoritevOkno];

    console.log(targetStoritev);
    console.log(uvodStoritveArray);

    targetStoritev = storitve[indexTargetStoritevOkno].children[0];

    currentStoritev.classList.remove('current-storitev');
    currentStoritevOkno.classList.remove('current-storitev-okno')
    currentStoritevOkno.style.display = 'none';

    targetStoritev.classList.add('current-storitev');
    targetStoritevOkno.classList.add('current-storitev-okno');
    targetStoritevOkno.style.display = 'grid';
}

uvodStoritve.addEventListener('click', e => {
    var targetStoritev = e.target.closest('button');

    changeStoritev(targetStoritev, uvodStoritveArray);

})

nav_bar.addEventListener('click', e => {

    var targetStoritev = e.target.closest('button');

    changeStoritev(targetStoritev, storitve);

})




footerStoritve.addEventListener('click', e => {
    var targetStoritev = e.target.closest('a');

    if (!targetStoritev) return;

    const currentStoritev = nav_bar.querySelector('.current-storitev');
    const currentStoritevOkno = storitveOpcije.querySelector('.current-storitev-okno');


    const indexTargetStoritevOkno = footerStoritveArray.findIndex(storitev => storitev === targetStoritev);
    const targetStoritevOkno = storitveOpcije.children[indexTargetStoritevOkno];

    console.log(targetStoritev);
    console.log(footerStoritveArray);

    targetStoritev = storitve[indexTargetStoritevOkno].children[0];

    currentStoritev.classList.remove('current-storitev');
    currentStoritevOkno.classList.remove('current-storitev-okno')
    currentStoritevOkno.style.display = 'none';

    targetStoritev.classList.add('current-storitev');
    targetStoritevOkno.classList.add('current-storitev-okno');
    targetStoritevOkno.style.display = 'grid';

})


// const storitveVecBtn = document.querySelector('.storitve_vec-btn');

// storitveVecBtn.addEventListener('click', e =>{
//     console.log(storitveVecBtn);
// })

function toggleDisplay(id) {

    var x = document.getElementById(id);
    var btn = document.querySelector('.' + id);
    if (x.style.display != "block") {
        x.style.display = "block";
        btn.style.display = "none";
    } else {
        x.style.display = "none";

    }
    console.log(x.style.display);
}



const headerBars = document.querySelector('.header_bars');
const headerNavMenu = document.querySelector('.header_nav_menu');
const headerMobile = document.querySelector('.header_mobile');

headerBars.addEventListener("click" ,  () => {
    headerNavMenu.classList.toggle("active");
    headerMobile.classList.toggle("active");
})

document.querySelectorAll(".header_nav_links").forEach(e =>
    e.addEventListener("click",()=>{
        headerNavMenu.classList.remove("active");
        headerMobile.classList.remove("active");
    })
)