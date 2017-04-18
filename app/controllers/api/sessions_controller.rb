class Api::SessionController < ApplicationController

  	def create
  		@user = User.find_by_credentials(user_params[:email], user_params[:password))
      if @user
  			login!(@user)
  			render "api/users/show"
  		else
  			render(
          json: ["Invalid login"],
          status: 401
        )
  		end
  	end

  	def destroy
  		@user = current_user
  		if @user
  			logout!
  			render "api/users/show"
  		else
  			render(
          json: ["Not signed in"],
          status: 404
        )
  		end
  	end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
