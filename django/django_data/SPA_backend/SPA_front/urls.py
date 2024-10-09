from django.urls import path, re_path
from . import views

urlpatterns = [
  path("", views.index),
  path("posts", views.index),
  path("settings", views.index),
  re_path(r'^posts/.*$', views.index),
]