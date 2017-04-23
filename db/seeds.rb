# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

profile_pictures = ['prof_pic1.jpg', "prof_pic2.jpeg", 'prof_pic3.jpg', "prof_pic4.png", "prof_pic5.jpg"]
taskers = ['tasker1.jpg', 'tasker2.jpg', 'tasker3.jpg', 'tasker4.jpg']
sample_dates = (Date.today..Date.today + 12).to_a
sample_times = ['Morning', 'Afternoon', 'Evening', 'Anytime']

picture_print = File.open('app/assets/images/cleaning.jpg')
picture_chairs = File.open('app/assets/images/chairs.jpg')
picture_couch = File.open('app/assets/images/couch-w-pillow.jpg')
picture_home = File.open('app/assets/images/home_improvements.jpg')
picture_bed = File.open('app/assets/images/bed.jpg')
picture_tv = File.open('app/assets/images/tv.jpg')

category_names = ['Printing', 'Chairs', 'Couch', 'Home', 'Bed', 'TV']
category_descriptions = [
  'Printing, organizing, stapling galore',
  'Stack the chairs',
  'Sit on the couch',
  'Go home and do stuff',
  'Sleep in the bed',
  'Cool tv bro'
 ]

category_images = [ picture_print, picture_chairs, picture_couch, picture_home, picture_bed ]
category_ids = []
regular_user_ids = []

Skill.destroy_all
User.destroy_all
Category.destroy_all
Task.destroy_all
Availability.destroy_all

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
  locality: 'New York City',
  zip_code: '10031',
  avatar: File.open("app/assets/images/profile_pictures/regular_users/#{profile_pictures.sample}")
)

# Faker::Boolean.boolean(true_ratio = 0.5)

15.times do
  # generate regular users
  User.create!(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    password: Faker::Internet.password(min_length = 8, max_length = 16),
    email: Faker::Internet.email,
    tasker: false,
    phone_number: Faker::PhoneNumber.cell_phone,
    locality: Faker::Address.city,
    zip_code: Faker::Address.zip_code,
    avatar: File.open("app/assets/images/profile_pictures/regular_users/#{profile_pictures.sample}")
  )

  regular_user_ids << User.last.id
end

15.times do
# generate taskers
  User.create!(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    password: Faker::Internet.password(min_length = 8, max_length = 16),
    email: Faker::Internet.email,
    tasker: true,
    phone_number: Faker::PhoneNumber.cell_phone,
    locality: Faker::Address.city,
    zip_code: Faker::Address.zip_code,
    avatar: File.open("app/assets/images/profile_pictures/taskers/#{taskers.sample}")
  )

  4.times do
  Skill.create(
    tasker_id: User.last.id,
    category_id: category_ids.sample,
    pitch: Faker::Lorem.paragraph,
    price: Faker::Commerce.price,
    reviews: Faker::Lorem.sentences,
    quote: Faker::Lorem.sentence,
    author_id: regular_user_ids.sample
  )
  end


  # generate availabilities for tasker just created
  30.times do
    Availability.create(
      date: sample_dates.sample,
      time: sample_times.sample,
      tasker_id: User.last.id
    )
  end

  Task.create!(
    description: Faker::ChuckNorris.fact,
    location: Faker::Address.street_address,
    locality: Faker::Address.city,
    date: Faker::Date.between(2.days.ago, Date.today),
    time: "Morning",
    requestor_id: User.first.id,
    category_id: Category.first.id,
    tasker_id: User.last.id
  )
end
