Rails.application.routes.draw do
  resources :subtasks
  resources :tasks
  resources :projects
end
