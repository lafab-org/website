---
title: Actualitées
eleventyNavigation:
  key: Actualitées
  parent: Accueil
---


<ul>
{%- for post in collections.billet -%}
  <li>
    <a href="{{post.data.page.url}}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul>


