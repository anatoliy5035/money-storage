$(document).ready(function() {

	// go js

});

function setHeiHeight() {
    $('.wrapper').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight();

$(window).resize(setHeiHeight);



function setHeHeightBlock() {
    $(window).height()
}

setHeHeightBlock();
//
$(function(){
    $(' main').each(function(){
        var headerHeight=$('.header').height();
        $(this).css('padding-top',headerHeight+'px');
    });
});

// $(function(){
//     $('.list-of-currency').each(function(){
//         var addrHeight=$('.add-ham').outerHeight();
//         $(this).css('padding-bottom',addrHeight+'px');
//     });
// });


$(window).resize(
    function(){
        $('main').each(function(){
            var headerHeight=$('.header').height();
            $(this).css('padding-top',headerHeight+'px');
        });
    }
);
