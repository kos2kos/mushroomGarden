class CreateGardenMushrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :garden_mushrooms do |t|
      t.integer :garden_id
      t.integer :mushroom_id

    end
  end
end
