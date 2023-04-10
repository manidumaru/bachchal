from django.db import models
from basicauth.models import User
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bagh = models.IntegerField(default=0)
    bagh_win = models.IntegerField(default=0)
    bakhra = models.IntegerField(default=0)
    bakhra_win = models.IntegerField(default=0)
    first_name = models.CharField(max_length=150, blank=False, null=False)
    last_name = models.CharField(max_length=150, blank=False, null=False)
    rating = models.IntegerField(default=0)

    def __str__(self):
        return str(self.first_name) + " " + str(self.last_name)
