class SessionsController < ApplicationController
  def create
    u = User.find_by(email: params[:session][:email])
    if u && u.authenticate(params[:session][:password])
      remember u
      render json:  {status: 'ok',data: u.remember_digest, userName: u.name, email: u.email}
    else
      back_json 'ng', u.errors
    end
  end

  def login

  end
end
