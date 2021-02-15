class UsersController < ApplicationController
    def create
        p params
        @u = User.new(u_params)
        if @u.save
            remember @u
            render json: {status: 'success', user: @u}
        else
            render json: {status: 'failed', user: @u.errors}
        end
    end

    def u_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
