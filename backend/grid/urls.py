from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('grid', views.PersonViewSet)
router.register('job', views.JobViewSet)
router.register('status', views.StatusViewSet)

urlpatterns = [
    path('', include(router.urls))
]
