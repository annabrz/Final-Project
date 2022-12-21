class AddConditionToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :condition, :string
  end
end
