from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100, null=True, blank=False)
    completed = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return self.title
class Stat(models.Model):
    count_task = models.IntegerField(default=0, null=True)
    count_delete = models.IntegerField(default=0, null=True)
    count_completed = models.IntegerField(default=0, null=True)

    def __str__(self):
        return 'Completed: ' + str(self.count_completed) + ' | ' + 'Deleted: ' + str(self.count_delete) + ' | '  + 'Tasks: ' + str(self.count_task)
