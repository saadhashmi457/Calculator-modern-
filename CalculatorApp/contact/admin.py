from django.contrib import admin
from contact.models import ctmodel

# Register your models here.
class ctadmin(admin.ModelAdmin):
    list_display=('Name','Email','Message')
    
admin.site.register(ctmodel,ctadmin)
