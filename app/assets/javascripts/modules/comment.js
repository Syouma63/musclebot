$(document).on('turbolinks:load', ()=> {
  function buildHTML(comment){
    let html =
    `<div class="show-page__container__main__comments__lists__main__link">
      <div class="show-page__container__main__comments__lists__main__link__left">
        <strong>
          <a href="/users/comment.user_id" class="show-page__container__main__comments__lists__main__link__left__a">${comment.nickname} :</a>
        </strong>
        ${comment.text}
      </div>
      <div class ="show-page__container__main__comments__lists__main__link__right">
        ${comment.created_at}
      </div>
    </div>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    // 送るデータとオプションを指定
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    // 通信が成功したとき
    .done(function(data){
      let html = buildHTML(data);
      // html要素を追加する
      // $('.show-page__container__main__comments__lists__main__link').before(html);
      $('.show-page__container__main__comments__lists__main').append(html);
      // フォームの中をからにする
      $('.show-page__container__main__comments__form__textarea').val('')
      // 追加した要素の分だけスクロールする
      $('.show-page__container__main__comments__lists__main__link').animate({ scrollTop: $('.show-page__container__main__comments__lists__main__link')[0].scrollHeight});
      // 送信ボタンを一度押したら再度押せなくなる処理を無効にして、連続投稿可能にする。
      $('.show-page__container__main__comments__form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('コメントを入力してください')
    })
  })
})