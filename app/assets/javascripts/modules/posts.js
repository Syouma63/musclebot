$(function() {
  $(".typed").typed({
    strings: ["Welcome to Musclebot.", "Let's Best Training."],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: true,
    showCursor: false,
    backDelay: 500
  });
});

// $(function() {
//   $(document).on('click', '.sign_modal_content', function() {
//     $('.sign_modal_wrapper').fadeIn();
//     $('.sign_modal_sign-in').fadeIn();
//     // if ($) {
      
//     // }
//   })
// })

// ログインモーダル表示
$(function() {
  $('.sign_modal_content').click(function() {
    $('.sign_modal_wrapper').fadeIn();
    $('.sign_modal_sign-in').fadeIn();
  });
});

$(function() {
  $('.fa').click(function() {
    $('.sign_modal_wrapper').fadeOut();
    $('.sign_modal_sign-in').fadeOut();
  });
});
