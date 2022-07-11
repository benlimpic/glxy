class Task < ApplicationRecord
  has_many :subtasks
  belongs_to :project

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
