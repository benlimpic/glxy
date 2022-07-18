class SubtaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :priority, :life_cycle, :slug, :project_id, :task_id, :user_id
  belongs_to :task
end
