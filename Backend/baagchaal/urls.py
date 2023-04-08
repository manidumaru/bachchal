
from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('socialauth/', include('socialauth.urls')),
    path('basicauth/', include('basicauth.urls')),

]
