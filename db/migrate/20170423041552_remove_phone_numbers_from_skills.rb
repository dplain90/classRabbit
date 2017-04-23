class RemovePhoneNumbersFromSkills < ActiveRecord::Migration[5.0]
  def change
    remove_column :skills, :phone_number
  end
end
