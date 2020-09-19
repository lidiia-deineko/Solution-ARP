$(function(){
    $('.photos-slider').slick({
     
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        infinite: true,
    });

    $('.news-slider').slick({
     
        
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.menu__media').on('click', function(){
        $('.menu__list').addClass('active');
    });

    $('.menu__media').on('click', function(){
        $('.menu__media').hide(),
        $('.close-btn').show();
    });

    $('.close-btn').on('click',function(){
        $('.menu__list').removeClass('active');
        $('.menu__media').show(),
        $('.close-btn').hide();
    });



 });

