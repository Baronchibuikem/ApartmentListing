from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="media/blog")
    description = models.TextField()
    date = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.title