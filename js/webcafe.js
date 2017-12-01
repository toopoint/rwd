$(document).ready(function() {
  var container = $('.menubar-container');
  var menubar = $('.btn-menubar, .menubar');
  var menu = $('.main-menu');
  var btn = $('.btn-menubar');
  var subMenu = $('.sub-menu');
  var li = $('.main-menu > li');
  var last = $('.main-menu > li:last-child');
  var subLast = $('.main-menu li:last-child li:last-child a');

  menubar.click(function() {
    container.toggleClass('menu-act');
    menu.toggleClass('menu-act');

    if (container.hasClass('menu-act')) {
      btn.text('메인 메뉴 닫기');
    } else {
      btn.text('메인 메뉴 열기');
    }
  });

  li.click(function(e) {
    e.preventDefault();
    $(this).siblings().find(".sub-menu").removeClass('sub-menu-act');
    $(this).find('.sub-menu').addClass('sub-menu-act');
  });

  li.keyup(function(e) {
    e.preventDefault();
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).siblings().find(".sub-menu").removeClass('sub-menu-act');
      $(this).find('.sub-menu').addClass('sub-menu-act');
    }
  });

  li.focusout(function(e) {
    e.preventDefault();
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).siblings().find(".sub-menu").removeClass('sub-menu-act');
      $(this).find('.sub-menu').addClass('sub-menu-act');
    }
  });

  last.focusout(function() {
    if ($(this).find('.sub-menu').css('display') == "none") {
      container.removeClass("menu-act");
      menu.removeClass("menu-act");
    }
  });

  subLast.focusout(function() {
    container.removeClass("menu-act");
    menu.removeClass("menu-act");
  });
});