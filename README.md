# MuscleBot
## 概要
railsを使用し、トレーニングに特化したSNSを開発しました。
## URL 
http://54.199.50.192:3000/
## Email PASS
- Email: taro@taro
- PASS: tarotaro

## トップページ
![video](https://user-images.githubusercontent.com/68550855/104795580-da3c0200-57f2-11eb-9443-968c04b12431.gif)

- deviseでのログイン・ログアウト機能
- ログイン時とログアウト時でヘッダーの表示を変えています。
- ログインしなければ閲覧ページにいけません。
- 真ん中の文字をjqueryでタイピングしているようにした記述に拘りました。



## 閲覧ページ
![tweet-index](https://user-images.githubusercontent.com/68550855/104797222-ca76ea80-57ff-11eb-999a-5644fb1ce969.gif)
 
- 投稿したツイートが表示されます。（フォローしているユーザーのみ）
- ツイート詳細表示
- ツイート編集、削除
- いいね機能（ajax)
- ユーザー検索機能

## ツイート詳細ページ
![tweet-show](https://i.gyazo.com/07ae824a52e12d04e64026900f91adeb.png "tweet-show")

- コメント機能（ajax)

## 投稿ページ
![tweet-new](https://user-images.githubusercontent.com/68550855/104796762-89310b80-57fc-11eb-94d2-8d09dafd63fd.gif)

- 動画のプレビュー機能

## 投稿編集ページ
![tweet-edit](https://user-images.githubusercontent.com/68550855/104797130-1ffec780-57ff-11eb-8473-ead26ba960c7.gif)

- プルダウンで編集を表示（ログインユーザーのみ表示）
- ツイート情報を表示
- 「動画を変更する」をクリックしたら表示されている動画を消す

## ユーザーページ
![mypage-show](https://user-images.githubusercontent.com/68550855/104797032-86cfb100-57fe-11eb-8e53-b57b3a56f1f8.gif)

- フォロー機能（ajax）
- ログインユーザーページの場合は「設定」を表示してアカウント編集を行う。
- [フォロー][フォロワー]をクリックするとそれぞれの一覧をモーダルで表示する。
- 投稿一覧表示（クリックしたら詳細ページに遷移する）

## ユーザー編集　
![mypage-edit](https://user-images.githubusercontent.com/68550855/104797172-74a24280-57ff-11eb-817d-7299fcf6d704.gif)

- トプ画のプレビュー機能
- 「トプ画を選択」をクリックしたら表示されているトプ画を消す
- アカウント情報を変更する際は、変更前のパスワード入力をしなければ変更できない。

## ユーザー検索
![user-search](https://user-images.githubusercontent.com/68550855/104797093-ed54cf00-57fe-11eb-902b-3cf0626907ce.gif)

- ユーザー名のキーワード検索機能
- 空欄でクリックしたら全てのユーザーを表示
- 表示されたユーザーをクリックしたらユーザーページに遷移する

