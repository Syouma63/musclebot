$(document).ready(function () {
  var view_box = $('.img-user');
   
  $(".fa-image").on('change', function(){
     var fileprop = $(this).prop('files')[0],
         find_img = $(this).next('img'),
         fileRdr = new FileReader();
     
     if(find_img.length){
        find_img.nextAll().remove();
        find_img.remove();
     }
     
    var img = '<img class="img_view select mypage__container__header__picture__image"><br>'
    // var del = '<div class="img_del">画像を削除する</div>'

    view_box.append(img);
    // view_box.append(del);
     
    fileRdr.onload = function() {    
      view_box.find('img').attr('src', fileRdr.result);
      // img_del(view_box); 
    }
    fileRdr.readAsDataURL(fileprop);  
  });

  // function img_del(target)
  // {
  //    target.find(".img_del").on('click',function(){
 
  //     if(window.confirm('サーバーから画像を削除します。\nよろしいですか？'))
  //     {
  //        $(this).parent().find('input[type=file]').val('');
  //        $(this).parent().find('.img_view, br').remove();
  //        $(this).remove();
  //     }
 
  //     return false;
  //   });
  // }  
});


// 編集ページ 動画を変更するを押したら動画が消える
$(document).on('turbolinks:load',function() {
  $('.images').click(function() {
    $('.select').fadeOut();
    $('.img_del').fadeOut();
  });
});


// フォローモーダル表示

// フォロワー
$(document).on('turbolinks:load', function() {
  $('.followed_modal_content').click(function() {
    $('.followed_modal_wrapper').fadeIn();
    $('.followed_modal').fadeIn();
  });
});

// フォロー
$(document).on('turbolinks:load', function() {
  $('.follower_modal_content').click(function() {
    $('.follower_modal_wrapper').fadeIn();
    $('.follower_modal').fadeIn();
  });
});

// モーダル表示を消す

// フォロワー
$(document).on('turbolinks:load',function() {
  $('.fa').click(function() {
    $('.followed_modal_wrapper').fadeOut();
    $('.followed_modal').fadeOut();
  });
});

// フォロー
$(document).on('turbolinks:load',function() {
  $('.fa').click(function() {
    $('.follower_modal_wrapper').fadeOut();
    $('.follower_modal').fadeOut();
  });
});



// クリックしてたら表示させる記述
// $(function() {
//   $('.image-image').click(function() {
//     $('.image-modal-wrapper').fadeIn(0)
//     $('.image-modal-images').fadeIn(300);
//     $('.image-modal-images').css({
//       "transform": "scale(1)",
//       'overflow': 'scroll'
//     });
//     $('.image-modal-images').html($(this).prop('outerHTML'))
//     $('.image-image').css({
//       'width': '90%',
//       'margin': 'auto',
//       'max-height': '700px'
//     });
//     $('.mypage__container__main__image__images').css({
//       'height': '400px',
//       'object-fit': 'contain'
//     });
//     $('.mypage__container__main__image__name').css({
//       'margin': '10px auto',
//       'padding': '5px',
//       'width': '60%',
//       'text-align': 'left',
//       'border': '2px solid whitesmoke'
//     });
//     $('.mypage__container__main__image__text').css({
//       'margin': '10px auto',
//       'padding': '5px',
//       'width': '60%',
//       'text-align': 'left',
//       'border': '2px solid whitesmoke'
//     });
//     $('.mypage__container__main__image__name').show();
//     $('.mypage__container__main__image__text').show();
//   });
// });

// // クリックしたら解除される記述
// $(function() {
//   $('.fa').click(function() {
//     $('.image-modal-wrapper').fadeOut();
//     $('.image-modal-images').fadeOut(0);
//     $('.image-modal-images').css({
//       "transform": "scale(0)",
//       'overflow': ''
//     });
//     $('.image-image').css({
//       'width': '',
//       'height': '',
//       'margin': '',
//     });
//     $('.mypage__container__main__image__images').css({
//       'height': '',
//       'object-fit': 'cover'
//     });
//     $('.mypage__container__main__image__name').css('display', 'none');
//     $('.mypage__container__main__image__text').css('display', 'none');
//   });
// });