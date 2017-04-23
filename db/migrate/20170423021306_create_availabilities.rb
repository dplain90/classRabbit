class CreateAvailabilities < ActiveRecord::Migration[5.0]
  def change
    create_table :availabilities do |t|
      t.integer :tasker_id, null: false
      t.date :date, null: false
      t.string :time, null: false
    end

    add_index :availabilities, :tasker_id
    add_index :availabilities, [:date, :time]
  end
end
