from django.contrib import admin
from .models import User

# Register your models here.


class SettingAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'first_name']


admin.site.register(User, SettingAdmin)
