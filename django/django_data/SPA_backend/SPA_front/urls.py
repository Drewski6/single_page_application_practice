from django.urls import path
from . import views

urlpatterns = [
  path("", views.index),
  # path("<int:pk>/", views.index),
  # path("new_post/", views.index),
]