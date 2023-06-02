class PlayersController < ApplicationController
  def index
    @players = Player.all
    render json: @players
  end

  # def create
  #   @player = Player.create(player_params)
  #   render json: @player, status: :created
  # end

  def create
    @scorecard = Scorecard.find(params[:scorecard_id])
    @player = @scorecard.players.build(player_params)
  
    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  private

  # def player_params
  #   params.require(:player).permit(:name)
  # end

  def player_params
    params.require(:player).permit(:name, :hole1_score, :hole2_score, :hole3_score, :hole4_score, :hole5_score, :hole6_score, :hole7_score, :hole8_score, :hole9_score, :hole10_score, :hole11_score, :hole12_score, :hole13_score, :hole14_score, :hole15_score, :hole16_score, :hole17_score, :hole18_score)
  end
  
end
