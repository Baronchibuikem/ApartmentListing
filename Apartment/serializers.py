from rest_framework import serializers
from .models import Apartment, Agent,  Contact, Subscription
from django.contrib.auth.models import User
import re


class ApartmentSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%H", read_only=True)#Formating our date field to return only the Hour field
    agent = serializers.CharField(source="agent.name")#returning the full name in our agent field and not just the id
    class Meta:
        model = Apartment
        fields = "__all__"



class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = "__all__"

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = "__all__"

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"