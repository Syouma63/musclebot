// クリックしてたら表示させる記述
$(function() {
  $('.image-image').click(function() {
    $('.image-modal-wrapper').fadeIn(0)
    $('.image-modal-images').fadeIn(300);
    $('.image-modal-images').css({
      "transform": "scale(1)",
      'overflow': 'scroll'
    });
    $('.image-modal-images').html($(this).prop('outerHTML'))
    $('.image-image').css({
      'width': '90%',
      'margin': 'auto',
      'max-height': '700px'
    });
    $('.mypage__container__main__image__images').css({
      'height': '400px',
      'object-fit': 'contain'
    });
    $('.mypage__container__main__image__name').css({
      'margin': '10px auto',
      'padding': '5px',
      'width': '60%',
      'text-align': 'left',
      'border': '2px solid whitesmoke'
    });
    $('.mypage__container__main__image__text').css({
      'margin': '10px auto',
      'padding': '5px',
      'width': '60%',
      'text-align': 'left',
      'border': '2px solid whitesmoke'
    });
    $('.mypage__container__main__image__name').show();
    $('.mypage__container__main__image__text').show();
  });
});

// クリックしたら解除される記述
$(function() {
  $('.fa').click(function() {
    $('.image-modal-wrapper').fadeOut();
    $('.image-modal-images').fadeOut(0);
    $('.image-modal-images').css({
      "transform": "scale(0)",
      'overflow': ''
    });
    $('.image-image').css({
      'width': '',
      'height': '',
      'margin': '',
    });
    $('.mypage__container__main__image__images').css({
      'height': '',
      'object-fit': 'cover'
    });
    $('.mypage__container__main__image__name').css('display', 'none');
    $('.mypage__container__main__image__text').css('display', 'none');
  });
});