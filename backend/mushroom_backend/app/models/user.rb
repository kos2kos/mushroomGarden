class User < ApplicationRecord
  has_many :user_gardens
  has_many :gardens, through: :user_gardens


end
