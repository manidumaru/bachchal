
# Create your views here.

from rest_framework import generics, permissions
from .models import Profile
from .serializers import ProfileSerializer
from basicauth.models import User


class ProfileListCreate(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_serializer_context(self):
        method = self.request.method
        return {'user': self.request.user, 'method': method}

    def perform_create(self, serializer):

        User.objects.filter(id=self.request.user.id).update(
            profile_present=True)
        serializer.save(user=self.request.user)


class ProfileRetrieve(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.filter(pk=self.kwargs['pk'])


class ProfileRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)

    def get_serializer_context(self):
        method = self.request.method
        return {'user': self.request.user, "method": method}

    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        User.objects.filter(id=self.request.user.id).update(
            profile_present=False)
        return super().destroy(request, *args, **kwargs)
