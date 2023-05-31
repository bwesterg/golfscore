class CreateScorecards < ActiveRecord::Migration[7.0]
  def change
    create_table :scorecards do |t|
      t.string :course_name
      t.string :tees_name
      t.integer :tees_yardage

      t.timestamps
    end
  end
end
