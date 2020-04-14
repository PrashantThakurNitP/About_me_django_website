from django.shortcuts import render

# Create your views here.
def home(request):
	from pages.welcome import hello
	return render(request,"home.html",{"hi":hello})#anytime we create new page we need function like this
#imported hello fn from welcome file of pages folder(app)
#"hi" is key whose value is fn hello imported from welcome
def about(request):
	n="PRASHANT THAKUR"
	e="NATIONAL INSTITUTE OF TECHNOLOGY,PATNA"
	p="B.Tech in CSE "
	return render(request,"about.html",{"my_name":n,"edu":e,"field":p})

	#here function return value of dict and on webpage value acessed through key
	#variable name n,e,p contain value of dict
def hobbies(request):
	  a="playing badminton"
	  b="webdesiging"

	  return render(request,"hobbies.html",{"game":a,"code":b})
def contact(request):
	m="9135994092"
	w="9113199768"
	e="     p09.thakur@gmail.com"
	return render(request,"Contact.html",{"mobile":m,"watsup":w,"email":e})
def skills(request):
	a="C"
	b="C++"
	c="PYTHON"
	d="JAVASCRIPT"
	e="HTML"
	f="CSS"
	g="DJANGO"
	return render(request,"skills.html",{"a":a,"b":b,"c":c,"d":d,"e":e,"f":f,"g":g})
def family(request):
	m="MADHUMALA DEVI"
	f="RAMAKANT THAKUR"
	b="NISHANT THAKUR"
	u="MANISH THAKUR"
	return render(request,"family.html",{"mother":m,"father":f,"brother":b,"uncle":u})
def friends(request):
	a="ADITYA ANKUL"
	b="GAURAV RAI"
	c="SURAJ KUMAR"
	return render(request,"friends.html",{"a":a,"g":b,"s":c})

	