class ChangeUserPhoneNumber < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :phone_number, :string, :default => ""
  end
end
