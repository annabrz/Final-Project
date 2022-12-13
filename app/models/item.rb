class Item < ApplicationRecord
    belongs_to :buyer
    belongs_to :seller
end
