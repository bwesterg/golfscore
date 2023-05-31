# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Player.destroy_all
Scorecard.destroy_all
Course.destroy_all


scorecard1 = Scorecard.create(description: "a bonny day for golf")
scorecard2 = Scorecard.create(description: "battle for a new pair of socks")
scorecard3 = Scorecard.create(description: "match for all the marbles")

augusta = Course.create(name: "Augusta", tee1: "Black Tees", tee2: "Blue Tees", tee3: "Red Tees", tee1_yardage: 8000, tee2_yardage: 7500, tee3_yardage: 7000)
pebble_beach = Course.create(name: "Pebble Beach", tee1: "Purple", tee2: "Yellow Tees", tee3: "Orange Tees", tee1_yardage: 9000, tee2_yardage: 8500, tee3_yardage: 8000)
saint_andrews = Course.create(name: "Saint Andrews", tee1: "Orange", tee2: "Brown", tee3: "Ach!", tee1_yardage: 20000, tee2_yardage: 15000, tee3_yardage: 400)

benton = Player.create(name: "Benton Westergaard", hole1_score: 4, hole2_score: 5, hole3_score: 4, hole4_score: 4, hole5_score: 5, hole6_score: 3, hole7_score: 4, hole8_score: 3, hole9_score: 4, hole10_score: 4, hole11_score: 5, hole12_score: 3, hole13_score: 8, hole14_score:5, hole15_score: 4, hole16_score: 3, hole17_score: 4, hole18_score: 7, scorecard: scorecard1, course: saint_andrews)
tiger = Player.create(name: "Tiger Woods", hole1_score: 4, hole2_score: 5, hole3_score: 4, hole4_score: 4, hole5_score: 5, hole6_score: 3, hole7_score: 4, hole8_score: 3, hole9_score: 4, hole10_score: 4, hole11_score: 5, hole12_score: 3, hole13_score: 8, hole14_score:5, hole15_score: 4, hole16_score: 3, hole17_score: 4, hole18_score: 7, scorecard: scorecard1, course: saint_andrews)
shark = Player.create(name: "Greg Norman", hole1_score: 1, hole2_score: 1, hole3_score: 1, hole4_score: 1, hole5_score: 2, hole6_score: 1, hole7_score: 1, hole8_score: 1, hole9_score: 2, hole10_score: 5, hole11_score: 5, hole12_score: 1, hole13_score: 8, hole14_score:5, hole15_score: 4, hole16_score: 45, hole17_score: 4, hole18_score: 99, scorecard: scorecard1, course: saint_andrews)