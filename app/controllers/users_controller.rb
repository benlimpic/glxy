class UsersController < ApplicationController

  def signup
      puts "Building Profile"
      new_user = User.create!(user_params)
      session[:user_id] = new_user.id
      render json: new_user, status: 201
  end

  def me
      puts "Getting Profile"
      current_user = User.find(session[:user_id])
      render json: current_user
  end

  private

  def user_params
      params.permit(:name, :email, :username, :password, :password_confirmation)
  end

end
