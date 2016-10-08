


//padding top
    $(function() {
        // if($(window).width()<767) {
        $(' main').each(function () {
            var headerHeight = $('.header').height();
            $(this).css('padding-top', headerHeight + 'px');
        });
        // }
    });



$(window).resize(
    function(){
        $('main').each(function(){
            var headerHeight=$('.header').height();
            $(this).css('padding-top',headerHeight+'px');
        });
    }

);

$('.content-check input').change(function() {
    if($(this).is(":checked")) {
        $(this).parent().parent().addClass('active');
        // $(this).attr("checked", returnVal);
    }
    else {
        $(this).parent().parent().removeClass('active');
    }
});

//scaling

function fitBg() {
    var maxWidth  = $('.phone').width();
    var maxHeight = $('.phone').height();
    var $window = $(window);
    var width = $window.width();
    var height = $window.height();
    var scale;
    console.log(scale);

    // early exit
    if(width >= maxWidth && height >= maxHeight) {
        $('.image').css({'-webkit-transform': ''});
        $('.wrap-bg').css({ width: '', height: '' });
        return;
    }

    scale = Math.min(width/maxWidth, height/maxHeight);

    $('.phone').css({'-webkit-transform': 'scale(' + scale + ')'});
    $('.wrap-bg').css({  });
}

fitBg();

$(window).resize(fitBg);


//set table size
function tableSize() {
    var tablecellwidth = $('.bottom-panel td').outerWidth();
    $('.bottom-panel td').css('height', tablecellwidth + 'px');
};



function setHeiHeight() {
    $('.wrapper').css({
        height: screen.height + 'px'
    });
}

$('.list-of-currency').css({
    height:  + 'px'
});



$(window).resize(setHeiHeight);


function setHeighPanel() {
    var footerHeight = $('.bottom-panel').height();
    var headerHheight = $('.header').height();
    var screenHeight = screen.height;
    if($(window).width()<767) {
        var calc = screenHeight - headerHheight - footerHeight;
        $('.info-block-wrapp').css('height', calc + 'px');
    }
    else {
        var calc = 629 - headerHheight - footerHeight;
        $('.info-block-wrapp').css('height', calc + 'px');
    }};


$(window).resize(tableSize, setHeighPanel);

tableSize();
setHeiHeight();
setHeighPanel();

//iframe overflow
// $('iframe').load( function() {
//     $('iframe').contents().find("head")
//         .append($("<style type='text/css'>.wrapper.without-panel {overflow: hidden !important; } .wrapper.with-panel { overflow: hidden !important;}  .wrapper{ height: 629px !important; overflow: scroll !important;}  </style>"));
// });









//scroll







