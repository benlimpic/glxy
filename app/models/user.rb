class User < ApplicationRecord

  has_many :projects, dependent: :destroy

  validates :username, presence: true, uniqueness: true

  has_secure_password
end
