from rest_framework import routers
from .views import BlogViewSet

router = routers.DefaultRouter()
router.register('', BlogViewSet, 'blog')


urlpatterns = router.urls