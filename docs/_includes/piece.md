### [{{ piece.title }}]({{ piece.url }})
{:.journal-font}
{%- comment -%}
<aside class="content">
{% capture data %}docsjournal{{ piece.dir | remove_first: '/journal/' | split: '/' | first }}{% endcapture %}
{% include histogram2.html git=data %}
</aside> {%- endcomment -%}
