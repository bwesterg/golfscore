class CreateScorecards < ActiveRecord::Migration[7.0]
  def change
    create_table :scorecards do |t|
      t.text :description

      t.timestamps
    end
  end
end
