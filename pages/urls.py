

from django.urls import path
from .import views
"""
from .  import views means (. is called as period, means current directory) we are saying import view from current directory

"""

urlpatterns = [
    path('',views.home,name='home'),
    path('about-me/',views.about,name='about'),
    path('contact-me/',views.contact,name='contact'),
    path('myfamily/',views.family,name='family'),
    path('myfriends/',views.friends,name='friends'),
    path('myhobbies/',views.hobbies,name='hobbies'),
    path('myskills/',views.skills,name='skills'),
    
    
]
"""
first agument contain url which to add in seach box after home page
for home page we donot need to add it as we are already in home
home about contact etc are method defined in view.py file we importing here
second argument is used for using fn declared in views folder
third argument contain name of page ,we can also acess webpage through name in pseudopython on html page where we provide link of page
"""