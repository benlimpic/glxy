class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.text :body
      t.string :priority
      t.string :life_cycle
      t.string :slug

      t.timestamps
    end
  end
end
