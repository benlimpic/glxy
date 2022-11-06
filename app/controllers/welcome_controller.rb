class WelcomeController < ApplicationController

  def index
    # React app index page
    render file: 'client/public/index.html'
  end

end
