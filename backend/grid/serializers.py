from rest_framework import serializers
from .models import Person, Job, Status


class JobSerializer(serializers.ModelSerializer):

  class Meta:
    model = Job
    fields = '__all__'


class StatusSerializer(serializers.ModelSerializer):
  class Meta:
    model = Status
    fields = '__all__'


class PersonSerializer(serializers.ModelSerializer):
  # id = serializers.UUIDField(required=False)
  job = serializers.PrimaryKeyRelatedField(queryset=Job.objects.all())
  status = serializers.PrimaryKeyRelatedField(queryset=Status.objects.all())

  class Meta:
    model = Person
    fields = '__all__'
