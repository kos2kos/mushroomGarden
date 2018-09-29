class UserSerializer < ActiveModel::Serializer
  has_many :user_gardens
  has_many :gardens

  attributes :id, :username, :password, :amount, :gardens
end
