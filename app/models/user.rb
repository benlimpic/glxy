class User < ApplicationRecord
  has_many :projects, dependent: :destroy
  has_many :tasks, through: :projects
  has_many :subtasks, through: :tasks

  validates :username, presence: true, uniqueness: true

  has_secure_password
end
