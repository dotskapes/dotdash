(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['compiled.js'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates['compiled.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  \n\n\n  return \"(function() {\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\ntemplates['filter_template'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var buffer = \\\"\\\", stack1, stack2, functionType=\\\"function\\\", escapeExpression=this.escapeExpression, self=this;\\n\\nfunction program1(depth0,data) {\\n  \\n  var buffer = \\\"\\\", stack1, stack2, foundHelper;\\n  buffer += \\\"\\\\n        <div class=\\\\\\\"filter\\\\\\\">\\\\n            <div class=\\\\\\\"collapse-toggler collapsed\\\\\\\">\\\\n                <span class=\\\\\\\"expand-arrow\\\\\\\">&#9655;</span>\\\\n                <span class=\\\\\\\"collapse-arrow\\\\\\\">&#9661;</span>\\\\n                \\\";\\n  foundHelper = helpers.title;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\n            </div>\\\\n            <div id=\\\\\\\"\\\";\\n  foundHelper = helpers.name;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"-filter\\\\\\\" class=\\\\\\\"collapsible\\\\\\\">\\\\n                \\\";\\n  stack1 = depth0.options;\\n  stack2 = {};\\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\"\\\\n            </div>\\\\n        </div>\\\\n    \\\";\\n  return buffer;}\\nfunction program2(depth0,data,depth1) {\\n  \\n  var buffer = \\\"\\\", stack1, stack2, foundHelper;\\n  buffer += \\\"\\\\n                    <label>\\\\n                         <input class=\\\\\\\"filter-button \\\";\\n  stack1 = depth1.name;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\" type=\\\\\\\"radio\\\\\\\"\\\\n                         name=\\\\\\\"\\\";\\n  stack1 = depth1.name;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\" value=\\\\\\\"\\\";\\n  stack1 = data.index;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\"\\\\n                         \\\";\\n  stack1 = data.index;\\n  stack2 = {};\\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\" />\\\";\\n  foundHelper = helpers.label;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\n                    </label>\\\\n                \\\";\\n  return buffer;}\\nfunction program3(depth0,data) {\\n  \\n  \\n  return \\\"checked\\\";}\\n\\n  buffer += \\\"<div id=\\\\\\\"options\\\\\\\">\\\\n    <h2>Filter</h2>\\\\n    \\\";\\n  stack1 = depth0.filters;\\n  stack2 = {};\\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\"\\\\n</div>\\\\n\\\";\\n  return buffer;});\\ntemplates['panel-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var buffer = \\\"\\\", stack1, stack2, foundHelper, functionType=\\\"function\\\", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;\\n\\nfunction program1(depth0,data,depth1) {\\n  \\n  var buffer = \\\"\\\", stack1, stack2, stack3, foundHelper;\\n  buffer += \\\"\\\\n            <div id=\\\\\\\"\\\";\\n  stack1 = depth1.label;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"-\\\";\\n  foundHelper = helpers.type;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"-button\\\\\\\" class=\\\\\\\"button\\\\\\\">\\\\n                \\\";\\n  stack1 = depth0.options;\\n  stack2 = depth0.type;\\n  stack3 = {};\\n  foundHelper = helpers.renderButton;\\n  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, \\\"renderButton\\\", stack2, stack1, {hash:stack3,data:data});\\n  buffer += escapeExpression(stack1) + \\\"\\\\n            </div>\\\\n        \\\";\\n  return buffer;}\\n\\n  buffer += \\\"<div id=\\\\\\\"\\\";\\n  foundHelper = helpers.label;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\" class=\\\\\\\"view\\\\\\\">\\\\n    <div class=\\\\\\\"buttons\\\\\\\">\\\\n        \\\";\\n  stack1 = depth0.configOptions;\\n  stack2 = {};\\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\"\\\\n    </div>\\\\n</div>\\\";\\n  return buffer;});\\ntemplates['radio_button_template'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var stack1, stack2, functionType=\\\"function\\\", escapeExpression=this.escapeExpression, self=this;\\n\\nfunction program1(depth0,data,depth1) {\\n  \\n  var buffer = \\\"\\\", stack1, stack2, foundHelper;\\n  buffer += \\\"\\\\n    <label>\\\\n        <input class=\\\\\\\"filter-button\\\\\\\" type=\\\\\\\"radio\\\\\\\" \\\\n        name=\\\\\\\"\\\";\\n  stack1 = depth1.name;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\" value=\\\\\\\"\\\";\\n  foundHelper = helpers.label;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\" \\\\n        \\\";\\n  stack1 = data.index;\\n  stack2 = {};\\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\" />\\\";\\n  foundHelper = helpers.label;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\n    </label>\\\\n\\\";\\n  return buffer;}\\nfunction program2(depth0,data) {\\n  \\n  \\n  return \\\"checked\\\";}\\n\\n  stack1 = depth0.options;\\n  stack2 = {};\\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});\\n  if(stack1 || stack1 === 0) { return stack1; }\\n  else { return ''; }});\\ntemplates['select-option-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var buffer = \\\"\\\", stack1, foundHelper, functionType=\\\"function\\\", escapeExpression=this.escapeExpression;\\n\\n\\n  buffer += \\\"<option value=\\\\\\\"\\\";\\n  foundHelper = helpers.label;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\">\\\";\\n  foundHelper = helpers.name;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"</option>\\\\n\\\";\\n  return buffer;});\\ntemplates['select-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var buffer = \\\"\\\", stack1, foundHelper, functionType=\\\"function\\\", escapeExpression=this.escapeExpression;\\n\\n\\n  buffer += \\\"<div>\\\\n  <select class=\\\\\\\"\\\";\\n  foundHelper = helpers.selClass;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\\n  else { stack1 = depth0.selClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\\n  buffer += escapeExpression(stack1) + \\\" view-select\\\\\\\"/>\\\\n</div>\\\";\\n  return buffer;});\\ntemplates['selection_toggle_button'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers; data = data || {};\\n  var buffer = \\\"\\\", stack1, stack2, self=this, functionType=\\\"function\\\", escapeExpression=this.escapeExpression;\\n\\nfunction program1(depth0,data) {\\n  \\n  \\n  return \\\" enabled\\\";}\\n\\nfunction program3(depth0,data) {\\n  \\n  \\n  return \\\" enabled\\\";}\\n\\n  buffer += \\\"<a class=\\\\\\\"icon move_arrow\\\";\\n  stack1 = depth0.enabled;\\n  stack2 = {};\\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\"\\\\\\\" title=\\\\\\\"\\\";\\n  stack1 = depth0.hoverText;\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.move;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\"></a>\\\\n<a class=\\\\\\\"icon selection_box\\\";\\n  stack1 = depth0.enabled;\\n  stack2 = {};\\n  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});\\n  if(stack1 || stack1 === 0) { buffer += stack1; }\\n  buffer += \\\"\\\\\\\" title=\\\\\\\"\\\";\\n  stack1 = depth0.hoverText;\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.select;\\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\\\\"></a>\\\";\\n  return buffer;});\\n})();\";});\ntemplates['filter_template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, stack2, functionType=\"function\", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = \"\", stack1, stack2, foundHelper;\n  buffer += \"\\n        <div class=\\\"filter\\\">\\n            <div class=\\\"collapse-toggler collapsed\\\">\\n                <span class=\\\"expand-arrow\\\">&#9655;</span>\\n                <span class=\\\"collapse-arrow\\\">&#9661;</span>\\n                \";\n  foundHelper = helpers.title;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\n            </div>\\n            <div id=\\\"\";\n  foundHelper = helpers.name;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"-filter\\\" class=\\\"collapsible\\\">\\n                \";\n  stack1 = depth0.options;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n            </div>\\n        </div>\\n    \";\n  return buffer;}\nfunction program2(depth0,data,depth1) {\n  \n  var buffer = \"\", stack1, stack2, foundHelper;\n  buffer += \"\\n                    <label>\\n                         <input class=\\\"filter-button \";\n  stack1 = depth1.name;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\" type=\\\"radio\\\"\\n                         name=\\\"\";\n  stack1 = depth1.name;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\" value=\\\"\";\n  stack1 = data.index;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\"\\n                         \";\n  stack1 = data.index;\n  stack2 = {};\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \" />\";\n  foundHelper = helpers.label;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\n                    </label>\\n                \";\n  return buffer;}\nfunction program3(depth0,data) {\n  \n  \n  return \"checked\";}\n\n  buffer += \"<div id=\\\"options\\\">\\n    <h2>Filter</h2>\\n    \";\n  stack1 = depth0.filters;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n</div>\\n\";\n  return buffer;});\ntemplates['panel-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, stack2, foundHelper, functionType=\"function\", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;\n\nfunction program1(depth0,data,depth1) {\n  \n  var buffer = \"\", stack1, stack2, stack3, foundHelper;\n  buffer += \"\\n            <div id=\\\"\";\n  stack1 = depth1.label;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"-\";\n  foundHelper = helpers.type;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"-button\\\" class=\\\"button\\\">\\n                \";\n  stack1 = depth0.options;\n  stack2 = depth0.type;\n  stack3 = {};\n  foundHelper = helpers.renderButton;\n  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, \"renderButton\", stack2, stack1, {hash:stack3,data:data});\n  buffer += escapeExpression(stack1) + \"\\n            </div>\\n        \";\n  return buffer;}\n\n  buffer += \"<div id=\\\"\";\n  foundHelper = helpers.label;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\\" class=\\\"view\\\">\\n    <div class=\\\"buttons\\\">\\n        \";\n  stack1 = depth0.configOptions;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n    </div>\\n</div>\";\n  return buffer;});\ntemplates['radio_button_template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var stack1, stack2, functionType=\"function\", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data,depth1) {\n  \n  var buffer = \"\", stack1, stack2, foundHelper;\n  buffer += \"\\n    <label>\\n        <input class=\\\"filter-button\\\" type=\\\"radio\\\" \\n        name=\\\"\";\n  stack1 = depth1.name;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\" value=\\\"\";\n  foundHelper = helpers.label;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\\" \\n        \";\n  stack1 = data.index;\n  stack2 = {};\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \" />\";\n  foundHelper = helpers.label;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\n    </label>\\n\";\n  return buffer;}\nfunction program2(depth0,data) {\n  \n  \n  return \"checked\";}\n\n  stack1 = depth0.options;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});\n  if(stack1 || stack1 === 0) { return stack1; }\n  else { return ''; }});\ntemplates['ramp_radios'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var stack1, stack2, functionType=\"function\", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = \"\", stack1, stack2, foundHelper;\n  buffer += \"\\n        <input class='filter-button' type='radio'\\n        name='\";\n  foundHelper = helpers.name;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"' value='\";\n  foundHelper = helpers.index;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"'\\n        \";\n  stack1 = data.index;\n  stack2 = {};\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \" />\\n\";\n  return buffer;}\nfunction program2(depth0,data) {\n  \n  \n  return \"checked\";}\n\n  stack1 = depth0.ramp;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack1 || stack1 === 0) { return stack1; }\n  else { return ''; }});\ntemplates['ramp_radios.handlebars~'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var stack1, stack2, functionType=\"function\", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = \"\", stack1, stack2, foundHelper;\n  buffer += \"\\n        <input class='filter-button' type='radio'\\n        name='\";\n  foundHelper = helpers.name;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"' value='index'\\n        \";\n  stack1 = data.index;\n  stack2 = {};\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \" />\\n\";\n  return buffer;}\nfunction program2(depth0,data) {\n  \n  \n  return \"checked\";}\n\n  stack1 = depth0.ramp;\n  stack2 = {};\n  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack1 || stack1 === 0) { return stack1; }\n  else { return ''; }});\ntemplates['select-option-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, foundHelper, functionType=\"function\", escapeExpression=this.escapeExpression;\n\n\n  buffer += \"<option value=\\\"\";\n  foundHelper = helpers.label;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"\\\">\";\n  foundHelper = helpers.name;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \"</option>\\n\";\n  return buffer;});\ntemplates['select-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, foundHelper, functionType=\"function\", escapeExpression=this.escapeExpression;\n\n\n  buffer += \"<div>\\n  <select class=\\\"\";\n  foundHelper = helpers.selClass;\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.selClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1) + \" view-select\\\"/>\\n</div>\";\n  return buffer;});\ntemplates['selection_toggle_button'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, stack2, self=this, functionType=\"function\", escapeExpression=this.escapeExpression;\n\nfunction program1(depth0,data) {\n  \n  \n  return \" enabled\";}\n\nfunction program3(depth0,data) {\n  \n  \n  return \" enabled\";}\n\n  buffer += \"<a class=\\\"icon move_arrow\";\n  stack1 = depth0.enabled;\n  stack2 = {};\n  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\\" title=\\\"\";\n  stack1 = depth0.hoverText;\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.move;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\"></a>\\n<a class=\\\"icon selection_box\";\n  stack1 = depth0.enabled;\n  stack2 = {};\n  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\\" title=\\\"\";\n  stack1 = depth0.hoverText;\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.select;\n  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;\n  buffer += escapeExpression(stack1) + \"\\\"></a>\";\n  return buffer;});\n})();";});
templates['filter_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n        <div class=\"filter\">\n            <div class=\"collapse-toggler collapsed\">\n                <span class=\"expand-arrow\">&#9655;</span>\n                <span class=\"collapse-arrow\">&#9661;</span>\n                ";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n            </div>\n            <div id=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-filter\" class=\"collapsible\">\n                ";
  stack1 = depth0.options;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    ";
  return buffer;}
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                    <label>\n                         <input class=\"filter-button ";
  stack1 = depth1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" type=\"radio\"\n                         name=\"";
  stack1 = depth1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" value=\"";
  stack1 = data.index;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"\n                         ";
  stack1 = data.index;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n                    </label>\n                ";
  return buffer;}
function program3(depth0,data) {
  
  
  return "checked";}

  buffer += "<div id=\"options\">\n    <h2>Filter</h2>\n    ";
  stack1 = depth0.filters;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;});
templates['panel_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n            <div id=\"";
  stack1 = depth1.label;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-button\" class=\"button\">\n                ";
  stack1 = depth0.options;
  stack2 = depth0.type;
  stack3 = {};
  foundHelper = helpers.renderButton;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "renderButton", stack2, stack1, {hash:stack3,data:data});
  buffer += escapeExpression(stack1) + "\n            </div>\n        ";
  return buffer;}

  buffer += "<div id=\"";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"view\">\n    <div class=\"buttons\">\n        ";
  stack1 = depth0.configOptions;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;});
templates['radio_button_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <label>\n        <input class=\"filter-button\" type=\"radio\" \n        name=\"";
  stack1 = depth1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" \n        ";
  stack1 = data.index;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n    </label>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "checked";}

  stack1 = depth0.options;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['select_option_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<option value=\"";
  foundHelper = helpers.label;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>\n";
  return buffer;});
templates['select_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n  <select class=\"";
  foundHelper = helpers.selClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " view-select\"/>\n</div>";
  return buffer;});
templates['selection_toggle_button'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return " enabled";}

function program3(depth0,data) {
  
  
  return " enabled";}

  buffer += "<a class=\"icon move_arrow";
  stack1 = depth0.enabled;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = depth0.hoverText;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.move;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"></a>\n<a class=\"icon selection_box";
  stack1 = depth0.enabled;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = depth0.hoverText;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.select;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"></a>";
  return buffer;});
})();