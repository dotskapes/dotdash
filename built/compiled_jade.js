
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
buf.push(attrs({ 'id':(name), "class": ('panel') }, {"id":true}));
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
 var opts = cfgOpt.options
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ 'id':(name + '-' + cfgOpt.type + '-button'), "class": ('button') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
if ( cfgOpt.type === Panel.BUTTON_TYPES.SELECTION_TOGGLE)
{
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
 var cls = "icon move_arrow" + (opts.enabled ? "" : " enabled");
__jade.shift();
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(opts.hoverText.move), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
 cls = "icon selection_box" + (opts.enabled ? " enabled" : "");
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(opts.hoverText.select), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
if ( cfgOpt.type === Panel.BUTTON_TYPES.FILTER)
{
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<button');
buf.push(attrs({ 'id':(name+'Filter') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('Filter');
__jade.shift();
__jade.shift();
buf.push('</button>');
__jade.shift();
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<button');
buf.push(attrs({ 'id':(name+'FilterOff') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('Filter Off');
__jade.shift();
__jade.shift();
buf.push('</button>');
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
 var opts = cfgOpt.options
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ 'id':(name + '-' + cfgOpt.type + '-button'), "class": ('button') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
if ( cfgOpt.type === Panel.BUTTON_TYPES.SELECTION_TOGGLE)
{
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
 var cls = "icon move_arrow" + (opts.enabled ? "" : " enabled");
__jade.shift();
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(opts.hoverText.move), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
 cls = "icon selection_box" + (opts.enabled ? " enabled" : "");
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<a');
buf.push(attrs({ 'title':(opts.hoverText.select), "class": (cls) }, {"class":true,"title":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
if ( cfgOpt.type === Panel.BUTTON_TYPES.FILTER)
{
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<button');
buf.push(attrs({ 'id':(name+'Filter') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('Filter');
__jade.shift();
__jade.shift();
buf.push('</button>');
__jade.shift();
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<button');
buf.push(attrs({ 'id':(name+'FilterOff') }, {"id":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('Filter Off');
__jade.shift();
__jade.shift();
buf.push('</button>');
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
jade.templates['panels'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
var selectBox_mixin = function(name, model){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
 panels = model.get('panels')
__jade.shift();
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<select');
buf.push(attrs({ "class": ('select-' + name) }, {"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
// iterate panels
;(function(){
  if ('number' == typeof panels.length) {

    for (var i = 0, $$l = panels.length; i < $$l; i++) {
      var option = panels[i];

__jade.unshift({ lineno: 4, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<option');
buf.push(attrs({ 'value':(i), 'selected':((i == model.get(name))) }, {"value":true,"selected":true}));
buf.push('>');
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</option>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in panels) {
      $$l++;      var option = panels[i];

__jade.unshift({ lineno: 4, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<option');
buf.push(attrs({ 'value':(i), 'selected':((i == model.get(name))) }, {"value":true,"selected":true}));
buf.push('>');
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</option>');
__jade.shift();
__jade.shift();
    }

  }
}).call(this);

__jade.shift();
__jade.shift();
buf.push('</select>');
__jade.shift();
__jade.shift();
};
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('<div class="left pane">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<div class="select">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
selectBox_mixin('left', model);
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<div class="view">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<div class="right pane">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<div class="select">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
selectBox_mixin('right', model);
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<div class="view">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
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
jade.templates['select_box'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
};