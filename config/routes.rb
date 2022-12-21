Rails.application.routes.draw do
  resources :sellers, only: [:index]
  resources :items, only: [:index, :show, :create, :destroy, :update]
  resources :buyers, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

end
