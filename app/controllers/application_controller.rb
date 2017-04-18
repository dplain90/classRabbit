class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    user = User.find_by(session_token: session[:session_token])
    user ? user : nil
  end

  def logged_in?
    current_user.nil?
  end

  def log_in!
    current_user.reset_session_token!
    session[:session_token] = current_user.session_token
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = ""
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
