class CompleteUniquenessToAvailabilities < ActiveRecord::Migration[5.0]
  def change
    add_column :availabilities, :date, :date
    add_column :availabilities, :time, :string
    add_index :availabilities, [:tasker_id, :time, :date], unique: true
  end
end
