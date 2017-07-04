//scaling nobile phone
    function fitBg() {
        var maxWidth  = $('.phone').width();
        var maxHeight = 753;
        var $window = $(window);
        var width = $window.width();
        var height = $window.height();
        var scale;
        $('.wrap-bg').css({ width: '', height: '' });
        scale = Math.min(width/maxWidth, height/maxHeight);
        $('.phone').css({
            '-webkit-transform' : 'scale(' + scale + ')',
            '-ms-transform'     : 'scale(' + scale + ')',
            '-o-transform'      : 'scale(' + scale + ')',
            'transform'         : 'scale(' + scale + ')',
        });
        $('.preloader-wrapper').css('display', 'none');
        $('.pc-bg .phone').css('visibility', 'visible');
        // $('.pc-bg .wrapper').css('display', 'block');
        $('.wrap-bg').css({  });


}

fitBg();
$(window).resize(fitBg);


