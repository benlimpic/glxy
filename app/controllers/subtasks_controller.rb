class SubtasksController < ApplicationController
  before_action :set_subtask, only: %i[ show update destroy ]

  # GET /subtasks
  def index
    @subtasks = Subtask.all

    render json: @subtasks
  end

  # GET /subtasks/1
  def show
    render json: @subtask
  end

  # POST /subtasks
  def create
    @subtask = Subtask.new(subtask_params)

    if @subtask.save
      render json: @subtask, status: :created, location: @subtask
    else
      render json: @subtask.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subtasks/1
  def update
    if @subtask.update(subtask_params)
      render json: @subtask
    else
      render json: @subtask.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subtasks/1
  def destroy
    @subtask.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subtask
      @subtask = Subtask.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def subtask_params
      params.require(:subtask).permit(:title, :description, :body, :priority, :life_cycle, :task_id)
    end
end
