class Availability < ApplicationRecord
  validates :tasker_id, :date, :time, presence: true
  validates :tasker_id, uniqueness: {scope: [:date, :time]}
  belongs_to :tasker,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "User"
end
