# Generated by Django 4.2 on 2023-04-05 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basicauth', '0003_alter_user_first_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, default='', max_length=150),
        ),
    ]
