from django.db import models
from datetime import datetime
from cloudinary.models import CloudinaryField

# Agent model. --> is_AOTM means Agent Of The Month which will be filtered in the view to display an agent of the month
class Agent(models.Model):
    name = models.CharField(max_length=100)
    image = CloudinaryField("user_image", null=True, blank=True)
    phone = models.IntegerField()
    email = models.EmailField()
    address = models.CharField(max_length=100)
    is_AOTM = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.name



# Apartment model with s primary key to Agent model. that means every house must have an agent assigned to it
class Apartment(models.Model):
    APARTMENT_CHOICES = (
        ('rent', 'For Rent'),
        ('sale','For Sale'),
    )
    name = models.CharField(max_length=100, blank=False, null=False)
    Location = models.CharField(max_length=100, blank=False, null=False)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    price =  models.PositiveIntegerField()
    image1 = CloudinaryField("user_image", null=True, blank=True)
    image2 = CloudinaryField("user_image", null=True, blank=True)
    image3 = CloudinaryField("user_image", null=True, blank=True)
    image4 = CloudinaryField("user_image", null=True, blank=True)
    image5 = CloudinaryField("user_image", null=True, blank=True)
    description = models.TextField()
    available = models.BooleanField(default=True)
    offer = models.CharField(choices=APARTMENT_CHOICES, max_length=100, default="sale")
    is_featured = models.BooleanField(default=False)
    is_recent = models.BooleanField(default=False)
    agent = models.ForeignKey(Agent, on_delete=models.DO_NOTHING, related_name="apartments")
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name



# models for contact page. will be used to send post request to our database for the contact page
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    question = models.TextField()

    class Meta:
        ordering = ("name",)

    def __str_(self):
        return self.name

class Subscription(models.Model):
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.email