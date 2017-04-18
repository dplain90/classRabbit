class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :phone_number, null: false
      t.string :zip_code, null: false
      t.string :locality, null: false
      t.boolean :tasker, :default => true, null: false
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :locality
  end
end
