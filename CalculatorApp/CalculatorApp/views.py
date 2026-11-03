from django.http import HttpResponse
from django.shortcuts import render
from contact.models import ctmodel
from django.contrib import messages

def home_view(request):
    
    if request.method =="POST":
        v1=request.POST.get('name')
        v2=request.POST.get('email')
        v3=request.POST.get('message')
        vres=ctmodel(Name=v1,Email=v2,Message=v3)
        vres.save()
        return render(request,"thankyou.html")
        
    
    return render(request,"index.html")

