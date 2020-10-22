from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create task': '/task-create/',
        'Update task': '/task-update/<str:pk>/',
        'Mark complete': '/task-complete/<str:pk>/',
        'Delete task': '/task-delete/<str:pk>/',
        'Count tasks': '/task-count/',
        'Count reset': '/task-count-reset/'
    }
    return Response(api_urls)

@api_view(['GET'])
def TaskView(request):
    tasks = Task.objects.all()
    serializers = TaskSerializer(tasks, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def TaskDetail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializers = TaskSerializer(tasks, many=False)
    return Response(serializers.data)

@api_view(['POST'])
def TaskCreate(request):
    stat, create = Stat.objects.get_or_create(id=2)
    stat.count_task = stat.count_task + 1
    serializers = TaskSerializer(data=request.data)
    if serializers.is_valid():
        stat.save()
        serializers.save()
    return Response(serializers.data)

@api_view(['GET', 'POST'])
def TaskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializers = TaskSerializer(instance=task, data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)

@api_view(['GET'])
def TaskComplete(request, pk):
    stat, create = Stat.objects.get_or_create(id=2)
    task = Task.objects.get(id=pk)
    if task.completed == True:
        task.completed = False
        stat.count_completed = stat.count_completed - 1
    else:
        task.completed = True
        stat.count_completed = stat.count_completed + 1
    if stat.count_completed < 0:
        stat.count_completed = 0
    stat.save()
    task.save()
    return Response("Mark checked!")

@api_view(['GET', 'DELETE'])
def TaskDelete(request, pk):
    stat, create = Stat.objects.get_or_create(id=2)
    stat.count_delete = stat.count_delete + 1
    task = Task.objects.get(id=pk)
    stat.save()
    task.delete()
    return Response("Task deleted successfully!")

@api_view(['GET'])
def TaskCount(request):
    count = Stat.objects.get(id=2)
    serializers = StatSerializer(count, many=False)
    return Response(serializers.data)

@api_view(['GET'])
def TaskCountReset(request):
    Tasks = Task.objects.all()
    Tasks.delete()
    stat = Stat.objects.get(id=2)
    stat.count_task, stat.count_delete, stat.count_completed = 0, 0, 0
    stat.save()
    return Response("Task counter reset!")
