from .models import Apartment, Agent, Subscription, Contact
from .serializers import ApartmentSerializer, AgentSerializer, SubscriptionSerializer, ContactSerializer
from rest_framework import viewsets, permissions, generics
from rest_framework.permissions import IsAuthenticated

# Views for all apartment list
class ApartmentViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in apartment model and filtering it by those set to available.
    This means only those set to available get to be displayed. then we ensure that only those
    that are authenticated can make changes to this view 
    """
    queryset = Apartment.objects.all().filter(available=True)
    serializer_class = ApartmentSerializer

# Views to query Apartment models to display only featured list
class FeaturedListViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in apartment model and filtering it by those whose features are set to true.
    This means only those set to is_featured get to be displayed. then we ensure that only those
    that are authenticated can make changes to this view 
    """
    queryset = Apartment.objects.filter(is_featured=True)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = ApartmentSerializer


# Views to query Apartment models to display only recent list
class RecentListViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in apartment model and filtering it by those whose is_recent are set to true.
    This means only those set to is_recent get to be displayed. then we ensure that only those
    that are authenticated can make changes to this view 
    """
    queryset = Apartment.objects.all().filter(is_recent=True)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = ApartmentSerializer

#Agent viewset
class AgentListView(generics.ListAPIView):
    """
    Querying all instances of the agent models and returning all the fields and also ensuring only authenticated
    users can make changes to this model
    """
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer

class AgenDetailView(generics.RetrieveAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
    lookup_field = "id"
    lookup_url_kwarg = "id"



# views for contact
class ContactViewSet(viewsets.ModelViewSet):
    """
    Querying all instances of the Contact models and returning all the fields and also ensuring anybody
    can make changes to this model
    """
    queryset = Contact.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = ContactSerializer


# Views for subscription
class SubscriptionViewSet(viewsets.ModelViewSet):
    """
    Querying subscription model and returning all the fields but also ensuring that anybody that make a post request to it
    """
    queryset = Subscription.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = SubscriptionSerializer