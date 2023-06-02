Player.destroy_all
Scorecard.destroy_all

scorecards = Scorecard.create([
  {course_name: "Saint Andrews", tees_name: "Back Tees", tees_yardage: 15000},
  {course_name: "Augusta", tees_name: "The Pro Tees", tees_yardage: 10000},
  {course_name: "Pebble Beach", tees_name: "Blue Tees", tees_yardage: 8000},
])

# // Note: for production, I would map the holeX_scores to assign a value of zero to each of the 18 hole keys.  Leaving as-is due to time constraints

scorecards[0].players.create(name: "Benton Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[0].players.create(name: "Tiger Woods", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[0].players.create(name: "Greg Norman", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)

scorecards[1].players.create(name: "John Elway", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[1].players.create(name: "Charles Barkley", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[1].players.create(name: "Local Pro", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[1].players.create(name: "Benton Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)

scorecards[2].players.create(name: "Neil Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[2].players.create(name: "Dick Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[2].players.create(name: "Alan Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)
scorecards[2].players.create(name: "Benton Westergaard", hole1_score: 0, hole2_score: 0, hole3_score: 0, hole4_score: 0, hole5_score: 0, hole6_score: 0, hole7_score: 0, hole8_score: 0, hole9_score: 0, hole10_score: 0, hole11_score: 0, hole12_score: 0, hole13_score: 0, hole14_score: 0, hole15_score: 0, hole16_score: 0, hole17_score: 0, hole18_score: 0)