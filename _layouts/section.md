---
---
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/assets/css/law.css">
    <title>
      {% if page.shorttitle %}
        {{ page.shorttitle }}{% else %}{{ page.longtitle }}{% endif %}, {{ page.volume }},
        c. {{ page.chapter }},
        s. {{ page.section }}
      {% if page.citeold %}
      / {{page.citeold}},
      c. {{ page.chapter }},
      s. {{ page.section }}
      {% endif %} | im mender? :/
    </title>
  </head>
  <body>
    {{ content }}
  </body>
</html>