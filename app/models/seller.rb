class Seller < ApplicationRecord
    has_many :items
    has_many :buyers, through: :items
end
