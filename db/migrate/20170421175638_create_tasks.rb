class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.text :description, null: false
      t.string :location, null: false
      t.string :locality, null: false
      t.date :date, null: false
      t.string :time, null: false
      t.integer :requestor_id, null: false
      t.integer :category_id, null: false
      t.integer :tasker_id, null: false
    end

    add_index :tasks, :requestor_id
    add_index :tasks, :category_id
    add_index :tasks, :tasker_id
  end
end
