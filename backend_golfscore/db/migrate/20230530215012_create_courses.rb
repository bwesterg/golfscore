class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :tee1
      t.string :tee2
      t.string :tee3
      t.integer :tee1_yardage
      t.integer :tee2_yardage
      t.integer :tee3_yardage

      t.timestamps
    end
  end
end
