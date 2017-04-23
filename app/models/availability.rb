class Availability < ApplicationRecord
  validates :tasker_id, :date, :time, presence: true
  validates :tasker_id, uniqueness: {scope: [:date, :time]}


  belongs_to :tasker,
  primary_key: :id,
  foreign_key: :tasker_id,
  class_name: "User"


  def self.by_date(availabilities)
    date_hash = Hash.new {|hash, key| hash[key] = [] }
    availabilities.each do |availability|
      date_hash[availability.date] = date_hash[availability.date] << availability
    end

    date_hash
  end
end
