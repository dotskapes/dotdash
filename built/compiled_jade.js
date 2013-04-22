
if (jade.templates === undefined) jade.templates = {};
;
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
buf.push(attrs({ "class": ('panel') + ' ' + (name) }, {"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
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
jade.templates['moveSel'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div class="moveSel">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('<h3>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('Move/Select');
__jade.shift();
__jade.shift();
buf.push('</h3>');
__jade.shift();
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<div class="button move-sel-toggle">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<a title="Move Views in Panels" class="icon move_arrow enabled">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<a title="Select Features in Panels" class="icon selection_box">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</a>');
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
jade.templates['filter'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div class="filter">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('<h3>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('Filter');
__jade.shift();
__jade.shift();
buf.push('</h3>');
__jade.shift();
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<button class="filter-selected">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('Filter Selected');
__jade.shift();
__jade.shift();
buf.push('</button>');
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<button class="filter-off">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('Filter Off');
__jade.shift();
__jade.shift();
buf.push('</button>');
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
jade.templates['coloring'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<h3>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('Coloring');
__jade.shift();
__jade.shift();
buf.push('</h3>');
__jade.shift();
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
// iterate colorings
;(function(){
  if ('number' == typeof colorings.length) {

    for (var $index = 0, $$l = colorings.length; $index < $$l; $index++) {
      var coloring = colorings[$index];

__jade.unshift({ lineno: 2, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div class="collapse-toggler">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<span class="expand-arrow">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('&#9655');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('<span class="collapse-arrow">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('&#9661');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
var __val__ = coloring.title
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ "class": ('collapsible') + ' ' + (coloring.name + '-filter') }, {"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
// iterate coloring.options
;(function(){
  if ('number' == typeof coloring.options.length) {

    for (var i = 0, $$l = coloring.options.length; i < $$l; i++) {
      var option = coloring.options[i];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<label>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<input');
buf.push(attrs({ 'type':('radio'), 'name':(coloring.name), 'checked':(i===0), 'value':(option.value), "class": ('filter-button') + ' ' + (coloring.name) }, {"class":true,"type":true,"name":true,"checked":true,"value":true}));
buf.push('/>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</label>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in coloring.options) {
      $$l++;      var option = coloring.options[i];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<label>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<input');
buf.push(attrs({ 'type':('radio'), 'name':(coloring.name), 'checked':(i===0), 'value':(option.value), "class": ('filter-button') + ' ' + (coloring.name) }, {"class":true,"type":true,"name":true,"checked":true,"value":true}));
buf.push('/>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</label>');
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

  } else {
    var $$l = 0;
    for (var $index in colorings) {
      $$l++;      var coloring = colorings[$index];

__jade.unshift({ lineno: 2, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div class="collapse-toggler">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<span class="expand-arrow">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('&#9655');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('<span class="collapse-arrow">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('&#9661');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
var __val__ = coloring.title
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<div');
buf.push(attrs({ "class": ('collapsible') + ' ' + (coloring.name + '-filter') }, {"class":true}));
buf.push('>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
// iterate coloring.options
;(function(){
  if ('number' == typeof coloring.options.length) {

    for (var i = 0, $$l = coloring.options.length; i < $$l; i++) {
      var option = coloring.options[i];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<label>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<input');
buf.push(attrs({ 'type':('radio'), 'name':(coloring.name), 'checked':(i===0), 'value':(option.value), "class": ('filter-button') + ' ' + (coloring.name) }, {"class":true,"type":true,"name":true,"checked":true,"value":true}));
buf.push('/>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</label>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in coloring.options) {
      $$l++;      var option = coloring.options[i];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<label>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<input');
buf.push(attrs({ 'type':('radio'), 'name':(coloring.name), 'checked':(i===0), 'value':(option.value), "class": ('filter-button') + ' ' + (coloring.name) }, {"class":true,"type":true,"name":true,"checked":true,"value":true}));
buf.push('/>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
var __val__ = option.label
buf.push(escape(null == __val__ ? "" : __val__));
__jade.shift();
__jade.shift();
buf.push('</label>');
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

  }
}).call(this);

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
jade.templates['sidebar'] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div class="control-panel">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
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