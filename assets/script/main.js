// カルーセル
$('.voices__slick').slick({
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<img src="/assets/image/voice/arrow_left_circle_fill.png"  class="slick-prev bi bi-arrow-left"></img>',
  nextArrow: '<img src="/assets/image/voice/arrow_right_circle_fill.png"  class="slick-next bi bi bi-arrow-right"></img>',
  centerMode: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


