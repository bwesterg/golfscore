# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_30_215338) do
  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "tee1"
    t.string "tee2"
    t.string "tee3"
    t.integer "tee1_yardage"
    t.integer "tee2_yardage"
    t.integer "tee3_yardage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

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
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_players_on_course_id"
    t.index ["scorecard_id"], name: "index_players_on_scorecard_id"
  end

  create_table "scorecards", force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "players", "courses"
  add_foreign_key "players", "scorecards"
end
