from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PersonSerializer, JobSerializer, StatusSerializer
from .models import Person, Job, Status
from rest_framework.response import Response


class PersonViewSet(viewsets.ModelViewSet):
  queryset = Person.objects.all()
  serializer_class = PersonSerializer


class JobViewSet(viewsets.ModelViewSet):
  queryset = Job.objects.all()
  serializer_class = JobSerializer


class StatusViewSet(viewsets.ModelViewSet):
  queryset = Status.objects.all()
  serializer_class = StatusSerializer
