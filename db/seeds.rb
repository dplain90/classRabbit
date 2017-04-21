# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
profile_pictures = ['prof_pic1.jpg', "prof_pic2.jpeg", 'prof_pic3.jpg', "prof_pic4.png", "prof_pic5.jpg"]

User.destroy_all
Category.destroy_all
Task.destroy_all

picture_print = File.open('app/assets/images/cleaning.jpg')
picture_chairs = File.open('app/assets/images/chairs.jpg')
picture_couch = File.open('app/assets/images/couch-w-pillow.jpg')
picture_home = File.open('app/assets/images/home_improvements.jpg')
picture_bed = File.open('app/assets/images/bed.jpg')
picture_tv = File.open('app/assets/images/tv.jpg')

Category.create!(title: 'Printing', description: 'Printing, organizing, stapling galore', image: picture_print)

Category.create!(title: 'Chairs', description: 'Stack the chairs', image: picture_chairs)

Category.create!(title: 'Couch', description: 'Sit on the couch', image: picture_couch)

Category.create!(title: 'Home', description: 'Go home and do stuff', image: picture_home)

Category.create!(title: 'Bed', description: 'Sleep in the bed', image: picture_bed)

Category.create!(title: 'TV', description: 'Cool tv bro', image: picture_tv)

User.create!(
  fname: 'Guest',
  lname: 'Account',
  password: 'starwars',
  email: 'guest@classrabbit.com',
  tasker: false,
  phone_number: '8453921200',
  locality: 'New York City',
  zip_code: '10031',
  avatar: File.open("app/assets/images/profile_pictures/#{profile_pictures.sample}")
)

15.times do
  User.create!(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    password: Faker::Internet.password(min_length = 8, max_length = 16),
    email: Faker::Internet.email,
    tasker: Faker::Boolean.boolean(true_ratio = 0.5),
    phone_number: Faker::PhoneNumber,
    locality: Faker::Address.city,
    zip_code: Faker::Address.zip_code,
    avatar: File.open("app/assets/images/profile_pictures/#{profile_pictures.sample}")
  )

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
