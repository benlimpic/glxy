class CreateSubtasks < ActiveRecord::Migration[7.0]
  def change
    create_table :subtasks do |t|
      t.string :title
      t.string :description
      t.text :body
      t.string :priority
      t.string :life_cycle
      t.string :slug
      t.belongs_to :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
