class Scorecard < ApplicationRecord
    has_many :players, dependent: :destroy
    has_many :courses, through: :players

    def course_names
        courses.pluck(:name)
    end
end
