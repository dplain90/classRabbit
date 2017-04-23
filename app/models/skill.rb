class Skill < ApplicationRecord
  validates :tasker_id, :category_id, :pitch, :price, :reviews, presence: true
  validates_uniqueness_of :tasker_id, :scope => :category_id

  belongs_to :tasker,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "User"

  belongs_to :category,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: "Category"

  belongs_to :quote_author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"
  
end
