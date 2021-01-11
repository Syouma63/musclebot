class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @nickname = current_user.nickname
    @image = current_user.image
    @tweets = Tweet.where(user_id: @user.id).order(created_at: :desc)
    @count = @tweets.count
    @users = @user.follower.all
    @following_user = current_user.following_user
    @follower_user = current_user.follower_user

  end
  
end
