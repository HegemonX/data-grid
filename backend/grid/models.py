from django.db import models
import uuid


class Job(models.Model):
  title = models.CharField(max_length=100)

  def __str__(self):
    return self.title


class Status(models.Model):
  class Meta:
    verbose_name_plural = 'statuses'

  title = models.CharField(max_length=100)

  def __str__(self):
    return self.title


class Person(models.Model):
  class Meta:
    verbose_name_plural = 'people'
    ordering = ['-full_name']

  full_name = models.CharField(max_length=100, blank=True)
  job = models.ForeignKey(Job, models.CASCADE, blank=True, null=True)
  status = models.ForeignKey(Status, models.CASCADE, blank=True, null=True)
  joined_job = models.DateField(auto_now=False, blank=True, null=True)
  birth_date = models.DateField(auto_now=False, blank=True, null=True)
  salary = models.FloatField(blank=True, null=True)

  def __str__(self):
    return self.full_name
