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
  validates :password, length: { minimum: 6}, allow_nil: true

  scope :is_tasker, ->  { where(tasker: true) }

  has_attached_file :avatar, default_url: "default_avatar.jpg", :styles => {
      :thumb => "50x50#",
      :small  => "72x72>",
      :medium => "200x200" }

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_reader :password

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def task_count(category_id)
    self.assigned_tasks.where(category_id: category_id).count
  end

  def review_count(category_id)
    self.skills.where(category_id: category_id).first.reviews.count
  end

  def self.recent_availabilities(taskers, start_date, end_date)
    all_availabilities = []
    taskers.each do |tasker|
      tasker.availabilities.where("availabilities.date >= ? AND availabilities.date <= ?", start_date, end_date).each do |availability|
        all_availabilities << availability
      end
    end

    all_availabilities.sort { |a, b| a.date <=> b.date }
  end

  def self.in_region_with_skill(locality, category_id)
    @taskers = User.is_tasker
    .where(locality: locality)
    .joins(:categories)
    .where('categories.id = ?', category_id)
    .includes(:skills)
    .where(skills: {category_id: category_id })
  end

  has_many :categories,
  through: :skills,
  source: :category


  has_many :requested_tasks,
  primary_key: :id,
  foreign_key: :requestor_id,
  class_name: "Task"

  has_many :assigned_tasks,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "Task"

  has_many :availabilities,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "Availability"

  has_many :skills,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "Skill"

  has_many :quotes,
  primary_key: :id,
  foreign_key: :quote_author_id,
  class_name: "Skill"

  belongs_to :region,
  primary_key: :locality,
  foreign_key: :locality,
  class_name: "Region"


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
