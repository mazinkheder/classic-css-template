/*global $, alert, console*/

$(function () {
    'use strict';

    // customize header hieght
    let myHeader = $('.nav-bar');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });

    // links active
    $('.menubar li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.nav-bar .container .nav .menubar li').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },100);
    });

 // animate our client say

    //let says = document.querySelectorAll(".clients");

    (function autoSlider () {
        $('.slider .active').each(function (){
            if (!$(this).is(':last-child')) {
                //console.log("yes");
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn()
                    autoSlider ()
                });
            } else {
                $(this).delay (3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider ()
                });
            }
        });
    }());


    // active projects sections
    $('.projects .container ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});



let leftArrow =document.querySelector("#left");
let rightArrow =document.querySelector("#right");
function checkClient () {
    if ($('.sliders .boxs:first').hasClass('active')) {
        leftArrow.style.cssText="display: none;";
    }else {
        leftArrow.style.cssText="display: block;";
    }

    if ($('.sliders .boxs:last').hasClass('active')) {
        rightArrow.style.cssText="display: none;";
    }else {
        rightArrow.style.cssText="display: block;";
    }
}


checkClient();

$(rightArrow).click (function () {

    
    $('.sliders .boxs.active').fadeOut(100, function () {
        $(this).removeClass("active").next(".sliders .boxs").addClass("active").fadeIn();
        checkClient();
    });

});


$(leftArrow).click (function () {

    
    $('.sliders .boxs.active').fadeOut(100, function () {
        $(this).removeClass("active").prev(".sliders .boxs").addClass("active").fadeIn();
        checkClient();
    });

});

let myImenu = document.querySelector("#i-menu");

let myMenu = document.querySelector(".menubar");

myImenu.onclick = function () {
    if (myMenu.style.display === "block"){
        myMenu.style.display ="none";
    } else {
        myMenu.style.display = "block";
    }
};


// Make My Shaffile

let allItem = document.querySelector(".all-item");
let mobileItem = document.querySelector(".mobile-item");
let coffeeItem = document.querySelector(".coffee-item");
let videoItem = document.querySelector(".video-item");
let fashionItem = document.querySelector(".fashion-item");


let myAll = document.querySelectorAll(".content-box");

allItem.onclick = function () {
    for (let i=0; i<myAll.length;i++) {
        if (myAll[i].hasAttribute("data-src")) {
            myAll[i].style.display="block";
        }
    }
};


mobileItem.onclick = function () {
    for (let i=0; i<myAll.length;i++) {
        if (myAll[i].getAttribute("data-src") == "mobile") {
            myAll[i].style.display="block";
        }
        else {
            myAll[i].style.display="none";
        }
    }
};

coffeeItem.onclick = function () {
    for (let i=0; i<myAll.length;i++) {
        if (myAll[i].getAttribute("data-src") == "coffee") {
            myAll[i].style.display="block";
        }else {
            myAll[i].style.display="none";
        }
    }
};

videoItem.onclick = function () {
    for (let i=0; i<myAll.length;i++) {
        if (myAll[i].getAttribute("data-src") === "video") {
            myAll[i].style.display="block";
        }else {
            myAll[i].style.display="none";
        }
    }
};

fashionItem.onclick = function () {
    for (let i=0; i<myAll.length;i++) {
        if (myAll[i].getAttribute("data-src") === "fastion") {
            myAll[i].style.display="block";
        }else {
            myAll[i].style.display="none";
        }
    }
};