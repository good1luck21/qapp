class Answer < ApplicationRecord
    belongs_to :question, class_name: "Question"
    belongs_to :user, class_name: "User"
end
