class Player < ApplicationRecord
  belongs_to :scorecard
  belongs_to :course
end
