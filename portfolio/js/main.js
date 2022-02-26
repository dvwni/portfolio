
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



    $('#section01').addClass('on');

    /*�� ũ �� �� �� Ʈ �� �� */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);




        if(scrollTop >= 592){
            $('#section02').addClass('on');
        }

        if(scrollTop >= 900){
            $('#section02').addClass('on');
        }


        if(scrollTop >= 1882){
            $('#section03').addClass('on');
        }

        if(scrollTop >= 1882){
            $('#section03.on .box1').addClass('on');
        }


        if(scrollTop >= 2851){
            $('#section04').addClass('on');
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









