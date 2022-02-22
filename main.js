// main. js


    $(function(){
        $('.img-list > li > a').on('click', function(){
            var src = $(this).children().attr('src');
            $('.main-photo > img').attr('src', src);
        })
    });

    // loading 준비 완료 이벤트

window.onload = function() {
    // 로딩중  지연시간
    setTimeout(function(){
        $('.splash-screen').removeClass('on');
    },3000)


    console.log('문서 로딩 완료!');
}



    
