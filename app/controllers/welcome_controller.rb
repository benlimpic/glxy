class WelcomeController < ApplicationController

  def index
    render json: {message: "Welcome to the Task Manager API"}
  end

end
