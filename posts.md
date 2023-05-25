---
title: Blog
layout: default
num_excerpts: 5
center: true
description: Explora algunos proyectos de desarrollo de Software realizados por Santos López. Descubre las tecnologías utilizadas, la complejidad y los resultados obtenidos.
og_description: Explora algunos proyectos de desarrollo de Software realizados por Santos López. Descubre las tecnologías utilizadas, la complejidad y los resultados obtenidos.
---
<style>
    .post-title a {
        text-decoration: none;
    }
</style>
<br>
<h2 style="text-align:center" title="Proyectos">Proyectos</h2>
Tengo una gran variedad de proyectos, algunos son de código abierto y pueden verlo en mi perfil de [Github](https://github.com/santoslopez)

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
