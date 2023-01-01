$(document).ready(function (event) {
   $('.ss-basic__item').click(function (event) {
      $('.ss-basic__item').removeClass('active');
      $(this).addClass('active');
      $('.ss-basic__content').removeClass('target');
      $('.'+$(this).attr('data-tab')+'').addClass('target');
   }); 
   $('.ss-produce__tab').click(function (event) {
    $('.ss-produce__tab').removeClass('active');
    $(this).addClass('active');
    $('.ss-produce__content').removeClass('target');
    $('.'+$(this).attr('data-tab')+'').addClass('target');
 });       
   
    $('.ss-project__mainslider').slick({
        arrows: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,    
        asNavFor:'.ss-project__navslider',
    });   
    
    $('.ss-project__mobile b').html($('.ss-project__mainslider .slick-slide').length);
    $('.ss-project__mainslider')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.ss-project__mobile span').html(currentSlide + 1);
     });

    $('.ss-project__navslider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        infinite:true,
        slidesToScroll: 1,
        focusOnSelect: true,
        speed: 500,    
        asNavFor:'.ss-project__mainslider',
    });   
    $('.ss-quality__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,  
      prevArrow: $('.ss-quality__prev'),
      nextArrow: $('.ss-quality__next') ,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 2.5,
            infinite:false,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1.5,
            infinite:false,
          }
        }

      ]          
      
    });   
    $('.ss-achieve__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 1201,
          settings: {
            arrows: true,
            dots: false,
            autoplay:false,
            infinite:false,
            slidesToShow: 3,
            speed: 800,            
          }
        },    
        {
          breakpoint: 901,
          settings: {
            arrows: true,
            dots: false,
            autoplay:false,
            infinite:false,
            slidesToShow:2,
          }
        }, 
        {
          breakpoint: 700,
          settings: {
            arrows: true,
            dots: false,
            autoplay:false,
            infinite:false,
            slidesToShow:1.3,
          }
        }, 

      ]      
   }); 
    $('.ss-look__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      fade:true,
      speed: 500,  
      prevArrow: $('.ss-look__prev'),
      nextArrow: $('.ss-look__next')      
    });   
    $('.ss-modern__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,  
      centerMode: true,
      centerPadding: '490px',
      responsive: [
        {
          breakpoint: 1550,
          settings: {
            centerPadding: '290px',
          }
        },
        {
          breakpoint: 1090,
          settings: {
            centerPadding: '90px',
          }
        },
        {
          breakpoint: 700,
          settings: {
            centerPadding: '30px',
          }
        }          
        
      ]       
    }); 
    $('.ss-projects__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 2,
      infinite:true,
      slidesToScroll: 2,
      initialSlide:4,
      speed: 500,  
      prevArrow: $('.ss-projects__prev'),
      nextArrow: $('.ss-projects__next') ,
      responsive: [
        {
          breakpoint: 1251,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },        
        
      ]        
      
    });   
    $('.ss-projects__wrapslide-carousel').slick({
      arrows: false,
      dots: false,
      fade:true,
      asNavFor:'.ss-projects__navslider',
    });   
    $('.ss-projects__navslider').slick({
      arrows: true,
      dots: false,
      infinite:true,
      slidesToShow: 5,
      focusOnSelect: true,
      asNavFor:'.ss-projects__wrapslide-carousel',
    });       
    const slider = document.getElementById('slider');
    noUiSlider.create(slider, {
        start: [10000000],
        connect: [true,false],
        padding: [0,0],
        step: 1000,
        range: {
            'min': [0],
            'max': [30500000]
        },
    });
    const slider1 = document.getElementById('slider1');
    noUiSlider.create(slider1, {
        start: [3500000],
        connect: [true,false],
        padding: [0,0],
        step: 1000,
        range: {
            'min': [0],
            'max': [17500000]
        },
    });
    const slider2 = document.getElementById('slider2');
    noUiSlider.create(slider2, {
        start: [2],
        connect: [true,false],
        padding: [0,0],
        step: 0.1,
        range: {
            'min': [1],
            'max': [36]
        },
    });
    slider.noUiSlider.on('update', function (values, handle) {
        $('#slider .noUi-handle').attr('aria-valuetext', parseFloat(values[handle]).toLocaleString('ru') + ' ₽');
    });
    slider1.noUiSlider.on('update', function (values, handle) {
      $('#slider1 .noUi-handle').attr('aria-valuetext', parseFloat(values[handle]).toLocaleString('ru') + ' ₽');
    });

    slider2.noUiSlider.on('update', function (values, handle) {
      if(parseFloat(values[handle]) >= 4.5){
        $('#slider2 .noUi-handle').attr('aria-valuetext', Math.round(values[handle]) + ' лет');
      }   
      else if(parseFloat(values[handle]) >= 1.5){
        $('#slider2 .noUi-handle').attr('aria-valuetext', Math.round(values[handle]) + ' года');
      }
      else {
        $('#slider2 .noUi-handle').attr('aria-valuetext', Math.round(values[handle]) + ' год');
      }           
    });   
    
});    


