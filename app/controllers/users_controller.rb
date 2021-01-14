class UsersController < ApplicationController
  before_action :move_to_index, except: [:index, :show, :search]
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
  
  def search
    @users = User.search(params[:keyword])
  end
end
