Rails.application.routes.draw do

  get 'likes/create'
  get 'likes/destroy'
  get 'users/show'
  # ルーティングをusers/registrationにしてコントローラーをカスタマイズできるようにする記述
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'posts#index'

  post 'follow/:id' => 'relationships#follow', as: 'follow' # フォローする
  post 'unfollow/:id' => 'relationships#unfollow', as: 'unfollow' #フォロー外す

  resources :tweets do
    resources :comments, only: :create
    resources :likes, only: [:create, :destroy]
    collection do
      get 'search'
    end
  end
  resources :users, only: [:show, :index] do
    collection do
      get 'search'
    end
  end
end
