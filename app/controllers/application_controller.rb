class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  private

  def render_invalid(err)
    render json: {errors: err.record.errors.full_messages}, status: 422
  end

  # def render_not_found(err)
  #   render json: {errors: err.errors.full_messages}, status: 404
  # end

  def render_unauthorized(err)
    render json: {errors: "Not Authorized"}, status: 401
  end

end