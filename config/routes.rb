Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'posts#index'

  resources :tweets, only: [:index, :new, :show, :create, :destroy]
  resources :users, only: [:show]
end
