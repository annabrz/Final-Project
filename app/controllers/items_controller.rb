class ItemsController < ApplicationController

    def index
        render json: Item.all, status: 200
    end


    def show
        item = Item.find(params[:id])
        render json: item, status:200
    end

    def create
        item = Item.create!(name:params[:name], category:params[:category], price:params[:price], details:params[:details], condition:params[:condition], image:params[:image])
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
        Item.find(params[id])
    end


end
