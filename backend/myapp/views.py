# english_learning_platform/backend/myapp/views.py:

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = User(
            username=data['username'],
            email=data['email'],
            password=data['password']  # Note: In a real app, hash the password!
        )
        user.save()
        return JsonResponse({'message': 'User registered successfully'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def get_users(request):
    users = list(User.objects.values('username', 'email'))
    return JsonResponse({'users': users})
