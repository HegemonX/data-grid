from django.urls import path, include
from rest_framework import routers
from list.views import PersonViewSet
# from list.serializers import PersonSerializer

router = routers.DefaultRouter()
router.register('list', PersonViewSet)

urlpatterns = [
    path('test/', include(router.urls))
]
