# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_12_030724) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.text "body"
    t.string "priority"
    t.string "life_cycle"
    t.string "slug"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "subtasks", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.text "body"
    t.string "priority"
    t.string "life_cycle"
    t.string "slug"
    t.bigint "project_id", null: false
    t.bigint "task_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_subtasks_on_project_id"
    t.index ["task_id"], name: "index_subtasks_on_task_id"
    t.index ["user_id"], name: "index_subtasks_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.text "body"
    t.string "priority"
    t.string "life_cycle"
    t.string "slug"
    t.bigint "project_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_tasks_on_project_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "projects", "users"
  add_foreign_key "subtasks", "projects"
  add_foreign_key "subtasks", "tasks"
  add_foreign_key "subtasks", "users"
  add_foreign_key "tasks", "projects"
  add_foreign_key "tasks", "users"
end
