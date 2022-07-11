class Project < ApplicationRecord
  has_many :tasks
  has_many :subtasks, through: :tasks

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
