class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :priority, :life_cycle, :slug, :project_id, :user_id
  belongs_to :project
  has_many :subtasks
end
