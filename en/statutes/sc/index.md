---
layout: page
title: Index to the Annual Statutes of Canada
---
<ul>
<li><a href="s-c.html"><cite>Statutes of Canada</cite></a>
<ul>
{% for volume in site.volumes %}
  {% unless volume.volume contains "R.S.C.," %}
    {% if volume.lastyear < 1873 %}
    <li><a href="{{volume.url}}"><cite>{{volume.title}}</cite></a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>
</li>
<li><a href="a-p-d-c.html"><cite>Acts of the Parliament of the Dominion of Canada</cite></a>
<ul>
{% for volume in site.volumes %}
  {% unless volume.volume contains "R.S.C.," %}
    {% if volume.lastyear < 1952 %}
      {% if volume.lastyear > 1872 %}
        <li><a href="{{volume.url}}"><cite>{{volume.title}}</cite></a></li>
      {% endif %}
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>
</li>
<li><a href="a-p-d-c.html"><cite>Acts of the Parliament of Canada</cite></a>
<ul>
{% for volume in site.volumes %}
  {% unless volume.volume contains "R.S.C.," %}
    {% if volume.lastyear > 1951 %}
        <li><a href="{{volume.url}}"><cite>{{volume.title}}</cite></a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>
</li>
</ul>