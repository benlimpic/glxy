class Task < ApplicationRecord
  belongs_to :user
  belongs_to :project
  has_many :subtasks, dependent: :destroy

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
