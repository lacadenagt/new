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
<br>
<section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image:url('images/bg-02.jpg');">
<h2 class="ltext-105 cl0 txt-center">
	Blog
</h2>
</section>
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
