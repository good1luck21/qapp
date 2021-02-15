class AnswersController < ApplicationController

    def index
        qs = Question.find(params[:question_id])
        @as = qs.answers
        render json: @as
    end

    def show
        qs = Question.find_by(id: params[:id])
        @a = qs.answers.first
        if @a
            render json: { status: 'got', answer: @a }
        else
            render json: { status: 'falied', answer: @a }
        end
    end

end
