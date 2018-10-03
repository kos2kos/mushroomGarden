class GardensController < ApplicationController
  def index
    @gardens = Garden.all
    render json: @gardens
  end

  def show
    @garden = Garden.find(params[:id])
    render json: @garden
  end

  def edit
    @garden = Garden.find(params[:id])
  end

  def update
    @garden = Garden.find(params[:id])
    arrayOfIds = params[:mushrooms].map {|mush| mush[:id]}
    @garden.update(mushroom_ids: arrayOfIds)
    render json: @garden
  end

end
