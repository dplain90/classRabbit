class Category < ApplicationRecord
  validates :title, :description, presence: true
  has_attached_file :image, default_url: "cleaning.jpg", :styles => {
      :thumb => "75x75#",
      :small  => "550x400>",
      :medium => "200x200" }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :tasks,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: "Task"

end
