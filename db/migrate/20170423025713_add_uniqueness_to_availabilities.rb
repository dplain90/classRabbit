class AddUniquenessToAvailabilities < ActiveRecord::Migration[5.0]
  def change
    remove_column :availabilities, :date
    remove_column :availabilities, :time    
  end
end
