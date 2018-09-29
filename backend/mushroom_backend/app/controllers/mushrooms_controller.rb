class MushroomsController < ApplicationController
  def index
    @mushrooms = Mushroom.all
    render json: @mushrooms
  end
end
