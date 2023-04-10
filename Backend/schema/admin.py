from django.contrib import admin
from .models import Profile
# Register your models here.


class SettingAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name']


admin.site.register(Profile, SettingAdmin)
