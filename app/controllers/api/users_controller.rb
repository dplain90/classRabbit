class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
    @user.locality = "Thisistemporaryfiller"
		if @user.save
			log_in!(@user)
			render "api/users/show"
		else
			render json: @user.errors.messages, status: 422
		end
	end

  def update
    @user = User.find(params[:id])
    if @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy

    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def taskers
    @taskers = User.in_region_with_skill(params[:locality], params[:cid])
    @taskers.with_recent_availabilities(Date.today, Date.today + 5)
    render "api/users/taskers"
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end


	private

	def user_params
		params.require(:user).permit(:fname, :lname, :email, :password, :zip_code)
	end

end
