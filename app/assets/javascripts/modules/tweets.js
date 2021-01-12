$(document).on('turbolinks:load', function() {
  $fileField = $('#upload-image')

  $($fileField).on('change', $fileField, function(e) {
    file = e.target.files[0]
    reader = new FileReader(),
    $preview = $(".img-img");

    reader.onload = (function(file) {
      return function(e) {
        $preview.empty();
        $preview.append($('<video>').attr({
          src: e.target.result,
          width: "300px",
          class: "select img-preview",
          controls: "true",
          loop: "loop",
          playsinline: "true",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});


// 編集ページ 動画を変更するを押したら動画が消える
$(document).on('turbolinks:load',function() {
  $('.img-sel').click(function() {
    $('.img-preview').fadeOut();
    $('.img_del').fadeOut();
  });
});