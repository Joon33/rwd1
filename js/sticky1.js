$(function(){

  // 상단 네비게이션 설정시작 - 스크롤 이벤트 함수 : $('대상').scroll();
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);

    if(scrollPos > 20){
      $('#header').addClass('.fixed');
    }else{
      $('#header').removeClass('.fixed');
    }
  });

  // 상단 메뉴 클릭시 부드러운 이동 설정시작
  var menuItem = $('.gnb a, h1 a');

  menuItem.click(function(e){
    var el = $(this).attr('href');
    // console.log(el);

    var elWarp = $(el); // $('대상').메서드();

    scrollMove(elWarp, 60);

    e.preventDefault();
  });

  // 부드러운 움직임 함수 만들기
  function scrollMove(el, navHeight){
    var offset = el.offset().top;
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos},800);
  }

  

});