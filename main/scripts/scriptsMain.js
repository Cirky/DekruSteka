console.clear();
const MAX_POS = 90;
var position = 0;
const pagePositions = [0, 16, 31, 61];
const tlL = document.getElementById('tlL');
const pageColors = ['slategrey','deepskyblue', 'lightseagreen', 'black'];
var headcard = $('.headcard');
var mainNaslov = $('#mainNaslov');

gsap.set(".stran", {autoAlpha: 1, xPercent:0});

let pageTooltips = [];
for(let i = 0; i < 4; i++) {
    pageTooltips[i] = $('#stran' + (i + 1) + 'Tooltip');
}

let loaded = -1;

var slides = $(".stran"),
    activeSlide = $(".stran.active"),
    moveSlideTL = gsap.timeline();
    // lines = $('h1');

// individual animations per slide ======

const allSlides = [].slice.call(slides);
let animations = [];


animations[2] = gsap.timeline({});

animations[3] = gsap.timeline({});

// ===========================
// Box animations
// let leftBoxAnimations = [];
// let rightBoxAnimations = [];
// for(let i = 0; i < 2; i++) {
//     leftBoxAnimations[i] = gsap.timeline({})
//         .from('#slide0' + (i + 1) + ' .boxLeft', {y:-30, autoAlpha:0, duration:1, delay:0.05}).pause();
//     rightBoxAnimations[i] = gsap.timeline({})
//         .from('#slide0' + (i + 1) + ' .boxRight', {y:-30, autoAlpha:0, duration:1, delay:0.05}).pause();
// }
/////////////////////////
// Animations for page 1
////////////////////////
let page1AnimationSlideIn = gsap.timeline({})
    .from("#slide01 .display1", {opacity:0, duration:0.75, delay:0.05})
    .from("#logotip h3", {opacity:0, duration:1})
    .from("#logotip #standardnaVizitka", {opacity:0, duration:1}, '-=1')
    .from("#logotip p", {opacity:0,y: -100, duration:0.5},  '-=0.1')
    .pause();

animations[0] = page1AnimationSlideIn;

// const allDisplay1Slides = [].slice.call( $('.display1slide'));
// let display1Transition = false;
    // .from("#logoImg", {opacity: 0, ease: "none", duration:2}, 1.5);
// let display1CurrentSlide = 0;

// function display1ChangeSlide(toSlide) {
//     if (display1Transition || page1AnimationSlideIn.isActive() || display1CurrentSlide === toSlide)
//         return;
//     display1Transition = true;
//     moveToDisplay1Slide(display1CurrentSlide, toSlide);
// }

// const stVizitk= $('.vizitkaGalery').length;

// function moveToDisplay1Slide(slideFrom, slideTo) {
//     display1CurrentSlide = slideTo;
//     console.log('Display1 from' + slideFrom + ' to ' + slideTo);
//     let slideFromObject = slides.eq(slideFrom);
//     let slideToObject = slides.eq(slideTo);
//
//     if (slideTo === 1) {
//         let animation = gsap.timeline({onComplete: display1TransitionComplete})
//             .to("#logotip p", {scale: 0, duration:0.3})
//             .to("#logotip h3", {opacity:0, duration:0.3})
//             .to(".logoImgContainer", {opacity:0, duration:0.3}, 0)
//             .to(".display1slide1", {opacity: 0, duration: 0.3})
//             .to("#display1slide2", {opacity: 1, duration: 0.3}, 0.6)
//             .to(".vizitkaGalery", {opacity: 1, duration: 0.2, ease: "linear", stagger: 0.2} )
//         $('.display1slide1').removeClass('forward');
//         $('#display1slide2').addClass('forward');
//     } else {
//         let animation = gsap.timeline({onComplete: display1TransitionComplete})
//             .to(".vizitkaGalery", {opacity: 0, duration: 0.3}, 0)
//             .to("#display1slide2", {opacity: 0, duration: 0.3})
//             .to(".display1slide1", {opacity: 1, duration: 0.3})
//             .to("#logotip h3", {opacity:1, duration:0.3})
//             .to("#logotip p", {scale: 1, duration:0.3})
//             .to(".logoImgContainer", {opacity:1, duration:0.3}, 0.6);
//         $('.display1slide1').addClass('forward');
//         $('#display1slide2').removeClass('forward');
//     }
// }

// var vizitke = [
//     'img/vizitke/VizitkaU1.png',
//     'img/vizitke/VizitkaU2.png',
//     'img/vizitke/VizitkaU3.png',
//     'img/vizitke/VizitkaU4.png',
//     'img/vizitke/VizitkaM1.png',
//     'img/vizitke/VizitkaM2.png',
//     'img/vizitke/VizitkaM3.png',
//     'img/vizitke/VizitkaM4.png',
// ];

// function initVizitke() {
//     let corousel = $('#vizitkaP1 .carousel-inner');
    // for (let i = 0; i < vizitke.length; i++) {
    //     let cDiv = $('<div class="carousel-item" style="cursor: zoom-in">');
    //     if (i === 0)
    //         cDiv.addClass('active');
    //     cDiv.append('<img class="card-img-top" src="' + vizitke[i] + '" alt="slide">');
    //     cDiv.attr('onclick', 'showModal("' + vizitke[i] + '")');
    //     corousel.append(cDiv);
    //     // GALERIJA
    //     // let div = $('<div></div>');
    //     // div.addClass('col-4 col-xl-auto vizitkaGalery');
    //     // div.attr('onclick', 'showModal("' + vizitka + '")');
    //     // let img = $(`<img class="vizitkaItem" src="${vizitka}" alt="Vizitka">`);
    //     // div.append(img);
    //     // $('#stran1VizitkeGalery').append(div);
    //     //
    // }
// }

function showModal(src) {
    const imgModal = $("#modalVizitka");
    imgModal.attr('src', src);
    imgModal.on('load', function() {
        $('.md-modal').addClass('md-show');
        headcard.addClass('invisible');
    });

}

function hideModal() {
    $('.md-modal').removeClass('md-show');
    headcard.removeClass('invisible')
}

/////////////////////////
// Animations for page 2
/////////////////////////

animations[1] = gsap.timeline({onStart: showStran2MondrianShadow, onComplete: showStran2OnComplete} )
    .from('.stran2LineSvgHor', {xPercent:-200, duration: 2, opacity: 1, stagger: 0.3}, 0)
    .from('.stran2LineSvgVer', {yPercent:-200, duration: 2, opacity: 1, stagger: 0.3}, 0.3)
    .from('.stran2RectSvg', {duration: 2, opacity: 0, stagger: 0.1}, 0.6)
    .from('#stran2LineGalleryTop', {xPercent:-100, duration: 1.5, ease: "power1.in"}, 2)
    .from('#stran2LineGalleryBottom', {xPercent:-100, duration: 1.5, ease: "power1.in"}, 3.5)
    .to('#stran2LineGalleryRightAnim', {opacity: 1, duration: 0}, 3.8)
    .from('#stran2LineGalleryRightAnim', {left:0, duration: 1.5, ease: "power1.in"}, 3.8)
    .to('#stran2GalerijaWhite', {xPercent:100, duration: 1.5, ease: "power1.in"}, 3.8)
    .to('#stran2GalerijaWhite', {opacity: 0, duration: 0, ease: "power1.in"}, 3.8 + 1.5)
    .to('.stran2LineGallery', {opacity: 0, duration: 0.5 }, 5.3)
    .pause();

function showStran2MondrianShadow () {
    $('#stran2GalerijaInner').addClass('shadow');
    $('#stran2Mondrian').addClass('shadow');

}

function showStran2OnComplete() {
    gumbStran2Galerija(3);
}

function onRectEnter(element) {
    let jqrElement = $(element);
    jqrElement.find('.stran2Rect').addClass('hide');
    jqrElement.find('.stran2RectText').addClass('hide');
    jqrElement.find('.stran2RectGif').addClass('show');
    jqrElement.find('.stran2RectGifWrap').addClass('show');
}

function onRectLeave(element) {
    let jqrElement = $(element);
    jqrElement.find('.stran2Rect').removeClass('hide');
    jqrElement.find('.stran2RectText').removeClass('hide');
    jqrElement.find('.stran2RectGif').removeClass('show');
    jqrElement.find('.stran2RectGifWrap').removeClass('show');
}

var stran2GifGallery = [
    'analogne.gif',
    'komplement.gif',
    'Triada.gif',
    'Ton.gif',
    'svetlost.gif',
    'nasicenost.gif',
    'temperatura.gif'
];

var stran2AttrTitles = [
    'Analognost',
    'Komplementarnost',
    'Triada',
    'Ton (Hue)',
    'Svetlost (Lightness)',
    'Nasičenost (Saturation)',
    'Temperatura'
];

var stran2AttrDesc = [
    'Analogne barve, so barve ki so v barvnem krogu znotraj kota 120°.',

    'Komplementarni barvi sta si v barvnem krogu 180° narazen.',

    'Tri barve, ki so v barvnem krogu po 120° narazen.',

    'Barvnost je lastnost barve, s katero razlikujemo barvo od ' +
    'barve in se odraža v njenem imenu: rdeča, zelena, modra, ' +
    'vijolična, rumena, rumeno-zelena, modro-zelena',

    'Pomeni relativno barvno svetlost, ki sega od temnega z 0% ' +
    'do svetlega s 100%, pri čemer ima čista barva vrednost 50% ' +
    'svetlosti.',

    'Lastnost vizualnega dojemanja barv, s katero se kakšna barva ' +
    'razlikuje od enako svetle nevtralne oz. sive barve.',

    'Modra barva in barve z visoko vsebnostjo modre barve so hladne barve ' +
    '(modra, zelena, vijolična). Rumena, rdeča in oranžna so tople barve.'
];



function gumbStran2Galerija(type) {
    $(".stran2GalerijaGumb.active")
        .removeClass('active')
        .attr('aria-pressed', 'false');
    let gumb = $(".stran2GalerijaGumb").eq( type );
    gumb.addClass('active');
    gumb.attr('aria-pressed', 'true');

    // gumb.button('toggle')

    let img = $('#stran2GalerijaSlika');
    $('#stran2AttrTitle').text(stran2AttrTitles[type]);
    $('#stran2AttrDesc').text(stran2AttrDesc[type]);
    img.attr('src', 'img/barveGIF/' + stran2GifGallery[type]);

}

/////////////////////////
// Animations for page 3
////////////////////////
let page3ColumnAnimation;
let selectedPage = false;

function showBackButton(column) {
    column.find('.stran3BackButton').addClass('show');
}

function expandProject(index) {
    if (page3ColumnAnimation !== undefined && page3ColumnAnimation.isActive())
        return;
    if ($('.projectColumn.columnActive').length > 0)
        return;
    let forwards = $('.projectColumn.forward');
    for(let element of forwards) {
        element.classList.remove('forward');
    }
    let columnName = '#projectColumn' + index;
    let column = $(columnName);
    if (column.hasClass('columnActive'))
        return;
    column.addClass('forward');
    column.addClass('columnActive');
    column.removeClass('columnHover');
    column.addClass('w-100');
    // let text = $('#projectColumn' + index + ' .columnText');
    // text.attr('onclick', 'hideProject('+index+')');

    page3ColumnAnimation = gsap.timeline({onComplete: showBackButton, onCompleteParams: [column]})
         .to(columnName + ' .columnImage', {opacity: 1, duration: 0.3, stagger: 0.3}, 0.3);
    // column.removeClass()

    if (index === 2) {
        $(columnName + ' .columnCarousel').removeClass('hide');
    }
    else if (index === 3) {
        // $(columnName + ' .loading').removeClass('hide');
        column.find('.avtorjiSpletnihStrani').addClass('show');
        setTimeout(function(){
            if (selectedPage)
                return;
            $(columnName + ' .embed-responsive-item').attr('src', 'https://green.fri.uni-lj.si/oo2020/p1/Projekt3_RokMiklavcic_PrimozSvet_UNI/views/');
            // $(columnName + ' .embed-responsive-item').attr('src', '../p1/Projekt3_Lan_Zukanovic_UNI/index.html');
        }, 400);

    }
    else if (index === 5 || index === 7) {
        $(columnName + ' .columnCarouselVideo').removeClass('hide');
    }
}
function zamenjajStran(avtor){
    selectedPage = true;
    let columnName = '#projectColumn3';
    // $(columnName + ' .embed-responsive-item').off('load');
    gsap.from(columnName + ' .embed-responsive', {opacity: 0, duration: 0.5});
    if(avtor === 1){
        $(columnName + ' .embed-responsive-item').attr('src', 'https://green.fri.uni-lj.si/oo2020/p1/Projekt3_RokMiklavcic_PrimozSvet_UNI/views/');
    }
    else if(avtor === 2){
        let element = $(columnName + ' .embed-responsive-item');
        // element.on('load', function () {
        //     let as = element.contents().find('a.nav-link[href^="#"]:not([href="#!"])');
        //     console.log(as);
        //     as.click(function(event){
        //         console.log("čača");
        //         // element.get(0).contentWindow.scrollTo($(this).attr('href'));
        //         console.log($(this).attr('href'));
        //         console.log(element.contents().find($(this).attr('href')));
        //         // element.contents().find($(this).attr('href')).get(0).scrollIntoView();
        //         // event.preventDefault();
        //     });
        // });
        // element.attr('src', '../p1/Projekt3_Lan_Zukanovic_UNI/index.html');
        $(columnName + ' .embed-responsive-item').attr('src', 'https://green.fri.uni-lj.si/oo2020/p1/Projekt3_Lan_Zukanovic_UNI/');
    }
    else if(avtor === 3){
        $(columnName + ' .embed-responsive-item').attr('src', 'https://green.fri.uni-lj.si/oo2020/p1/Projekt3_Eva_Bones_UNI/aqua/');
    }
}

function hideProject(index) {
    if (page3ColumnAnimation !== undefined && page3ColumnAnimation.isActive())
        return;
    let columnName = '#projectColumn' + index;
    let column = $(columnName);
    if (!column.hasClass('columnActive'))
        return;
    selectedPage = false;
    page3ColumnAnimation = gsap.timeline({})
        .to(columnName + ' .columnImage', {opacity: 0, duration: 0.3 }, 0);

    column.removeClass('columnActive');
    column.removeClass('w-100');
    // let text = $('#projectColumn' + index + ' .columnText');
    // text.attr('onclick', 'expandProject('+index+')');
    // column.removeClass()

    column.find('.stran3BackButton').removeClass('show');
    let videos = column.find('video');
    for(let i = 0; i < videos.length; i++) {
        if (!videos[i].paused)
            videos[i].pause();
    }
    if (index === 2) {
        $(columnName + ' .columnCarousel').addClass('hide');
    }
    else if (index === 3) {
        column.find('.avtorjiSpletnihStrani').removeClass('show');
        $(columnName + ' .embed-responsive-item').removeAttr('src');
    }
    else if (index === 5 || index === 7 ) {
        $(columnName + ' .columnCarouselVideo').addClass('hide');
    }
}

function onHoverEnter(element) {
    // animationsStran3[index - 1].play();
    if (!element.classList.contains('columnActive'))
        element.classList.add('columnHover');
}

function onHoverLeave(element) {
    element.classList.remove('columnHover');
}

function setPause() {
    $('#video-carousel').on('slide.bs.carousel', function (event) {
        $('#video-carousel .carousel-inner video').get(event.from).pause();
    });
}

function setAutoplay() {
    $('#column2carousel').on('slide.bs.carousel', function (event) {
        if (event.to !== 7) {
            return;
        }
        $('#column2carousel .carousel-inner video').get(0).play();
    });
}

function column1viewSwitch(input) {
    // console.log(input.checked)
    input.disabled = true;
    if (!input.checked) {
        $('#column1carousel').carousel('prev');
        $('#projectColumn1').removeClass('parlament');
        $('#projectColumn1 .column1switch').removeClass('parlament');
    }
    else {
        $('#column1carousel').carousel('next');
        $('#column1NezaVideo').get(0).pause();
        $('#projectColumn1').addClass('parlament');
        $('#projectColumn1 .column1switch').addClass('parlament');
    }
    setTimeout(function(){input.disabled = false}, 1000);

}

// gallery
// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
// }

/////////////////////////
// Animations for page 4
////////////////////////

function onStran4NavEnter (element) {
    $(element + " .stran4ElementOverlay").addClass("hide")
}

function onStran4NavLeave (element) {
    $(element + " .stran4ElementOverlay").removeClass("hide")
}

function onStran4ElemClick (element) {
    $('#slide04 .forward').removeClass('forward');
    $(element + ".stran4Element").addClass("fullscreen forward");
    $("#stran4BackButton").addClass("show");
    $("#slide4NavMenu").addClass("hide");
    $(element + " .stran4ElementOverlay").addClass("disable");
    $('.headcard.hideNav4').addClass('disable');
}

function onStran4BackClick () {
    $(".fullscreen").removeClass("fullscreen");
    $("#stran4BackButton").removeClass("show");
    $("#slide4NavMenu").removeClass("hide");
    $(".stran4ElementOverlay.disable").removeClass("disable");
    $('.headcard.hideNav4.disable').removeClass('disable');
}


//==============================


function setProgress() {
    tlL.setAttribute("x2", Math.floor(position/MAX_POS * 100) + '%');
}

function onMouseWheel(event) {
    if (moveSlideTL.isActive()) {
        return;
    }
    if (moveSlideTL.isActive() || (slides.index($(".stran.active")) === 3 && loaded < 4 && loaded > -1))
        return;
    //Normalize event wheel delta
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;
    delta =  (delta > 0) ? 1 : -1;
    position -= delta;
    if (position < 0) {
        position = 0;
    } else if (position > MAX_POS) {
        position = MAX_POS;
    }
    let slideTo;
    let slideToIndex = positionMapper(position);
    if (slideToIndex === 3 && headcard.hasClass('hideNav4') && !headcard.is(":hover")) {
        headcard.removeClass('hideNav4');
        setTimeout(function(){
            if (positionMapper(position) === 3)
            headcard.addClass('hideNav4');
            }, 1000);
    }
    var slideFrom = $(".stran.active");
    var sectionToIndex = slides.index(slideFrom);
    if (slideToIndex !== sectionToIndex) {
        slideTo = slides.eq(slideToIndex);
        moveToSlide(slideFrom, slideTo);
    }
    setProgress();
}

function positionMapper (position) {
    if (position < pagePositions[1])
        return 0;
    if (position < pagePositions[2])
        return 1;
    if (position < pagePositions[3])
        return 2;
    return 3;
}

function tooltipClick (slideToIndex) {
    if(!moveSlideTL.isActive()) {
        let	slideFrom = $(".stran.active");
        let slideTo = slides.eq(slideToIndex);
        let from = slides.index(slideFrom);
        let to = slides.index(slideTo);
        if (from === to && from === 2) {
            let active = $('.projectColumn.columnActive');
            if (active.length < 1)
                return;
            hideProject(parseInt(active.get(0).id.slice(-1)));
        }
        else if (from === to && from === 3) {
            onStran4BackClick();
        }
        else if (from === to || moveSlideTL.isActive() || (from === 3 && loaded < 4 && loaded > -1))
            return;
        position = pagePositions[slideToIndex];
        setProgress();
        moveToSlide(slideFrom, slideTo);
    }
}

function moveToSlide(slideFrom, slideTo) {
    let from = slides.index(slideFrom);
    let to = slides.index(slideTo);
    console.log(loaded);
    if (from === to || moveSlideTL.isActive() || (from === 3 && loaded < 4 && loaded > -1))
        return;
    if (to === 3) {
        hideNavigation4();
    } else if (to === 2) {
        hideNavigation();
    } else if (to < 2 && from > 1) {
        showNavigation();
    }
    pageTooltips[from].removeClass('activeStran');
    pageTooltips[to].addClass('activeStran');
    tlL.style.stroke = pageColors[to];

    if(from < to) { // vorwärts

        moveSlideTL = gsap.timeline({onComplete: setActiveSlide, onCompleteParams: [slideTo, slideFrom]})
            .to(slideTo, {xPercent:-100, duration:0.8, className: "stran active"})
            .to(slideFrom, {xPercent:-200, duration:0.8, className: "stran"},0)
            .set(slideFrom, {xPercent:0})

    } else {

        moveSlideTL = gsap.timeline({onComplete: setActiveSlide, onCompleteParams: [slideTo, slideFrom]})
            .set(slideTo, {xPercent:-200, className: "stran active"})
            .to(slideTo, {xPercent:-100, duration:0.8})
            .to(slideFrom, {xPercent:0, duration:0.8, className: "stran"},0)
    }
}

function hideNavigation () {
    mainNaslov.addClass("hideNav");
    headcard.addClass("hideNav");
    headcard.removeClass("hideNav4");
}

function hideNavigation4 () {
    mainNaslov.addClass("hideNav");
    headcard.addClass("hideNav");
    headcard.addClass("hideNav4");
}

function showNavigation () {
    mainNaslov.removeClass("hideNav");
    headcard.removeClass("hideNav");
    headcard.removeClass("hideNav4");
}


const slide4 = $('#slide4main');
const upperLeft = slide4.find('#stran4UpperLeft .stran4ElementInner');
const upperRight = slide4.find('#stran4UpperRight .stran4ElementInner');
const lowerLeft = slide4.find('#stran4LowerLeft .stran4ElementInner');
const lowerRight = slide4.find('#stran4LowerRight .stran4ElementInner');
const progress = slide4.parent().find('.progress-bar');

function onPage4Load() {
    if (loaded !== -1){
        loaded++;
        progress.css("width", (loaded * 25) + "%");
        progress.attr("aria-valuenow", loaded * 25);
    }
    if (loaded >= 4) {
        console.log("doneAll");
        slide4.parent().find('.loading').addClass('hide');
        slide4.addClass('show');
    }
}

let timeout;
function setupSlide4() {
    loaded = 0;

    upperLeft.on('load', function () {
        console.log("Loaded 1");
        onPage4Load();
    });

    upperRight.on('load', function () {
        console.log("Loaded 2");
        onPage4Load();
    });

    lowerLeft.on('load', function () {
        console.log("Loaded 3");
        onPage4Load();
    });

    lowerRight.on('load', function () {
        console.log("Loaded 4");
        onPage4Load();
    });

    upperLeft.attr('src', 'https://www.youtube.com/embed/zXJtxSpFdro?controls=1&cc_load_policy=0&disablekb=0?fs=0?iv_load_policy=3');

    upperRight.attr('src', 'https://creatability.withgoogle.com/keyboard/');  //http://www.on-broadway.nyc/ //https://creatability.withgoogle.com/keyboard/

    lowerLeft.attr('src', 'https://artsexperiments.withgoogle.com/living-archive'); //https://artsexperiments.withgoogle.com/timelines#/ //http://visual-earth.net/

    lowerRight.attr('src', 'https://artsexperiments.withgoogle.com/beyondscrolls/');

    timeout = setTimeout(function(){
        if (slides.index($(".stran.active")) === 3 && loaded < 4) {
            loaded = -1;
            console.log("timeout");
            slide4.parent().find('.loading').addClass('hide');
            slide4.addClass('show');
        }
    }, 3000);
}

function exitSlide4() {
    loaded = 0;
    clearTimeout(timeout);
    slide4.parent().find('.loading').removeClass('hide');
    slide4.removeClass('show');
    upperLeft.off('load');
    upperRight.off('load');
    lowerLeft.off('load');
    lowerRight.off('load');
    // upperLeft.attr('src', '');
    // upperRight.attr('src', '');
    // lowerLeft.attr('src', '');
    // lowerRight.attr('src', '');
    upperLeft.removeAttr('src');
    upperRight.removeAttr('src');
    lowerLeft.removeAttr('src');
    lowerRight.removeAttr('src');
    progress.css("width", "0%");
    progress.attr("aria-valuenow", 0);
}

function setActiveSlide(active, last) {
    let currentSlideIndex = slides.index(active);
    let lastSlideIndex = slides.index(last);


    // console.log('FROM ' + lastSlideIndex + ' TO: ' +  currentSlideIndex);
    animations[currentSlideIndex].play();
    if(lastSlideIndex !== 1){
        animations[lastSlideIndex].progress(0).pause();
    }

    // if (currentSlideIndex < 2) {
    //     leftBoxAnimations[currentSlideIndex].play();
    //     rightBoxAnimations[currentSlideIndex].play();
    // }
    // if (lastSlideIndex < 2) {
    //     leftBoxAnimations[lastSlideIndex].progress(0).pause();
    //     rightBoxAnimations[lastSlideIndex].progress(0).pause();
    // }

    if (currentSlideIndex === 3) {
        setupSlide4();
    } else if (lastSlideIndex === 3) {
        exitSlide4();
    }
}

// ================================
function init() {

    $(window).on("mousewheel DOMMouseScroll", onMouseWheel);
    //$(window).on("touchmove", onMouseWheel);

    gsap.set(".stran.active", {xPercent:-100});
    animations[0].play();
    $('.md-overlay').on("click", hideModal );
    setPause();
    setAutoplay();
    // moveToSlide($(".stran.active"), slides.eq(2));
}

$( document ).ready(function() {
    init();
});


//ANIM 2
anime.timeline()
    .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
}, '-=300').add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
},'-=600' ).add({
    targets: '.ml5 .line',
    opacity: [1,0.5],
    scaleX: [1, 0],
    easing: "easeInOutExpo",
    duration: 700
}, '-=300');

//     .add({
//     targets: '.ml5',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });
