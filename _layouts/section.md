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
    <header>
        <a href="./">{% if page.shorttitle %}{{ page.shorttitle }}{% else %}{{ page.longtitle }}{% endif %}, {{ page.volume }}, c. {{ page.chapter }}</a>, s. {{ page.section }}
    </header>
    <main>
      {{ content }}
    </main>
  </body>
</html>