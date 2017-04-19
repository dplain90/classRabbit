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

class User < ApplicationRecord
  validates :fname, :lname, :email, :password_digest, :session_token, :zip_code, presence: true
  validates :password, length: { minimum: 6}, allow_nil: false

  has_attached_file :avatar, default_url: "bed.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_reader :password

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token_uniqueness
    # iterate over session toekn generating a new one until its new.
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
  end

end
