class SubtaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :priority, :life_cycle, :slug, :task_id 
  has_one :task
end
