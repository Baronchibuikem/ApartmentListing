from rest_framework import routers
from .views import ApartmentViewSet, AgentViewSet, FeaturedListViewSet, RecentListViewSet, SubscriptionViewSet, ContactViewSet

router = routers.DefaultRouter()
router.register('agent', AgentViewSet, 'Agent'),
router.register('featured', FeaturedListViewSet, 'Apartment'),
router.register('recent', RecentListViewSet, 'Apartment'),
router.register('contact', ContactViewSet, 'Contact'),
router.register('subscribe', SubscriptionViewSet, 'Subscription'),
router.register('', ApartmentViewSet, 'Apartment'),

urlpatterns = router.urls