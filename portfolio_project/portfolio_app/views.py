from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm
# Create your views here.
##=================== Creating the home view ============================

def home(request):
    return render(request,'home.html')

##=================== Creating the home view ============================
# portfolio_app/views.py



# portfolio_app/views.py

def home_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = f"New Contact from {form.cleaned_data['name']}"
            message = form.cleaned_data['message']
            from_email = form.cleaned_data['email']
            to_email = 'sutar.vaibhav649@gmail.com'

            send_mail(subject, message, from_email, [to_email])
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('home')
    else:
        form = ContactForm()
    
    return render(request, 'home.html', {'form': form})

