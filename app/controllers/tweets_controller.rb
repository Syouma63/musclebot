class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
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
    params.require(:tweet).permit(:name, :image, :text)
  end
end