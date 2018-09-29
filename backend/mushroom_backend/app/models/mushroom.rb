class Mushroom < ApplicationRecord
  has_many :garden_mushrooms
  has_many :gardens, through: :garden_mushrooms
end
