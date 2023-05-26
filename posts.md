---
title: Blog
layout: default
num_excerpts: 5
center: true
description: 
og_description: 
---	
<style>
    .post-title a {
        text-decoration: none;
    }
</style>
<div class="container" style="margin-top:10%;margin-bottom:10%">
<h2 class="text-center" title="Blog de Ferretería La Cadena" style="color:red">Blog</h2> 
{% for post in site.posts limit:page.num_excerpts %}
{% include preview.md post=post %}
{% endfor %}
{% if site.posts.size > page.num_excerpts %}
## Post antiguos
<ul>
    {% for post in site.posts offset:page.num_excerpts %}
        <li><a class="post-title" href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li><br>
    {% endfor %}
</ul>
{% endif %}
</div>