from django.urls import path, include


urlpatterns = [
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),
]