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

    $("#container,.scroller").niceScroll({
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

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================



    $("#section01 .bg").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#section01 .topb'), //이전 화살표
        nextArrow: $('#section01 .bottomb'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#section01 .model_box', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    });

    $('#section01 .bar').addClass('on')

    $("#section01 .model_box").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('.prev'), //이전 화살표
        // nextArrow: $('.next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#section01 .bg', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('#section01 .model_box .slick-slide').removeClass('on');

        $('#contents .change_text > div').removeClass('on');

        $('#section01 .change_n .number > div').removeClass('on');

        $('#section01 .bar').removeClass('on')

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){


        console.log(currentSlide);

        $('#section01 .model_box .slick-current').addClass('on');

        $('#contents .change_text > div').eq(currentSlide).addClass('on');

        $('#section01 .change_n .number > div').eq(currentSlide).addClass('on');

        $('#section01 .bar').addClass('on')
    });




    $("#section03 .product").slick({
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#section03 .icon1'), //이전 화살표
        nextArrow: $('#section03 .icon2'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    });






    $("#section05 .image_box").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: true, //세로 슬라이드
        verticalSwiping: true, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    });

    $("#section05 .des").slick({
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#section05 .bottomicon'), //이전 화살표
        nextArrow: $('#section05 .topicon'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#section05 .image_box', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    });


    $("#aacc").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#section04 .leftb'), //이전 화살표
        nextArrow: $('#section04 .rightb'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#section04 .des', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 6, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('#aacc .slick-slide').removeClass('on');

        $('#section04 .bar').removeClass('on')



    }).on('afterChange', function(event, slick, currentSlide, nextSlide){


        console.log(currentSlide);

        $('#aacc .slick-current').addClass('on');

        $('#section04 .bar').addClass('on')

    });





    $("#section04 .des").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('#section04 .leftb'), //이전 화살표
        // nextArrow: $('#section04 .rightb'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#aacc', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,



    });





    // 햄버거를 클릭했을때 메가 등장
    // .open .click #mega .on add





    $('#section01 .model .icon').click(function () {

        $('.pop').fadeIn();



    });

    $('.close').click(function () {

        $('.pop').fadeOut();


    });



    $('#header .open').click(function () {

        $('#mega').toggleClass("on")

        $('.open').toggleClass("on")
    });









    $('.footer1').on('mousewheel',function (e) {

        let v = e.originalEvent.deltaY;

        // console.log(v);

        if( v < 0){

            TweenMax.to('.pop',1,{
                left: 0
            })
        }
    })




//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posX = $($(this).attr('href')).position().left;
        $('#container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    // 스크롤 이벤트
    $('#container').scroll(function () {
        var scrollLeft = $('#container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================






        if(scrollLeft >= 3700){

            $('.sungl').addClass('on');
        }


    });

    // 스크롤 이벤트
    $('.scroller').scroll(function () {
        var scrollTop = $('.scroller').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값



        // =========================
        // scroll event section
        //==========================


        if(scrollTop >= 0 && scrollTop <= 1700){
            $('.pop .big').removeClass('on');
            $('.b1').addClass('on');
        }


        if(scrollTop >= 1700 && scrollTop <= 2700){
            $('.pop .big').removeClass('on');
            $('.b2').addClass('on');
        }

        if(scrollTop >= 2700 && scrollTop <= 3700){
            $('.pop .big').removeClass('on');
            $('.b3').addClass('on');
        }

        if(scrollTop >= 3700 && scrollTop <= 4700){
            $('.pop .big').removeClass('on');
            $('.b4').addClass('on');
        }

        if(scrollTop >= 4700 && scrollTop <= 5700){
            $('.pop .big').removeClass('on');
            $('.b5').addClass('on');
        }









        if(scrollTop >= $('.page01').height() - innerHeight){


            TweenMax.to('.pop',1,{
                left: -925
            })


        }else{
            TweenMax.to('.pop',1,{
                left: 0
            })
        }






    });


});