class ScorecardsController < ApplicationController

    def index 
        @scorecards = Scorecard.all

        render json: @scorecards, include: [:players, :courses]
    end

    def destroy
        @scorecard = Scorecard.find(params[:id])
        @scorecard.destroy
        render json: "Scorecard #{@scorecard.id} has been deleted"
    end

end
