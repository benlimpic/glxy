class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :priority, :life_cycle, :slug
  has_many :tasks
  has_many :subtasks, through: :tasks
end
