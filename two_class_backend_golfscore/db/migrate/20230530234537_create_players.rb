class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :hole1_score
      t.integer :hole2_score
      t.integer :hole3_score
      t.integer :hole4_score
      t.integer :hole5_score
      t.integer :hole6_score
      t.integer :hole7_score
      t.integer :hole8_score
      t.integer :hole9_score
      t.integer :hole10_score
      t.integer :hole11_score
      t.integer :hole12_score
      t.integer :hole13_score
      t.integer :hole14_score
      t.integer :hole15_score
      t.integer :hole16_score
      t.integer :hole17_score
      t.integer :hole18_score
      t.references :scorecard, null: false, foreign_key: true

      t.timestamps
    end
  end
end

# // Note: for production, I would create a function to map destructured holeX_scores.  Leaving as-is due to time constraints
