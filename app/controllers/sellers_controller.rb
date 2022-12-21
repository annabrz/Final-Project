class SellersController < ApplicationController
    def index
        render json: Seller.all, status: 200
    end
end
