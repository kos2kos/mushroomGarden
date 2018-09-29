class CreateUserGardens < ActiveRecord::Migration[5.2]
  def change
    create_table :user_gardens do |t|
      t.integer :garden_id
      t.integer :user_id

    end
  end
end
