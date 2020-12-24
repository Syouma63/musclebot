class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @image = current_user.image
    @tweets = current_user.tweets
    # binding.pry
  end
end
