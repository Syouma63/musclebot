class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @nickname = current_user.nickname
    @image = current_user.image
    @tweets = Tweet.where(user_id: @user.id).order(created_at: :desc)
    @count = @tweets.count

  end


end
