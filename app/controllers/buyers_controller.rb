class BuyersController < ApplicationController
  def index
    render json: Buyer.all, status: 200
  end
end
