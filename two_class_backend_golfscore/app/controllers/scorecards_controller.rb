class ScorecardsController < ApplicationController

    def index 
        @scorecards = Scorecard.all

        render json: @scorecards, include: [:players]
    end

    def show
        @scorecard = Scorecard.find(params[:id])

        render json: @scorecard, include: [:players]

    end
end
