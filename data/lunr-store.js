---
# create lunr store 
---
{%- assign items = site.data[site.metadata] -%}
{%- assign fields = site.data.lunr-config | map: 'field' -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.object-id | jsonify }}, {% for f in fields %}{{ f | jsonify }}: {% if item[f] %}{{ item[f] | replace: '""','"' | jsonify }}{% else %}"n/a"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
