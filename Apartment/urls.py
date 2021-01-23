from rest_framework import routers

from django.urls import path
from .views import ApartmentViewSet, AgentListView, AgenDetailView, FeaturedListViewSet, RecentListViewSet, SubscriptionViewSet, ContactViewSet

router = routers.DefaultRouter()
router.register('featured', FeaturedListViewSet, 'Apartment'),
router.register('recent', RecentListViewSet, 'Apartment'),
router.register('contact', ContactViewSet, 'Contact'),
router.register('subscribe', SubscriptionViewSet, 'Subscription'),
router.register('', ApartmentViewSet, 'Apartment'),



urlpatterns = [
    path('agents/', AgentListView.as_view(), name="agents"),
    path('agent/<int:id>/', AgenDetailView.as_view(), name="agent")
] + router.urls