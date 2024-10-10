from django.shortcuts import render
from rest_framework import generics
from .models import BlogPost
from .serializers import BlogPostSerializer
from django.http import JsonResponse, HttpResponse

# Create your views here.

class BlogPostListCreate(generics.ListCreateAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializer

class BlogPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializer
  lookup_field = "pk"

def api_http_test_func(request):
  p = 100
  retStr = "Value of p: " + str(p)
  return HttpResponse(retStr)

def api_json_test_func(request):
  p = 100
  print("Value of p:", p)
  data = { "Value of p": p }
  return JsonResponse(data)