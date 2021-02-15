class Question < ApplicationRecord
    has_many :answers, class_name: "Answer"
    belongs_to :user, class_name: "User", foreign_key: "user_id"
    extend ActiveHash::Associations::ActiveRecordExtensions
    belongs_to :category
end
