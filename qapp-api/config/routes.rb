Rails.application.routes.draw do
  # 会員登録とかユーザー周り
  resources :users

  # login logout
  post '/login', to: 'sessions#create'

  resources :questions
  resources :answers, except: [:index]
  get '/question/answers/:question_id', to: 'answers#index', as: 'a_index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
