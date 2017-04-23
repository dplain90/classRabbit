class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.integer :tasker_id, null: false
      t.integer :category_id, null: false
      t.text :pitch, null: false
      t.decimal :price, null: false
      t.text :reviews, array: true, default: []
      t.string :phone_number, null: false
      t.text :quote
      t.integer :author_id
      t.timestamps null: false
    end
    add_index :skills, :tasker_id
    add_index :skills, :category_id
    add_index :skills, :author_id
    add_index :skills, [:tasker_id, :category_id], unique: true
  end
end
