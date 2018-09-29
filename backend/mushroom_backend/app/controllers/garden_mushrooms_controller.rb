class GardenMushroomsController < ApplicationController
  def index
    @garden_mushrooms = GardenMushroom.all
    render json: @garden_mushrooms
  end
end
