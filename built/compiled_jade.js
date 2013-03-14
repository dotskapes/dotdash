
if (jade.templates === undefined) jade.templates = {};
;
jade.templates['panel'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ 'id':(label), "class": ('view') }, {"id":true,"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
if (!( configOptions))
{
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
 return // return if no configOptions defined
__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div class="buttons">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
// iterate configOptions
;(function(){
  if ('number' == typeof configOptions.length) {

    for (var key = 0, $$l = configOptions.length; key < $$l; key++) {
      var cfgOpt = configOptions[key];

__jade.unshift({ lineno: 5, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
 var id = label + '-' + cfgOpt['type'] + '-button'
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
 var opts = cfgOpt['options']
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ 'id':(id), "class": ('button') }, {"id":true,"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
if ( cfgOpt['type'] === Panel.BUTTON_TYPES.SELECTION_TOGGLE)
{
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
 var cls = "icon move_arrow" + (opts['enabled'] ? "" : " enabled");
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
 var move = opts['hoverText']['move']
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(move), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
 cls = "icon selection_box" + (opts['enabled'] ? " enabled" : "");
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
 var sel = opts['hoverText']['select']
__jade.shift();
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(sel), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var key in configOptions) {
      $$l++;      var cfgOpt = configOptions[key];

__jade.unshift({ lineno: 5, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
 var id = label + '-' + cfgOpt['type'] + '-button'
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
 var opts = cfgOpt['options']
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ 'id':(id), "class": ('button') }, {"id":true,"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
if ( cfgOpt['type'] === Panel.BUTTON_TYPES.SELECTION_TOGGLE)
{
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
 var cls = "icon move_arrow" + (opts['enabled'] ? "" : " enabled");
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
 var move = opts['hoverText']['move']
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(move), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
 cls = "icon selection_box" + (opts['enabled'] ? " enabled" : "");
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
 var sel = opts['hoverText']['select']
__jade.shift();
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(sel), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
    }

  }
}).call(this);

__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
};