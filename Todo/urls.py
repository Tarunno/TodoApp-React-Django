from django.urls import path
from .import views

urlpatterns = [
    path('', views.ApiOverView, name="ApiOverView"),
    path('task-list/', views.TaskView, name="TaskView"),
    path('task-detail/<str:pk>', views.TaskDetail, name="TaskDetail"),
    path('task-create/', views.TaskCreate, name="TaskCreate"),
    path('task-update/<str:pk>', views.TaskUpdate, name="TaskUpdate"),
    path('task-completed/<str:pk>', views.TaskComplete, name="TaskComplete"),
    path('task-delete/<str:pk>', views.TaskDelete, name="TaskDelete"),
    path('task-count/', views.TaskCount, name="TaskCount"),
    path('task-count-reset/', views.TaskCountReset, name="TaskCountReset")
]
