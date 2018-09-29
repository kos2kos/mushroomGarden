class UserGardensController < ApplicationController
  def index
    @user_gardens = UserGarden.all
    render json: @user_gardens
  end


end
