class Task < ApplicationRecord
  validates :description, :locality, :date, :time, :requestor_id, :category_id, :tasker_id, presence: true

  belongs_to :category,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: "Category"

  belongs_to :requestor,
  primary_key: :id,
  foreign_key: :requestor_id,
  class_name: "User"

  belongs_to :tasker,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "User"
end
