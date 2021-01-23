from rest_framework import serializers
from .models import Apartment, Agent,  Contact, Subscription
from django.contrib.auth.models import User
import re


class AgentSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Agent
        fields = "__all__"

    
    def get_image(self, instance):
        try:
            return instance.image.url
        except AttributeError:
            return None


class ApartmentSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%H", read_only=True)#Formating our date field to return only the Hour field
    agent = serializers.CharField(source="agent.name")#returning the full name in our agent field and not just the id
    agent_phone = serializers.CharField(source="agent.phone")
    agent_image = serializers.CharField(source="agent.image.url")
    image1 = serializers.SerializerMethodField()
    image2 = serializers.SerializerMethodField()
    image3 = serializers.SerializerMethodField()
    image4 = serializers.SerializerMethodField()
    image5 = serializers.SerializerMethodField()

    # image1 = image = serializers.ImageField(required=False)
    class Meta:
        model = Apartment
        fields = ("agent_phone", "created", "agent", "agent_image", "name", "Location",
        "bedrooms", "bathrooms", "price", "image1", "image2", "image3", "image4", "image5",
        "description", "available", "offer", "is_featured",)



    def get_image1(self, instance):
        try:
            return instance.image1.url
        except AttributeError:
            return None

    def get_image2(self, instance):
        try:
            return instance.image2.url
        except AttributeError:
            return None

    def get_image3(self, instance):
        try:
            return instance.image3.url
        except AttributeError:
            return None

    def get_image4(self, instance):
        try:
            return instance.image4.url
        except AttributeError:
            return None

    def get_image5(self, instance):
        try:
            return instance.image5.url
        except AttributeError:
            return None



class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = "__all__"

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"