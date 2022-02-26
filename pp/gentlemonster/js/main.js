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

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================



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





        if (scrollLeft > 1300){
            $('#section02').addClass('on');
        }

        if (scrollLeft > 5000){
            $('#section04').addClass('on');
        }


        // =========================
        // scroll event section
        //==========================



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























