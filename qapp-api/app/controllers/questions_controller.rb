class QuestionsController < ApplicationController
    def index
        @qs = Question.all
        @cs = Category.all
        @jobs = Question.all
        @as = []
        @qs.each do |q|
          @as.push(q.answers.first)
        end
        if @qs
            render json: {status: 'got', qs: @qs, cs: @cs, as: @as, job: @jobs}
        else
            render json: { status: 'failed', q: @q }
        end
    end

    def show
        @q = Question.find(params[:id])
        @as = @q.answers
        if @q
            render json: { status: 'got', q: @q, as: @as }
        else
            render json: { status: 'failed', q: @q }
        end
    end

    def create
        @q = Question.new(q_params)
        if @q.save
            render json: { status: 'created', q: @q }
        else
            render json: { status: 'failed', q: @q.errors }
        end
    end

    private
        def q_params
            params.require(:question).permit(:title, :content, :category_id)
        end
end
