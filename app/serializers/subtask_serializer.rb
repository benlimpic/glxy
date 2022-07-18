class SubtaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :priority, :life_cycle, :slug, :task_id, :user_id
  belongs_to :project
  belongs_to :task
end
