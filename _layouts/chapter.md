---
---
<meta charset="utf-8">
<meta property="og:site_name" content="im mender? :/">
<meta property="og:title" content="{% if page.shorttitle %}{{ page.shorttitle }}, {% else %}{{ page.longtitle }}, {% endif %}{{ page.volume }}, c. {{ page.chapter }}">
<meta property="og:type" content="article">
<meta property="og:url" content="{{ site.url }}{{ page.url | replace:'index.html',''}}">
{% if page.assenteddate %}<meta property="article:published_time" content="{{ page.assenteddate }}">{% endif %}
<link rel="stylesheet" href="/assets/css/law.css">
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">
<title>{% if page.shorttitle %}{{ page.shorttitle }}, {% endif %}{{ page.volume }}, c. {{ page.chapter }} | Statute Archive - im mender? :/ </title>
<header>
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
</header>
<main>
{{ content }}
</main>