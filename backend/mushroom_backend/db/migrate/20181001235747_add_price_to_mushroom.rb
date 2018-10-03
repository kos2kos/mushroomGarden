class AddPriceToMushroom < ActiveRecord::Migration[5.2]
  def change
    add_column :mushrooms, :price, :integer
  end
end
