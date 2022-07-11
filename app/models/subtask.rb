class Subtask < ApplicationRecord
  belongs_to :task

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
