---
layout: page
---
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>
      {{ page.volume }}{% if page.citeold %} / {{ page.citeold }}{%  else %}{% endif %}
    </title>
	</head>
  <body>
    <h2>Table of Contents</h2>
    <ul>
      {% assign chaptervolume = site.chapters | where: page.volume, chapter.volume %}
      {% for chapter in chaptervolume %}
        <li><a href="{{ chapter.url }}">{{ chapter.title }}: {{ chapter.longtitle }} {% if chapter.shorttitle %}({{ chapter.shorttitle }}){% endif %}</a></li>
      {% endfor %}
    </ul>
    {{ content }}
  </body>
</html>