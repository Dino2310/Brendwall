from django.shortcuts import render
from .models import Products
from django_ajax.decorators import ajax
from django.views.decorators.csrf import csrf_exempt


def index (request):
    return render(request, "base.html", {})



@ajax
def init_list(request):
    return get_prod_list(request)

@ajax
@csrf_exempt
def add_products(request):
    answer = request.POST.get
    Products.objects.create(
        name = answer('name'),
        price = answer('price')
    )
    return get_prod_list(request)

def get_prod_list(request):
    products = Products.objects.all()
    return{'products' : render(request, 'index.html', {'products': products})}

