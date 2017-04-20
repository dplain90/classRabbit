class Category < ApplicationRecord
  validates :title, :description, presence: true
  has_attached_file :image, default_url: "cleaning.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
