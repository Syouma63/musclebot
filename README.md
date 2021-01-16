# タイトル：MuscleBot
## 概要
railsを使用し、トレーニングに特化したSNSを開発しました。
このアプリケーションを使用して、多くのアスリートのトレーニングをしり、
効率よく自身のレベルアップやスポーツ全体の底上げができます。

## URL 
http://54.199.50.192:3000/
## ログイン時のEmail・PASS
- Email: taro@taro
- PASS: tarotaro

## トップページ
![video](https://user-images.githubusercontent.com/68550855/104807684-0b80f600-5824-11eb-940e-5969d8166ff4.gif)

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
![tweet-show](https://user-images.githubusercontent.com/68550855/104807601-7b42b100-5823-11eb-8356-e56107196d44.gif)

- いいね機能(ajax)
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

***


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false|
|image|string|
|text|text|

### Association
- has_many :tweets, dependent: :destroy
- has_many :likes, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_many :follower, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy 
- has_many :followed, class_name: "Relationship", foreign_key: "followed_id", dependent: :destroy
- has_many :following_user, through: :follower, source: :followed
- has_many :follower_user, through: :followed, source: :follower

### tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|text|text|null: false|
|video|string||
|user_id|integer|null: false|
|likes_count|integer|default: "0"|

### Association

- belongs_to :user
- has_many :comments, dependent: :destroy
- has_many :likes, dependent: :destroy


### commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|
|tweet_id|integer|
|text|text|

### Association

- belongs_to :tweet
- belongs_to :user
- validates :text, presence: true


### relationshipsテーブル

|Column|Type|Options|
|------|----|-------|
|follower_id|integer|
|followed_id|integer|

### Association

- belongs_to :follower, class_name: "User"
- belongs_to :followed, class_name: "User"

### likesテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|tweet|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :tweet, counter_cache: :likes_count