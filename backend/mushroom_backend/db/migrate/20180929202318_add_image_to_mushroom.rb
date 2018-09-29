class AddImageToMushroom < ActiveRecord::Migration[5.2]
  def change
    add_column :mushrooms, :image, :string
  end
end
