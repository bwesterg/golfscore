ActiveRecord::Schema[7.0].define(version: 2023_05_30_234537) do
  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "hole1_score"
    t.integer "hole2_score"
    t.integer "hole3_score"
    t.integer "hole4_score"
    t.integer "hole5_score"
    t.integer "hole6_score"
    t.integer "hole7_score"
    t.integer "hole8_score"
    t.integer "hole9_score"
    t.integer "hole10_score"
    t.integer "hole11_score"
    t.integer "hole12_score"
    t.integer "hole13_score"
    t.integer "hole14_score"
    t.integer "hole15_score"
    t.integer "hole16_score"
    t.integer "hole17_score"
    t.integer "hole18_score"
    t.integer "scorecard_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["scorecard_id"], name: "index_players_on_scorecard_id"
  end

  create_table "scorecards", force: :cascade do |t|
    t.string "course_name"
    t.string "tees_name"
    t.integer "tees_yardage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "players", "scorecards"
end
