class CreateRegions < ActiveRecord::Migration[5.0]
  def change
    create_table :regions do |t|
      t.string :locality
      t.timestamps
    end
    add_index :regions, :locality, unique: true
  end
end
