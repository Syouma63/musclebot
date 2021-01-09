$(document).ready(function () {
  var view_box = $('.img-img');
   
  $(".img-video").on('change', function(){
     var fileprop = $(this).prop('files')[0],
         find_img = $(this).next('video'),
         fileRdr = new FileReader();
     
     if(find_img.length){
        find_img.nextAll().remove();
        find_img.remove();
     }
     
    var video = '<video width="300" class="img_view select" loop controls muted><br>'
    // var del = '<div class="img_del">画像を削除する</div>'

    view_box.append(video);
    // view_box.append(del);
     
    fileRdr.onload = function() {    
      view_box.find('video').attr('src', fileRdr.result);
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
$(function() {
  $('.img-sel').click(function() {
    $('.select').fadeOut();
    $('.img_del').fadeOut();
  });
});