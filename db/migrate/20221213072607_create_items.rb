class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.integer :price
      t.string :details
      t.string :condition
      t.string :image

      t.belongs_to :seller
      t.belongs_to :buyer

      t.timestamps
    end
  end
end
