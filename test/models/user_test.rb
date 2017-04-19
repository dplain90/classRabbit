# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  fname               :string           not null
#  lname               :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  phone_number        :string           not null
#  zip_code            :string           not null
#  locality            :string           not null
#  tasker              :boolean          default("true"), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
