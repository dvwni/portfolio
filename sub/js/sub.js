/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
       _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

$(document).ready(function () {
    Logic();

    $("#container").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });


    $("#section02 .boxing").niceScroll({
        cursorcolor: "black",
        cursorwidth: 0,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "#ddd",
        cursorborder: "none",
        autohidemode: false,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================

    $('#section02 .boxing').click(function () {

        $('.pop1').addClass("on")

    });

    $('.close').click(function () {

        $('.pop1').removeClass('on');


    });



    $("#img_slider").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.pop1 .left'), //이전 화살표
        nextArrow: $('.pop1 .right'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 500, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '#section01 .model_box', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    })




    $('.filter1 .depth input').on('change',function () {

        let v = $('.filter1 .depth input:checked').length;

        $('.filter1 .count').html(v);

    })

    $('.filter1').click(function () {

        $(this).toggleClass('on');
    })


    $('.filter2 .depth input').on('change',function () {

        let v = $('.filter2 .depth input:checked').length;

        $('.filter2 .count').html(v);

    })

    $('.filter2').click(function () {

        $(this).toggleClass('on');
    })

    $('.filter3 .depth input').on('change',function () {

        let v = $('.filter3 .depth input:checked').length;

        $('.filter3 .count').html(v);

    })

    $('.filter3').click(function () {

        $(this).toggleClass('on');
    })







    $('#header .open').click(function () {

        $('#mega').toggleClass("on")

        $('.open').toggleClass("on")
    });



    $("#section02 .box1").scroll(function () {

        let v = $(this).scrollTop();


        $('.scrollbar .bar').css('transform',`translateY(${v * 4.65}px)`);

    })

//==============================================================
});


$(function () {

    // 스크롤 이벤트
    $('#container').scroll(function () {
        var scrollLeft = $('#container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================



        if(scrollLeft <= 1840){
            $('#section02 .title').css({
                position:'absolute',
            })
        }

        if(scrollLeft >= 1840 && scrollLeft <= 5435){
            $('#section02 .title').css({
                position:'fixed',
                left: '0'
            })
        }

        if(scrollLeft >= 5435){
            $('#section02 .title').css({
                position:'absolute',
                left: '3514px'
            })
        }







        if(scrollLeft <= 6450){
            $('#section05 .title').css({
                position:'absolute',
            })
        }

        if(scrollLeft >= 6450 && scrollLeft <= 10508){
            $('#section05 .title').css({
                position:'fixed',
                left: '0'
            })
        }

        if(scrollLeft >= 10508){
            $('#section05 .title').css({
                position:'absolute',
                left: '3780px'
            })
        }






        if(scrollLeft <= 11095){
            $('#section08 .title').css({
                position:'absolute',
            })
        }

        if(scrollLeft >= 11095 && scrollLeft <= 15278){
            $('#section08 .title').css({
                position:'fixed',
                left: '0'
            })
        }

        if(scrollLeft >= 15278){
            $('#section08 .title').css({
                position:'absolute',
                left: '3780px'
            })
        }


















        if(scrollLeft >= 14403){
            $('.line').css('transform',`translateX(-${(-14503) + scrollLeft}px)`)
        }else{
            $('.line').css('transform',`translateX(${0}px)`)
        }





        /* -0-----------story */













        if(scrollLeft >= 400){
            $('#section02').addClass('on');
        }



        if(scrollLeft >= 900){
            $('#section03').addClass('on');
        }


        if(scrollLeft >= 1600){
            $('#section03.on .text').addClass('on');
        }


        if(scrollLeft >= 1700){
            $('#section03.on .palette').addClass('on');
        }

        if(scrollLeft >= 3470){
            $('#section04').addClass('on');
        }

        if(scrollLeft >= 4214){
            $('#section04.on .model').addClass('on');
        }

        if(scrollLeft >= 4214){
            $('#section04.on .paltette').addClass('on');
        }

        if(scrollLeft >= 4214){
            $('#section04.on .paltette2').addClass('on');
        }

        if(scrollLeft >= 4571){
            $('#section05').addClass('on');
        }

        if(scrollLeft >= 5532){
            $('#section05.on .box1 > .product').addClass('on');
        }

        if(scrollLeft >= 5550){
            $('#section05.on .box1 > .palette').addClass('on');
        }

        if(scrollLeft >= 7466){
            $('#section06').addClass('on');
        }

        if(scrollLeft >= 7466){
            $('#section06.on .box > .product').addClass('on');
        }

        if(scrollLeft >= 8256){
            $('#section07').addClass('on');
        }

        if(scrollLeft >= 8552){
            $('#section07.on .box > .text1').addClass('on');
        }

        if(scrollLeft >= 8804){
            $('#section07.on .box > .product').addClass('on');
        }

        if(scrollLeft >= 9693){
            $('#section07.on .box1 > .product').addClass('on');
        }

        if(scrollLeft >= 10061){
            $('#section07.on .box1 > .palette1').addClass('on');
        }








        //===================================================================
        // 메뉴 활성화
        $('#container .main > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstX = $('#container .main > div:first').position().left;
            var posX = $(this).position().left;
            if (scrollLeft <= firstX - fastNum) {
                $('#container .main').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollLeft >= posX - fastNum) {
                $('#container .main').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });
    });


});