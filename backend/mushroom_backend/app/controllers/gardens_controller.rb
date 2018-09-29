class GardensController < ApplicationController
  def index
    @gardens = Garden.all
    render json: @gardens
  end
end
