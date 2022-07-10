---
---
<meta charset="utf-8">
<link rel="stylesheet" href="/assets/css/law.css">
<title>{% if page.shorttitle %}{{ page.shorttitle }}, {% else %}{{page.longtitle}}, {% endif %}{{page.volume}}, c. {{ page.chapter }}{% if page.citeold %} / {{page.citeold}}{% endif %} | im mender? :/</title>
<h1 class="head-title">{% if page.shorttitle %}{{ page.shorttitle }}{% else %}{{ page.longtitle }}{% endif %} ({{ page.volume }}, c. {{ page.chapter }})</h1>
<h2 class="toc-heading">Section Permalinks</h2>
<nav>
  <ul clas="toc-indent">
    {% assign samechapter = site.sections | where: "chapter", page.chapter | where: "volume", page.volume %}
    {% for section in samechapter %}
      <li><a href="{{ section.url }}">Section {{ section.section }}</a></li>
    {% endfor %}
  </ul>
</nav>
{{ content }}