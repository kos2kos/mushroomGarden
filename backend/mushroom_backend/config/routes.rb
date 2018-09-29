Rails.application.routes.draw do
  resources :mushrooms
  resources :user_gardens
  resources :garden_mushrooms
  resources :gardens
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
