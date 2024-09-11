
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getProd/', views.init_list),
    path('setProd/', views.add_products)
]
