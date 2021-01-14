class TweetsController < ApplicationController
  before_action :move_to_index, except: [:index, :show, :search]
  def index
    @tweets = Tweet.includes(:user)
    @tweets = @tweets.where(user_id: [current_user.id, *current_user.following_user]).order(created_at: :desc)
    @image = current_user.image
    @nickname = current_user.nickname
    @user = User.where(params[:id])
  end

  def new
    @tweet = Tweet.new
    # tweet = Tweet.find(params[:id])
  end

  def create
    @tweet = Tweet.create(tweet_params)
    if @tweet.save
      redirect_to tweets_path, notice: "投稿しました。"
    else
      flash[:alert] = @tweet.errors.full_messages.join(',')
      render :new        
    end
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    # tweet.update(tweet_params)

    if tweet.update(tweet_params)
      redirect_to tweets_path, notice: "ツイートが更新されました。"
    else
      flash[:alert] = tweet.errors.full_messages.join(',')
      redirect_to edit_tweet_path        
    end

  end

  def show
    @tweet = Tweet.find(params[:id])
    @comment = Comment.new
    @comments = @tweet.comments.includes(:user)
  end

  private
  def tweet_params
    params.require(:tweet).permit(:name, :video, :text).merge(user_id: current_user.id)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end