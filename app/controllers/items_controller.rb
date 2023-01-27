class ItemsController < ApplicationController
  def index
    render json: Item.all, status: 200
  end

  def show
    item = Item.find(params[:id])
    render json: item, status: 200
  end

  def create
    item = Item.create!(item_params)
    render json: item, status: :created
  end

  def destroy
    item = found_item
    item.destroy
    head :no_content
  end

  def update
    item = found_item
    # if item
    item.update(item_params)
    render json: item, status: :accepted
    #     else render json: {error: "item not found"}, status: :not_found
    # end
  end

  private

  def found_item
    Item.find(params[:id])
  end

  def item_params
    params.permit(:name, :category, :price, :details, :condition, :image, :seller_id, :buyer_id)
    # t.string "name"
    # t.string "category"
    # t.integer "price"
    # t.string "details"
    # t.string "condition"
    # t.string "image"
    # t.integer "seller_id"
    # t.integer "buyer_id"
  end
end
