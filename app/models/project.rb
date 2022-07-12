class Project < ApplicationRecord
  has_many :tasks, dependent: :destroy
  has_many :subtasks, through: :tasks
  belongs_to :user

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
