class Subtask < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :task

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
