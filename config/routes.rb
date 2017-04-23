Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index]
    resources :tasks, only: [:index, :create, :update, :destroy]
    resources :users

    get '/taskers', to: 'users#taskers'
    # get '/region/:locality/category/:cid', to: 'users#taskers'
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
