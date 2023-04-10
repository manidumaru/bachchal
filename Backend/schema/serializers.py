from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    bagh = serializers.ReadOnlyField()
    bagh_win = serializers.ReadOnlyField()
    bakhra = serializers.ReadOnlyField()
    bakhra_win = serializers.ReadOnlyField()
    rating = serializers.ReadOnlyField()

    class Meta:
        model = Profile
        fields = ['id', 'username', 'first_name', 'last_name',
                  'bagh', 'bagh_win', 'bakhra', 'bakhra_win', 'rating']

    def validate(self, data):

        if (self.context.get('method') == 'POST'):

            if (self.context.get('user').profile_present):
                raise serializers.ValidationError(
                    {'Error': "Only one profile per User!!"})

        return super().validate(data)
