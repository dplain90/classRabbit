# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170423043602) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.integer "tasker_id", null: false
    t.date    "date"
    t.string  "time"
    t.index ["tasker_id", "time", "date"], name: "index_availabilities_on_tasker_id_and_time_and_date", unique: true, using: :btree
    t.index ["tasker_id"], name: "index_availabilities_on_tasker_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title",              null: false
    t.text     "description",        null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "regions", force: :cascade do |t|
    t.string   "locality"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locality"], name: "index_regions_on_locality", unique: true, using: :btree
  end

  create_table "skills", force: :cascade do |t|
    t.integer  "tasker_id",                null: false
    t.integer  "category_id",              null: false
    t.text     "pitch",                    null: false
    t.decimal  "price",                    null: false
    t.text     "reviews",     default: [],              array: true
    t.text     "quote"
    t.integer  "author_id"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.index ["author_id"], name: "index_skills_on_author_id", using: :btree
    t.index ["category_id"], name: "index_skills_on_category_id", using: :btree
    t.index ["tasker_id", "category_id"], name: "index_skills_on_tasker_id_and_category_id", unique: true, using: :btree
    t.index ["tasker_id"], name: "index_skills_on_tasker_id", using: :btree
  end

  create_table "tasks", force: :cascade do |t|
    t.text    "description",  null: false
    t.string  "location",     null: false
    t.string  "locality",     null: false
    t.date    "date",         null: false
    t.string  "time",         null: false
    t.integer "requestor_id", null: false
    t.integer "category_id",  null: false
    t.integer "tasker_id",    null: false
    t.index ["category_id"], name: "index_tasks_on_category_id", using: :btree
    t.index ["requestor_id"], name: "index_tasks_on_requestor_id", using: :btree
    t.index ["tasker_id"], name: "index_tasks_on_tasker_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",                              null: false
    t.string   "lname",                              null: false
    t.string   "email",                              null: false
    t.string   "password_digest",                    null: false
    t.string   "session_token",                      null: false
    t.string   "phone_number",        default: "",   null: false
    t.string   "zip_code",                           null: false
    t.string   "locality",                           null: false
    t.boolean  "tasker",              default: true, null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["locality"], name: "index_users_on_locality", using: :btree
  end

end
