// カルーセル
$('.voices__slick').slick({
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<img src="/assets/image/voice/arrow_left_circle_fill.png"  class="slick-prev bi bi-arrow-left"></い>',
  nextArrow: '<img src="/assets/image/voice/arrow_right_circle_fill.png"  class="slick-next bi bi bi-arrow-right"></img>',
  centerMode: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


// アコーディオンのタイトルがクリックされたら
$(function () {
  $('.question__content-accordion-top').on('click', function () {
    var content = $(this).next();
    content.slideToggle(); // アコーディオンの開閉
    $(this).toggleClass('open'); // クラス切替（必要ならスタイル制御）
    $(this).find('i').toggleClass('rotate'); // 矢印を回転
  });
});