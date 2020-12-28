class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @image = current_user.image
    @tweets = Tweet.where(user_id: current_user.id).order(created_at: :desc)
    @count = @tweets.count
  #   tweet = @tweets.find(params[:id])
  #   # @tweet = @tweets.image
  #   binding.pry
  end
end
