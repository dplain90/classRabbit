class Region < ApplicationRecord
  validates :locality, presence: true, uniqueness: true

  has_many :taskers,
  primary_key: :locality,
  foreign_key: :locality,
  class_name: "User"

  has_many :tasks,
  primary_key: :locality,
  foreign_key: :locality,
  class_name: "Task"

end
