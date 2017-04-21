class Api::TasksController < ApplicationController

  def index
    @tasks = current_user.requested_tasks.joins(:category).includes(:tasker)
    render 'api/tasks/index'
  end

  def create


  end

  def destroy

  end


  def update

  end
end
