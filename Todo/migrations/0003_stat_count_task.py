# Generated by Django 3.1.1 on 2020-10-20 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Todo', '0002_auto_20201020_0846'),
    ]

    operations = [
        migrations.AddField(
            model_name='stat',
            name='count_task',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
