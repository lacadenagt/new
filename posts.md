---
title: Blog
layout: default
num_excerpts: 5
center: true
description: 
og_description: 
---	
<style>
    a{
        color:blue;
    }
</style>
<br>
<h2 style="text-align:center" title="herramientas eléctricas">Blog</h2>
{% for post in site.posts limit:page.num_excerpts %}
{% include preview.md post=post %}
{% endfor %}

{% if site.posts.size > page.num_excerpts %}

## Post antiguos

<ul>
    {% for post in site.posts offset:page.num_excerpts %}
        <li><a class="btn btn-primary" href="{{ post.url }}" role="button" title="{{ post.title }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endif %}
<div id="disqus_thread"></div>
<script  type="text/plain" data-cookiecategory="necessary" defer>
    var disqus_config = function () {
        this.page.url = "{{ site.url }}{{ page.url }}";
        this.page.identifier =  "{{ page.id }}";
    };
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://lacadenagt.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Por favor activa JavaScript para ver los<a href="https://disqus.com/?ref_noscript"> comentarios patrocinado por Disqus.</a></noscript>
