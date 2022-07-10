<header>
{% if page.citeoldlong %}<h2 class="cite-old-long">{{ page.citeoldlong %}}</h2>{% endif %}
  <h2 class="title-of-act" id="top">{% if page.shorttitle %}{{page.shorttitle}}{% else %}{{page.longtitle}}{% endif %}</h2>
  <p class="chapter-number">{{ page.volume }}, c. {{ page.chapter }}</p>
</header>
{% if page.assenteddate %}
  <p class="assented-date" style="text-transform:uppercase;">
    Assented to {{ page.assenteddate }}
  </p>
{% endif %}
{% if page.bill %}
  <p class="bill-num">Bill {{ page.bill }}</p>
{% endif %}
<p id="id-lt" class="long-title">{{ page.longtitle }}</p>
