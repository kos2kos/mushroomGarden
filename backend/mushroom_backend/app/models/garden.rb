class Garden < ApplicationRecord
  has_many :user_gardens
  has_many :garden_mushrooms
  has_many :mushrooms, through: :garden_mushrooms
  has_many :users, through: :user_gardens

end
