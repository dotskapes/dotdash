(function() {var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,g=0;d=b[g];g++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var f in d.requires[e])if(!goog.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=!1,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=!0;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var ServiceLayer=function(){var a={query:"jan >= 0",step:"2002-12-29",ramp:[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],dist:"quantile",scale:"local"},b=null,c=[];return{addDataCallback:function(a){c.push(a)},loadUrl:function(a){var e=this;$.ajax({url:a,dataType:"json",success:function(a){b=wiggle.io.GeoJSON(a);b.style("stroke",wiggle.util.fcolor(0.3,
0.3,0.3,1)).style("stroke-opacity",0.75).style("fill-opacity",0.8);e.currentData=b;e.colorMap=new ColorMap(b);var d=b;$.each(c,function(a,b){b(d)})}})},currentData:{},change:function(b,c){a[b]=c},colorMap:{},getSortedDateProperties:function(a){a=a.numeric();a.sort();return a}}}();"use strict";var selectionManager=new SelectionManager;function SelectionManager(){var a=[],b;this.addView=function(b){a.push(b)};this.select=function(c){$.each(a,function(a,e){b&&e.deselect(b);e.select(c)});b=c};this.reselect=function(){b&&this.select(b)}};var Panel=function(a,b,c){this.created=!1;this.name=a;this.label=b;this.parentElement;this.container;this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){return this.parentElement=$((0,Handlebars.templates["panel-template"])({label:this.label,configOptions:c}))};this.fireSelect=function(a){selectionManager.select(a)};this.allFeatures=function(){return ServiceLayer.currentData.features()};
this.width=function(){return this.parentElement.width()};this.height=function(){return this.parentElement.height()};this.select=function(){};this.deselect=function(){}};Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection"};Handlebars.registerHelper("renderButton",function(a,b){if(a===Panel.BUTTON_TYPES.SELECTION_TOGGLE)return new Handlebars.SafeString((0,Handlebars.templates.selection_toggle_button)(b))});"use strict";
var MDSPanel=function(){Panel.call(this,"MDS","mds");var a,b;this.show=function(){a.style("display","block");this.parentElement.show()};this.create=function(){a=d3.select(this.parentElement[0]).append("svg").attr({viewBox:"0 0 1 1",preserveAspectRatio:"none"});b=a.append("g");a.append("g");b.append("rect").attr("x",0).attr("y",0).attr("width",1).attr("height",1).style("fill","#ff0000");this.parentElement.append($(a.node()));this.show();this.created=!0};this.resize=function(){};this.change=function(){};
this.draw=function(){};this.newData=function(){};this.select=function(){};this.deselect=function(){}};var SVGSelection=function(a){var b=new vect(0,0),c=new vect(0,0),d=new vect(0,0),e=new vect(0,0),g=!1,f=!1,j=function(){},h=a.append("rect").style("fill-opacity",0).style("fill","green").style("display","none"),k=function(){d.x=b.x;d.y=b.y;e.x=c.x;e.y=c.y;if(d.x>e.x){var a=d.x;d.x=e.x;e.x=a}d.y>e.y&&(a=d.y,d.y=e.y,e.y=a);h.attr("x",d.x).attr("y",d.y).attr("width",e.x-d.x).attr("height",e.y-d.y)};a.on("mousedown",function(){f&&(h.style("display","block"),b.x=d3.mouse(this)[0],b.y=d3.mouse(this)[1],
c.x=d3.mouse(this)[0],c.y=d3.mouse(this)[1],h.style("fill-opacity",0.4),k(),g=!0)});a.on("mousemove",function(){g&&(c.x=d3.mouse(this)[0],c.y=d3.mouse(this)[1],k())});a.on("mouseup",function(){if(f&&(h.style("display","none"),g)){h.style("fill-opacity",0);var a=new wiggle.util.Box(d,e);g=!1;j(a)}});this.enable=function(){f=!0};this.disable=function(){f=!1};this.release=function(a){j=a};this.dragging=function(){return g}};function $div(){return $("<div></div>")}var Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,c){a.text(b);a.css({display:"block",left:c.clientX+5,top:c.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};"use strict";
var TimePanel=function(){Panel.call(this,"Time Series","time",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Panel",select:"Select Time Steps"},enabled:!1}}});var a,b,c=this;this.create=function(){this.container=$("<div>").attr("id","timeseries");this.parentElement.append(this.container);this.show();this.created=!0};this.resize=function(){a.resize()};this.newData=function(d){b&&a.remove(b);b=d;d=b.numeric();d.sort();b.attr("order",d);a=new wiggle.TimeSeries("#timeseries",{width:d.length/
10,height:6500,min:new vect(0,0)});a.append(b);a.select(function(d){selectionLayer=a.search(b,d);c.fireSelect(selectionLayer)});$("#time-selection-button").click(function(b){$(b.currentTarget).parents(".view").toggleClass("selection");$(b.currentTarget).children(".icon").toggleClass("enabled");$(b.currentTarget).children(".selection_box").hasClass("enabled")?a.enableSelect():a.disableSelect()});this.deselect(b);this.draw()};this.deselect=function(b){b.style(a,"stroke",function(a){return ServiceLayer.colorMap.colorForFeat(a)})};
this.select=function(b){b.style(a,"stroke",ColorMap.HIGHLIGHT)};this.draw=function(){b.features().style(a,"stroke",function(a){return ServiceLayer.colorMap.colorForFeat(a)})}};"use strict";
var NUM_COLORS=6,ColorMap=function(a){var b={},c=ServiceLayer.getSortedDateProperties(a),d=c[0],e=function(a,c){a.sort(function(a,b){return a-b});b[c]={min:a[0],max:a[a.length-1]}},g=[];$.each(c,function(b,c){var f=[];a.features().each(function(a,b){f.push(b.attr(c));g.push(b.attr(c))});e(f,d)});e(g,"global");for(var f={global:[]},j=1;j<=NUM_COLORS;j++){var h=Math.round(j*g.length/NUM_COLORS),k=Math.round((j-1)*g.length/NUM_COLORS);f.global.push({min:g[k],max:g[h-1]})}for(h=0;h<c.length;h++){k=c[h];
f[k]=[];for(var l=1;l<=NUM_COLORS;l++){var j=ServiceLayer.currentData.features().quantile(k,l,NUM_COLORS);j.range(k)&&f[k].push(j.range(k))}}this.currentDateProp=function(a){d=a};var c=[wiggle.util.icolor(255,247,251,255),wiggle.util.icolor(208,209,230,255),wiggle.util.icolor(166,189,219,255),wiggle.util.icolor(116,169,207,255),wiggle.util.icolor(43,140,190,255),wiggle.util.icolor(4,90,141,255)],j=[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,
114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],h=[wiggle.util.icolor(178,24,43,255),wiggle.util.icolor(239,138,98,255),wiggle.util.icolor(253,219,199,255),wiggle.util.icolor(209,169,207,255),wiggle.util.icolor(103,169,207,255),wiggle.util.icolor(33,102,172,255)],k=[wiggle.util.icolor(140,82,10,255),wiggle.util.icolor(216,179,101,255),wiggle.util.icolor(246,232,195,255),wiggle.util.icolor(199,234,229,255),wiggle.util.icolor(90,180,172,
255),wiggle.util.icolor(1,102,94,255)],l=[wiggle.util.icolor(237,248,233,255),wiggle.util.icolor(199,233,192,255),wiggle.util.icolor(161,217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)],n=j,p=0,m=0;this.colorForFeat=function(a){a.attr||console.log("here");a=a.attr(d);if(!a)return ColorMap.NO_DATA;var c;if(0==p){var e;0==m?e=d:1==m&&(e="global");a:if(a<=f[e][0].max)c=0;else if(a>=f[e][f[e].length-1].min)c=f[e].length-1;else{for(c=
0;c<f[e].length-1;c++)if(f[e][c].min<=a&&f[e][c+1].min>a)break a;c=void 0}}else 1==p&&(0==m?e=d:1==m&&(e="global"),c=b[e].max+1,c=Math.floor((1-(c-a)/(c-(b[e].min-1)))*n.length));return n[c]};this.extents=function(a){return b[a]};var q=[j,c,h,l,k];this.setColorRamp=function(a){n=q[a]};this.dist=function(a){p=a};this.range=function(a){m=a}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);
ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var MapPanel=function(){Panel.call(this,"Map","map",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Map",select:"Select Features"},enabled:!1}}});var a,b,c=this;this.getMap=function(){return a};this.create=function(){this.container=$("<div>").attr("id","wigglemap");this.parentElement.append(this.container);this.show();a=new wiggle.Map("#wigglemap");a.select(function(d){selectionLayer=a.search(b,d);c.fireSelect(selectionLayer)});$("#map-selection-button").click(function(b){$(b.currentTarget).parents(".view").toggleClass("selection");
$(b.currentTarget).children(".icon").toggleClass("enabled");$(b.currentTarget).children(".selection_box").hasClass("enabled")?a.enableSelect():a.disableSelect()});this.created=!0};this.resize=function(){a.resize()};this.newData=function(d){b&&a.remove(b);b=d;b.features().style(a,"stroke",ColorMap.WHITE).style(a,"fill-opacity",0.9);a.center(b.bounds.centroid());a.extents(b.bounds.width());a.append(b);c.draw()};this.deselect=function(b){b.style(a,"fill",function(a){return ServiceLayer.colorMap.colorForFeat(a)})};
this.select=function(b){b.style(a,"fill",ColorMap.HIGHLIGHT)};this.draw=function(){b.features().style(a,"fill",function(a){return ServiceLayer.colorMap.colorForFeat(a)})}};"use strict";
var PanelManager=new function(){var a={},b,c=0,d=1,e=$("<div>").attr("id","left"),g=$("<div>").attr("id","right");this.init=function(c){b=[new MapPanel,new TimePanel,new MDSPanel];$.each(b,function(b,c){a[c.label]=c;ServiceLayer.addDataCallback(function(a){return c.newData(a)});selectionManager.addView(c)});var d=$("<div>").addClass("panels").append(e).append(g);$(c).append(d);$.each(b,function(a,b){var c=b.makeParentElement();d.append(c)});c=Handlebars.templates["select-template"];var h=c({selClass:"left-select"});
e.append(h);g.append(c({selClass:"right-select"}));$.each(b,function(a,b){$(".view-select").append((0,Handlebars.templates["select-option-template"])({label:b.label,name:b.name}))});f($(".left-select"));f($(".right-select"));$(".left-select").val(b[0].name).change()};this.draw=function(){$.each(b,function(a,b){b.draw()});selectionManager.reselect()};var f=function(b){b.change(function(){$(".view").hide();var e=j($(".left-select")),f=j($(".right-select"));if(!e)throw"cant show panels: Left panel name undefined";
if(!f)throw"Right panel name undefined";e=a[e];f=a[f];$.each([e,f],function(a,b){if(!b)throw"Error: Panel "+leftPanelName+" "+rightPanelName+" not found";b.created?b.show():b.create()});$(".view").removeClass("left-panel").removeClass("right-panel");e.addClass("left-panel");f.addClass("right-panel");f=-1!==b.attr("class").indexOf("left")?$(".right-select"):$(".left-select");c=h($(".left-select"));d=h($(".right-select"));c===d&&(e=h(b)+1%$(".left-select option").length,-1!==f.attr("class").indexOf("left")?
c=e:d=e,k(f).removeAttr("selected"),e=f.children().eq(e).val(),f.val(e).change())})},j=function(a){return k(a).val()},h=function(a){return k(a).prop("index")},k=function(a){var b=a.children("option[selected='selected']");0==b.length&&(b=a.children("option:selected"));return b};$(window).resize(function(){b[c].resize();b[d].resize()})};var ColorRampController=function(){$('.filter-button[name="'+ColorRampController.CSS_CLASS+'"]').change(function(a){a=$(a.target).attr("value");ServiceLayer.colorMap.setColorRamp(a);PanelManager.draw()})};ColorRampController.CSS_CLASS="ramp";var TimeStepFilterView=function(){this.update=function(a){$("#step-filter").empty();var b=[];$.each(a,function(a,d){b.push({label:d})});return this.render(b)};this.render=function(a){a=(0,Handlebars.templates.radio_button_template)({options:a,name:"step"});$("#step-filter").html(a)}};var TimeStepController=function(){var a=new TimeStepFilterView;ServiceLayer.addDataCallback(function(b){a.update(b.properties().sort());$('.filter-button[name="'+TimeStepController.NAME+'"]').change(function(a){a=$(a.target).val();ServiceLayer.colorMap.currentDateProp(a);PanelManager.draw()})})};TimeStepController.NAME="step";"use strict";
var FilterController=function(a){new ColorRampController;var b=(0,Handlebars.templates.filter_template)({filters:[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.CSS_CLASS,title:"Color Ramp",options:[{label:0},{label:1},{label:2},{label:3},{label:4}]},{name:"dist",title:"Color Distribution",options:[{label:"Quantile"},{label:"Uniform"}]},{name:"range",title:"Color Scale",options:[{label:"Local"},{label:"Global"}]},{name:"agg",title:"Aggregate",options:[{label:"Mean"},{label:"Max"},
{label:"Min"}]}]});a.prepend(b);$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});$(".filter-button").change(function(a){var b=$(a.target).attr("name");a=$(a.target).attr("value");console.log(b+" changed to "+a)});new ColorRampController;new TimeStepController};var dash={};"use strict";function Dashboard(a,b){new FilterController($(a));PanelManager.init(a,b);ServiceLayer.loadUrl(b+"temp/flu_country.json")}window.dash={ready:function(a){$(document).ready(a)},create:function(a,b){return new Dashboard(a||"body",b||"")}};})();
