
//responsive logic
function responsive() {
    if($(window).width()<$(window).height() || $(window).width()<767) {
        $('.wrap-bg').removeClass('pc-bg');
        $('.wrap-bg').addClass('mobile-bg');

    }
    if($(window).width()>$(window).height() && $(window).width()>767) {
        $('.wrap-bg').removeClass('mobile-bg');
        $('.wrap-bg').addClass('pc-bg');
    }
}

// centering text in value input
$('.value-block .val').focus(function () {
    $(this).addClass('active');
});


$('.value-block .val').blur(function() {
    if( !$(this).val() ) {
        $(this).removeClass('active');
    }
});

//run responsive
responsive();
// run table size ajust
tableSize();
//run height of bottom panel
setHeighPanel();


//when resize run responsive
$(window).resize(tableSize);
$(window).resize(setHeighPanel);
$(window).resize(responsive);


//padding top for main
function mainPadding() {
    $(' main').each(function () {
        var headerHeight = $('.header').height();
        $(this).css('padding-top', headerHeight + 'px');
    });
};

mainPadding();
$(window).resize(mainPadding);


//check credit card and highlight parrent block
$('.content-check input').change(function() {
    if($(this).is(":checked")) {
        $(this).parent().parent().addClass('active');
    }
    else {
        $(this).parent().parent().removeClass('active');
    }
});

//dropdowns
$("select").selectBoxIt({
    autoWidth: false
});


//set table size
function tableSize() {
    var tablecellwidth = $('.bottom-panel td').outerWidth();
    $('.bottom-panel td').css('height', tablecellwidth + 'px');
};


//bottom panel

function setHeighPanel() {
    var footerHeight = $('.bottom-panel').height();
    var headerHheight = $('.header').height();
    var screenHeight = $(window).height();
    if ($(window).width() < 921) {
        var calc = screenHeight - headerHheight - footerHeight;
        $('.info-block-wrapp').css('height', calc + 'px');
    }
    else {
        var calc = 629 - headerHheight - footerHeight;
        $('.info-block-wrapp').css('height', calc + 'px');
    }
};



//append buttons fix
function fixButtons() {
        jQuery('.sucess-page .add-ham').appendTo("body");
        jQuery('.with-panel .bottom-panel').appendTo("body");
}

if($(window).width()<769 || $('.wrap-bg').hasClass('.mobile-bg')) {
    fixButtons();
    // $(window).resize(fixButtons);
}


