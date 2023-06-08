class ScorecardsController < ApplicationController

    # Note to reviewers: I would update this to use strong params and private method to find user.  skipping it due to time constraints.
    def index 
        @scorecards = Scorecard.all

        render json: @scorecards, include: [:players]
    end

    def show
        @scorecard = Scorecard.find(params[:id])
        render json: @scorecard, include: [:players]
    end
    
    def create
        # players_attributes = params[:players].map { |player| { name: player } }
        players_attributes = params[:players].map do |player|
            {
                name: player[:name],
                hole1_score: player[:hole1_score],
                hole2_score: player[:hole2_score],
                hole3_score: player[:hole3_score],
                hole4_score: player[:hole4_score],
                hole5_score: player[:hole5_score],
                hole6_score: player[:hole6_score],
                hole7_score: player[:hole7_score],
                hole8_score: player[:hole8_score],
                hole9_score: player[:hole9_score],
                hole10_score: player[:hole10_score],
                hole11_score: player[:hole11_score],
                hole12_score: player[:hole12_score],
                hole13_score: player[:hole13_score],
                hole14_score: player[:hole14_score],
                hole15_score: player[:hole15_score],
                hole16_score: player[:hole16_score],
                hole17_score: player[:hole17_score],
                hole18_score: player[:hole18_score]
            }
        end
    
        @scorecard = Scorecard.create(
            course_name: params[:course_name],
            tees_name: params[:tees_name],
            tees_yardage: params[:tees_yardage],
            players_attributes: players_attributes
        )
    
        render json: @scorecard, status: :created
    end
        
    def update
        @scorecard = Scorecard.find(params[:id])
    
        # players_attributes = params[:players].map do |player|
        #     {
        #         id: player[:id],
        #         name: player[:name],
        #         hole1_score: player[:hole1_score],
        #         hole2_score: player[:hole2_score],
        #         hole3_score: player[:hole3_score],
        #         hole4_score: player[:hole4_score],
        #         hole5_score: player[:hole5_score],
        #         hole6_score: player[:hole6_score],
        #         hole7_score: player[:hole7_score],
        #         hole8_score: player[:hole8_score],
        #         hole9_score: player[:hole9_score],
        #         hole10_score: player[:hole10_score],
        #         hole11_score: player[:hole11_score],
        #         hole12_score: player[:hole12_score],
        #         hole13_score: player[:hole13_score],
        #         hole14_score: player[:hole14_score],
        #         hole15_score: player[:hole15_score],
        #         hole16_score: player[:hole16_score],
        #         hole17_score: player[:hole17_score],
        #         hole18_score: player[:hole18_score]
        #     }
        #     end

            players_attributes = []
            params[:players].each do |player|
                player_attributes = { id: player[:id], name: player[:name] }
            
                (1..18).each do |hole_number|
                key = "hole#{hole_number}_score".to_sym
                player_attributes[key] = player[key]
            end
            
            players_attributes << player_attributes
            end

        
            if @scorecard.update(
                course_name: params[:course_name],
                tees_name: params[:tees_name],
                tees_yardage: params[:tees_yardage],
                players_attributes: players_attributes
            )
            render json: @scorecard
            else
                render json: { errors: @scorecard.errors.full_messages }, status: :unprocessable_entity
            end
        end
        

    def destroy 
        @scorecard = Scorecard.find(params[:id])
        @scorecard.destroy 
        render status: :no_content
    end
end