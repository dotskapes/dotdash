
jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

jade.templates = {};
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
buf.push('<' + (label) + ' class="view">');
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
buf.push('</' + (label) + '>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
};