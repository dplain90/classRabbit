# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
localities = [
  "Manhattan",
  "Queens",
  "Staten Island",
  "Brooklyn",
  "Bronx"
]

repairs = ['air conditioning unit', 'smartboard', 'computer']
events = ['field trip', 'assembly', 'recess']
paper_types = ['homework packets', 'field trip forms', 'tests']
room_numbers = ['209', '301', '422A', '102', '120']
groups = ['30', '40', '80']
#   Character.create(name: 'Luke', movie: movies.first)
descriptions = ["I need #{groups.sample} copies of the homework packets delivered to room #{room_numbers.sample} in the morning. Please print double-sided and paperclip in groups of #{groups.sample}.", "Need help with friday\'s #{events.sample}. Responsibilities will include behavior management and attendance.", "Need help with fixing air conditioning unit in room #{room_numbers.sample}. Unit will not turn on.", "Need help with fixing air conditioning unit in room #{room_numbers.sample}. Unit will not turn on.", "Need help with parent follow-up on health forms and attendance for #{Random.rand(6)} students." ]

profile_pictures = ['prof_pic1.jpg', "prof_pic2.jpeg", 'prof_pic3.jpg', "prof_pic4.png", "prof_pic5.jpg"]
taskers = ['tasker_prof1.jpg', 'tasker_prof2.jpeg', 'tasker_prof3.jpeg', 'tasker_prof4.jpeg', 'tasker1.jpg', 'tasker2.jpg', 'tasker3.png', 'tasker4.jpg', 'tasker5.jpg']
sample_dates = (Date.today..Date.today + 30).to_a
sample_times = ['Morning', 'Afternoon', 'Evening', 'Anytime']





picture_print = File.open('app/assets/images/printing.jpg')
picture_repair = File.open('app/assets/images/repairs.jpg')
picture_ta = File.open('app/assets/images/teaching_assistant.jpg')
picture_ordering = File.open('app/assets/images/ordering.jpg')
picture_attendance = File.open('app/assets/images/attendance.png')
picture_hard_drive = File.open('app/assets/images/hard_drive.jpg')

category_names = ['Printing', 'Maintanence', 'Classroom Support', 'Orders', 'Parent Support', 'Reformatting Hard Drives']
category_descriptions = [
  'Printing & organizing',
  'Maintanence & Repairs',
  'Teaching Support',
  'Supply delivery',
  'Parent follow-up',
  'Reformat your computer'
 ]

category_images = [ picture_print, picture_repair, picture_ta, picture_ordering, picture_attendance, picture_hard_drive ]
category_ids = []
regular_user_ids = []


Skill.destroy_all
User.destroy_all
Category.destroy_all
Task.destroy_all
Availability.destroy_all
Region.destroy_all

localities.each { |locality| Region.create!( locality: locality ) }

category_names.each_with_index do |category_name, idx|
  Category.create!(title: category_name, description: category_descriptions[idx], image: category_images[idx])
  category_ids << Category.last.id
end

# generate guest account
User.create!(
  fname: 'Guest',
  lname: 'Account',
  password: 'starwars',
  email: 'guest@classrabbit.com',
  tasker: false,
  phone_number: '8453921200',
  locality: 'Manhattan',
  zip_code: '10031',
  avatar: File.open("app/assets/images/profile_pictures/regular_users/#{profile_pictures.sample}")
)

# Faker::Boolean.boolean(true_ratio = 0.5)

  15.times do # generate regular users
    User.create!(
      fname: Faker::Name.first_name,
      lname: Faker::Name.last_name,
      password: Faker::Internet.password(min_length = 8, max_length = 16),
      email: Faker::Internet.email,
      tasker: false,
      phone_number: Faker::PhoneNumber.cell_phone,
      locality: localities.sample,
      zip_code: Faker::Address.zip_code,
      avatar: File.open("app/assets/images/profile_pictures/regular_users/#{profile_pictures.sample}")
    )

    regular_user_ids << User.last.id
  end
tasker_sample = []

  20.times do
    localities.each do |locality|
  # generate taskers
    User.create!(
      fname: Faker::Name.first_name,
      lname: Faker::Name.last_name,
      password: Faker::Internet.password(min_length = 8, max_length = 16),
      email: Faker::Internet.email,
      tasker: true,
      phone_number: Faker::PhoneNumber.cell_phone,
      locality: locality,
      zip_code: Faker::Address.zip_code,
      avatar: File.open("app/assets/images/profile_pictures/taskers/#{taskers.sample}")
    )
     tasker_sample << User.last.id
#give taskers skills
    5.times do
    Skill.create(
      tasker_id: User.last.id,
      category_id: category_ids.sample,
      pitch: Faker::Lorem.paragraph,
      price: Faker::Commerce.price,
      reviews: Faker::Lorem.sentences * Random.rand(5),
      quote: Faker::Lorem.sentence,
      author_id: regular_user_ids.sample
    )
    end


  # generate availabilities for tasker just created
  2.times do
    sample_dates.each do |date|
      Availability.create(
        date: date,
        time: sample_times.sample,
        tasker_id: User.last.id
      )
    end
  end
  #make some tasks!
end
end


3.times do
  Task.create!(
  description: descriptions.sample,
  location: Faker::Address.street_address,
  locality: localities.sample,
  date: Faker::Date.between(Date.today, Date.today + 7),
  time: "Morning",
  requestor_id: User.first.id,
  category_id: Category.first.id,
  tasker_id: tasker_sample.sample
  )
end
