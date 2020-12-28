class TweetsController < ApplicationController
  before_action :move_to_index, except: [:index, :show]
  def index
    @tweets = Tweet.includes(:user)
    @tweets = Tweet.all.order(created_at: :desc)
    @image = current_user.image
    @nickname = current_user.nickname
  end

  def new
    @tweet = Tweet.new
    # tweet = Tweet.find(params[:id])
  end

  def create
    Tweet.create(tweet_params)
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy
  end


  # def show
  #   @tweet = Tweet.find(params[:id])
  # end

  private
  def tweet_params
    params.require(:tweet).permit(:name, :image, :text).merge(user_id: current_user.id)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end