---
title: Blog
layout: default
num_excerpts: 5
center: true
description: 
og_description: 
---	
<br>
<div class="container" style="margin-top:10%;margin-bottom:10%">
    <h2 style="text-align: center;color:blue" title="herramientas eléctricas">Blog</h2>
    {% for post in site.posts limit:page.num_excerpts %}
    {% include preview.md post=post %}
    {% endfor %}
    {% if site.posts.size > page.num_excerpts %}
    <h2>Post antiguos</h2>
    <ul>
        {% for post in site.posts offset:page.num_excerpts %}
        <li><a class="btn btn-primary" href="{{ post.url }}" role="button" title="{{ post.title }}">{{ post.title }}</a></li>
        {% endfor %}
    </ul>
    {% endif %}
</div>
