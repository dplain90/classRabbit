class Api::TasksController < ApplicationController

  def index
    @tasks = current_user.requested_tasks.joins(:category).includes(:tasker)
    render 'api/tasks/index'
  end

  def create
    @task = Task.new(task_params)
    @task.requestor_id = current_user.id
    if @task.save
      redirect_to 'api/tasks/index'
    else
      render json: @task.errors.messages, status: 422
    end
  end

  def destroy

  end


  def update

  end

  private

  def task_params
    params.require(:task).permit(:description, :location, :locality, :date, :time, :category_id, :tasker_id)
  end
end
