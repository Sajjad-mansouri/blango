from django.contrib import admin
from .models import Tag,Post,Comment


class PostAdmin(admin.ModelAdmin):
    list_display=['slug','published_at']
    prepopulated_fields = {"slug": ("title",)}
  


admin.site.register(Post, PostAdmin)
admin.site.register(Comment)
admin.site.register(Tag)