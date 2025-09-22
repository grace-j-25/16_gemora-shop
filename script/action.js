
let gnbHtml = $('.pc_nav .gnb').clone();
$('.mo_gnb .gnb_wrap').html(gnbHtml);

$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $('.mo_gnb').fadeToggle();
    $('.mo_gnb').toggleClass('on');
    $('body').toggleClass('on');
    
    // let h1Img = $('header h1 img').attr('src');
    // let h1ImgSrc = h1Img.indexOf('_w')
    // if(h1ImgSrc == -1){
    //     $('header h1 img').attr('src','img/logo_w.png');
    // }
    // else{
    //     $('header h1 img').attr('src','img/logo.png');
    // }
});

$('.mo_gnb .gnb_wrap > .gnb > li > a').click(function(){
    $('.lnb_box').slideUp();
    $(this).siblings('.lnb_box').stop().slideToggle();
    if($(this).siblings().attr('class').indexOf('lnb_box') >= 0){
        return false;
    }

    return false;
})

// pc메뉴
$('.pc_nav .gnb > li').mouseenter(function(){
    let liPosi = $(this).offset().left
    let liW = $(this).width() / 2;
    $('.pc_nav .g').css({left:liPosi + liW, opacity: 1})

    $(this).find('.lnb_box').fadeIn().css({display:'flex'});
});
$('.pc_nav .gnb > li').mouseleave(function(){
    $('.pc_nav .g').css({opacity:0})

    $('.pc_nav .lnb_box').fadeOut();
});