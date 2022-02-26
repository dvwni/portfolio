window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    /*�� ũ �� �� �� Ʈ �� �� */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);



        if(scrollTop >= 900){
            $('#section02').addClass('on');
        }


        if(scrollTop >= 2087){
            $('#section03').addClass('on');
        }

        if(scrollTop >= 2100){
            $('#section03.on .des2').addClass('on');
        }

        if(scrollTop >= 3100){
            $('#section04').addClass('on');
        }

        if(scrollTop >= 3100){
            $('#section04 .right .des1').addClass('on');
        }

        if(scrollTop >= 3300){
            $('#section04 .right .des2').addClass('on');
        }

        if(scrollTop >= 4300){
            $('#section05').addClass('on');
        }

        if(scrollTop >= 5300){
            $('#section06').addClass('on');
        }

        if(scrollTop >= 6200){
            $('#section07').addClass('on');
        }

        if(scrollTop >= 7500){
            $('#section08').addClass('on');
        }

        if(scrollTop >= 8500){
            $('#section09').addClass('on');
        }

        if(scrollTop >= 9400){
            $('#section10').addClass('on');
        }

        if(scrollTop >= 11800){
            $('#section12').addClass('on');
        }

        if(scrollTop >= 12971){
            $('#section13').addClass('on');
        }

        if(scrollTop >= 12971){
            $('#section13.on .box > .end1').addClass('on');
        }

        if(scrollTop >= 12971){
            $('#section13.on .daun > .end1').addClass('on');
        }

    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


    })();



})









