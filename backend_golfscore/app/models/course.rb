class Course < ApplicationRecord
    has_many :players
    has_many :scorecards, through: :players
end
