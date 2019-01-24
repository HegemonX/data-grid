from django.contrib import admin
from .models import Person, Status, Job
# Register your models here.


class JobAdmin(admin.ModelAdmin):
  pass


class StatusAdmin(admin.ModelAdmin):
  pass


class PersonAdmin(admin.ModelAdmin):
  pass


admin.site.register(Job, JobAdmin)
admin.site.register(Status, StatusAdmin)
admin.site.register(Person, PersonAdmin)
