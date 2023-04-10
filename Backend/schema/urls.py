from django.urls import path
from .views import ProfileListCreate, ProfileRetrieve, ProfileRetrieveUpdateDestroy


urlpatterns = [
    path('profiles/', ProfileListCreate.as_view()),
    path('profiles/<int:pk>', ProfileRetrieve.as_view()),
    path('profiles/<int:pk>/updelete', ProfileRetrieveUpdateDestroy.as_view()),
]
