class ProjectsController < ApplicationController
  before_action :set_project, only: %i[ show update destroy ]

  # GET /projects
  def index
    @projects = Project.all.where(user_id: session[:user_id])

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    if @project.destroy
      head :no_content
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.where(user_id: session[:user_id]).find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:title, :description, :body, :life_cycle, :priority, :user_id)
    end
end
