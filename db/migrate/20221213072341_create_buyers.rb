class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :name
      t.string :email
      

      t.timestamps
    end
  end
end
