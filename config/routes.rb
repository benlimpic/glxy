Rails.application.routes.draw do
  resources :users
  resources :projects
  resources :tasks
  resources :subtasks



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: "users#me"
  post '/signup', to: "users#signup"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"

  # post '/projects', to: "projects#create"
  # get '/projects/:id/edit', to: "projects#edit"
  # patch '/projects/:id', to: "projects#update"
  # delete '/projects/:id', to: "projects#destroy"


  # post '/tasks', to: "tasks#create"
  # get '/tasks/:id/edit', to: "task#edit"

  # post '/subtasks', to: "subtasks#create"
  # get '/subtasks/:id/edit', to: "subtask#edit"



end
