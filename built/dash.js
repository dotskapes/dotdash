(function() {'use strict'; var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var Filter=Backbone.Model.extend({defaults:{filterSelector:void 0},isFiltered:function(){return void 0!==this.get("filterSelector")},setFilterToSelection:function(a){this.set("filterSelector",a)},filter:function(a){return this.isFiltered()?a.both(this.get("filterSelector")):a},clear:function(){this.set("filterSelector",void 0)},getLayerSelector:function(){return this.isFiltered()?this.get("filterSelector"):this.get("serviceLayer").getLayerSelector()},getUnfiltered:function(){return!this.isFiltered()?
null:this.get("serviceLayer").getLayerSelector().not(this.get("filterSelector"))}});var ColorRamps={GREY_BLUE:[wiggle.util.icolor(255,247,251,255),wiggle.util.icolor(208,209,230,255),wiggle.util.icolor(166,189,219,255),wiggle.util.icolor(116,169,207,255),wiggle.util.icolor(43,140,190,255),wiggle.util.icolor(4,90,141,255)],WHITE_RED:[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],RED_BLUE:[wiggle.util.icolor(178,24,43,
255),wiggle.util.icolor(239,138,98,255),wiggle.util.icolor(253,219,199,255),wiggle.util.icolor(209,169,207,255),wiggle.util.icolor(103,169,207,255),wiggle.util.icolor(33,102,172,255)],BROWN_GREEN:[wiggle.util.icolor(140,82,10,255),wiggle.util.icolor(216,179,101,255),wiggle.util.icolor(246,232,195,255),wiggle.util.icolor(199,234,229,255),wiggle.util.icolor(90,180,172,255),wiggle.util.icolor(1,102,94,255)],WHITE_GREEN:[wiggle.util.icolor(237,248,233,255),wiggle.util.icolor(199,233,192,255),wiggle.util.icolor(161,
217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)]};ColorRamps.NUM_COLORS=ColorRamps.WHITE_RED.length;ColorRamps.RAMPS=[ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];var ColorScales={DISTRIBUTION:{QUANTILE:0,UNIFORM:1},RANGE:{LOCAL:0,GLOBAL:1}};var NUM_COLORS=ColorRamps.NUM_COLORS,ColorMap=function(a,b,c){var d={},e={},f=function(a,b){e[a]=[];b.sort(function(a,b){return a-b});d[a]={min:b[0],max:b[b.length-1]};for(var c=1;c<=NUM_COLORS;c++){var f=Math.round(c*b.length/NUM_COLORS),g=Math.round((c-1)*b.length/NUM_COLORS);e[a].push({max:b[f-1],min:b[g]})}};a.numeric().forEach(function(b){var e=[];a.features().each(function(a,d){var c=d.attr(b);void 0!==c&&e.push(c)});f(b,e)});var g=function(a,b){if(b<=e[a][0].max)return 0;if(b>=e[a][e[a].length-
1].min)return e[a].length-1;for(var c=0;c<e[a].length-1;c++)if(e[a][c].min<=b&&e[a][c+1].min>b)return c;return e[a].length-1};c.on("change:agg",function(){var c=b.get("agg");if(c){var g=[];a.features().each(function(a,b){g.push(c[b.id])});f("agg",g)}else d.agg=void 0,e.agg=void 0});this.colorForFeature=function(a){var e=b.get("attr"),f=ColorRamps.RAMPS[b.get("colorRampIndex")],j=b.get("colorDist");a="none"===b.get("agg")?a.attr(e):c.get("agg")[a.id];if(!a)return ColorMap.NO_DATA;var k;j===ColorScales.DISTRIBUTION.QUANTILE?
k=g(e,a):j===ColorScales.DISTRIBUTION.UNIFORM&&(j=d[e].max+1,k=Math.floor((1-(j-a)/(j-(d[e].min-1)))*f.length));return f[k]};this.extents=function(a){return d[a]}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var dash={controllers:{panels:{}}};window.dash=dash;var Panel;
(function(){var a={};Panel=function(a,c,d,e,f){var g=this;this.created=!1;this.name=c;this.label=a;a=jade.templates.panel;this.parentElement=$(a({name:this.name}));this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){return this.parentElement};this.fireSelect=function(a){d.select(a)};this.allFeatures=function(){return f.currentData.features()};this.width=function(){return this.parentElement.width()};
this.height=function(){return this.parentElement.height()};this.resize=function(){this.hasWiggleView()&&this.getWiggleView().resize()};this.select=function(){};this.deselect=function(){};this.draw=function(){};this.hasWiggleView=function(){return null!==this.getWiggleView()&&void 0!==this.getWiggleView()};this.getWiggleView=function(){return null};this.tempSelectMode=function(){};this.create=function(){};this.newData=function(){};$(document).on("keydown",function(a){18===a.which&&e.set("selectOverride",
!0)});$(document).on("keyup",function(a){18===a.which&&e.set("selectOverride",!1)});(function(){e.on("change",function(a){var b=g.getWiggleView();b&&(a.isMoveMode()?b.disableSelect():b.enableSelect())},this)})()};Panel.getClass=function(b){return a[b]};Panel.register=function(b,c){a[b]=c};Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection",FILTER:"filter"};dash.controllers.Panel=Panel})();var GridPanel={};
(function(){var a=function(a,c,d){Panel.call(this,"Grid","grid",a,c,d);var e,f;this.getGrid=function(){return e};this.getWiggleView=function(){return e};this.create=function(){this.container=$("<div>").attr("class","grid");this.parentElement.append(this.container);this.show();e=new wiggle.Map(".grid");this.created=!0};this.newData=function(a){f&&e.remove(f);f=a};this.draw=function(a){d.getLayerSelector().style(e,"fill-opacity",0.9).style(e,"stroke-opacity",1);a.getLayerSelector().style(e,"fill",function(a){return d.getColorForFeature(a)})}};
Panel.register("grid",a);dash.controllers.panels.GridPanel=a})();var AGGREGATION_FUNCTIONS={mean:function(a){var b=0,c=0;$.each(a,function(a,e){isNaN(e)||(b+=e,c+=1)});return b/c},min:function(a){var b=Infinity;$.each(a,function(a,d){isNaN(d)||(b=d<b?d:b)});return b},max:function(a){var b=-Infinity;$.each(a,function(a,d){isNaN(d)||(b=d>b?d:b)});return b}};var AggregationService=function(){this.computeAggregates=function(a,b){var c=AGGREGATION_FUNCTIONS[a];if(!c)return{};var d={};$.each(b,function(a,b){d[a]=c(b)});return d}};var ServiceLayer=function(){var a=null,b={},c=[],d=[],e={};return{addDataCallback:function(a){c.push(a)},loadUrl:function(f,g,h,l){var m=this;$.ajax({url:f,dataType:"json",success:function(f){a=wiggle.io.GeoJSON(f);d=a.numeric();d.sort();e={};d.forEach(function(a,b){e[a]=b});if(f=g.get("agg"))f=(new AggregationService).computeAggregates(f,m.getAttributesByFeature()),h.set("agg",f);b=new ColorMap(a,g,h);var k=a;$.each(c,function(a,b){b(k,l)});g.get("attr")||g.set("attr",m.getSortedDateProperties()[0])}})},
getLayerSelector:function(){return a.features()},getSortedDateProperties:function(){return!a?[]:d},getIndexOfAttr:function(a){return e[a]},getAttributesByFeature:function(){var b=a.features(),e=a.properties(),c={};b.each(function(a,b){var d={};$.each(e,function(a,e){d[e]=b.attr(e)});c[b.id]=d});return c},getAttributesBySortedDateProperty:function(){var b=a.numeric().sort(),e=a.features(),c={};$.each(b,function(a,b){var d={};e.each(function(a,e){d[e.id]=e.attr(b)});c[b]=d});return c},getColorForFeature:function(a){return b.colorForFeature(a)}}};var MoveSelModel=Backbone.Model.extend({defaults:{isMove:!0,selectOverride:!1},toggle:function(){var a=!this.get("isMove");this.set({isMove:a})},isMoveMode:function(){return this.get("isMove")&&!this.get("selectOverride")}});var $div=function(){return $("<div></div>")},Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,c){a.text(b);a.css({display:"block",left:c.clientX+5,top:c.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};var TimePanel={};
(function(){var a=function(a,c,d){Panel.call(this,"Time Series","time",a,c,d);var e,f,g=this;this.xlabel=$("<div>").text("X Label").addClass("label").addClass("xlabel");this.ylabel=$("<div>").text("Y Label").addClass("label").addClass("ylabel");this.container=$("<div>").attr("class","timeseries");this.parentElement.append(this.container).append(this.xlabel).append(this.ylabel);this.show();this.created=!0;this.create=function(){};this.getWiggleView=function(){return e};this.resize=function(){var a=
this.container.parent().height(),b=this.container.parent().width(),c=this.container.parent().offset();this.container.css({height:a-this.xlabel.height(),width:b-this.ylabel.height(),"margin-left":this.ylabel.height()});this.xlabel.css({left:c.left+b/2+this.ylabel.height()-this.xlabel.width()/2});this.ylabel.css({left:c.left+this.ylabel.height()/2-this.ylabel.width()/2,top:c.top+a/2-this.ylabel.height()/2-this.xlabel.height()/2,transform:"rotate(90deg)"});e&&e.resize()};this.newData=function(a,b){f=
a;var c=f.numeric();c.sort();f.attr("order",c);e=new wiggle.TimeSeries(".timeseries",f,{ticks:500,ylock:!0});this.xlabel.text(b.xlabel);this.ylabel.text(b.ylabel);this.resize();e.select(function(a){a=e.search(f,a);g.fireSelect(a)})};this.deselect=function(a){a.style(e,"stroke",function(a){return d.getColorForFeature(a)})};this.select=function(a){a.style(e,"stroke",ColorMap.HIGHLIGHT)};this.draw=function(a){a.isFiltered()?a.getUnfiltered().style(e,"stroke-opacity",0):d.getLayerSelector().style(e,"stroke-opacity",
1);f.features().style(e,"stroke",function(a){return d.getColorForFeature(a)})}};Panel.register("time",a);dash.controllers.panels.TimePanel=a})();var PanelState=Backbone.Model.extend({defaults:{panels:[],left:0,right:1},findPanel:function(a){for(var b=this.get("panels"),c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},getPanel:function(a){return this.get("panels")[a]}});var MoveSelController=Backbone.View.extend({initialize:function(){this.model=this.model||new MoveSelModel},start:function(a){a.append(this.$el);this.render()},render:function(){var a=jade.templates.moveSel();this.$el.empty().append(a)},events:{"click .move-sel-toggle":"toggle"},toggle:function(a){$(a.currentTarget).children(".icon").toggleClass("enabled");this.model.toggle()}});var DistribRangeController=function(){this.start=function(a){$('.filter-button[name="'+DistribRangeController.DISTRIB+'"]').change(function(b){b=parseInt($(b.target).val(),10);a.set("colorDist",b)})}};DistribRangeController.DISTRIB="dist";DistribRangeController.RANGE="range";var ColorRampController=Backbone.View.extend({initialize:function(){this.rampSvgClass="ramp-svg"},start:function(a){this.dashState=a;this.render(a)},newRamp:function(a){this.dashState.set("colorRampIndex",a);this.redraw(this.dashState)},redraw:function(a){d3.select(this.$("."+this.rampSvgClass).get(0)).remove();this.render(a)},render:function(a){var b=ColorRamps.RAMPS,c=26*b.length,d=20*ColorRamps.NUM_COLORS,e=d3.select(this.$el.get(0)).append("svg:svg").attr("class",this.rampSvgClass).attr("width",
d+6).attr("height",c),f=0,g=0;_.each(b,function(b,c){var m=e.append("svg:rect").attr("x",f).attr("y",g).attr("height",26).attr("width",d+6).attr("fill","white");c===a.get("colorRampIndex")&&m.attr("fill","yellow");f=3;_.each(b,function(d){e.append("svg:rect").attr("x",f).attr("y",g+3).attr("height",20).attr("width",20).attr("fill",d3.rgb(d.rgb())).data([b]).on("click",_.bind(function(){this.newRamp(c,a)},this));f+=20},this);g+=26;f=0},this)}});ColorRampController.NAME="ramp";var AggregationController=function(){this.start=function(a,b,c){$('.filter-button[name="'+AggregationController.NAME+'"]').change(function(d){d=$(d.target).val();var e;"none"!==d?(e=c.getAttributesByFeature(),e=(new AggregationService).computeAggregates(d,e)):e=null;b.set("agg",e);a.set("agg",d)})}};AggregationController.NAME="agg";var TimeStepFilterView=function(){this.update=function(a){$(".step-filter").empty();var b=[];$.each(a,function(a,d){b.push({label:d,name:d})});return this.render(b)};this.render=function(a){var b=Handlebars.templates.select_and_options_template;a=b({selClass:TimeStepFilterView.CLASS,options:a});$("."+TimeStepFilterView.NAME+"-filter").html(a)}};TimeStepFilterView.NAME="step";TimeStepFilterView.CLASS=TimeStepFilterView.NAME+"-select";var TimeStepController=function(){var a=new TimeStepFilterView;this.start=function(b,c){var d=function(){$("."+TimeStepFilterView.CLASS).val(b.get("attr"))};c.addDataCallback(function(e){a.update(e.properties().sort());$("."+TimeStepFilterView.CLASS).change(function(a){a=$(a.target).val();b.set("attr",a)});d()});b.on("change:attr",d)}};TimeStepController.NAME=TimeStepFilterView.NAME;var ColorController=Backbone.View.extend({start:function(a,b,c,d){a.append(this.$el);this.render(b);this.$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});this.initControllers(b,c,d)},render:function(a){var b=a.get("agg");a=a.get("colorDist");b=[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.NAME,title:"Color Ramp",options:[]},{name:"dist",title:"Color Distribution",
options:[{label:"Uniform",value:ColorScales.DISTRIBUTION.UNIFORM,selected:a===ColorScales.DISTRIBUTION.UNIFORM},{label:"Quantile",value:ColorScales.DISTRIBUTION.QUANTILE,selected:a===ColorScales.DISTRIBUTION.QUANTILE}]},{name:AggregationController.NAME,title:"Aggregate",options:[{label:"None",value:"none",selected:"none"===b},{label:"Mean",value:"mean",selected:"mean"===b},{label:"Max",value:"max",selected:"max"===b},{label:"Min",value:"min",selected:"min"===b}]}];a=jade.templates.coloring;this.$el.empty().append(a({colorings:b}))},
initControllers:function(a,b,c){_.bind(function(a){this.$(".filter-button").change(function(b){var c=$(b.target).attr("name");b=$(b.target).attr("value");a(c,b)})},this)(function(a,b){console.log(a+" changed to "+b)});(new ColorRampController({el:this.$("."+ColorRampController.NAME+"-filter")})).start(a);(new TimeStepController).start(a,c);(new DistribRangeController).start(a);(new AggregationController).start(a,b,c)}});var FilterController=Backbone.View.extend({initialize:function(a){this.model=this.model||new Filter;this.selectionManager=a.selectionManager},start:function(a){a.append(this.$el);this.render()},render:function(){var a=$(jade.templates.filter());this.$el.empty().append(a)},events:{"click .filter-selected":"filterSel","click .filter-off":"unfilter"},filterSel:function(){this.model.setFilterToSelection(this.selectionManager.getSelection())},unfilter:function(){this.model.clear()}});var SidebarController=Backbone.View.extend({start:function(a,b){a.append(this.$el);this.render(b)},render:function(a){var b=$(jade.templates.sidebar());this.$el.empty().append(b);(new MoveSelController({model:a.moveSelModel})).start(b);(new FilterController({model:a.filter,selectionManager:a.selectionManager})).start(b);(new ColorController).start(b,a.dashState,a.aggregateModel,a.serviceLayer)}});var TablePanel={};
(function(){var a=function(a,c,d){Panel.call(this,"Data Table","table",a,c,d);this.create=function(){this.created=!0};this.features=null;this.newData=function(a){this.features=a.features();this.parentElement.empty();this.container=$("<div>");this.parentElement.append(this.container);var b=a.properties(),c=[];a.features().each(_.bind(function(a,b){c.push(b)},this));a=jade.templates.table({columns:b,features:c});this.container.append(a)};this.eachRow=function(a){$(".table table tr").slice(1).each(_.bind(a,this))};
this.rowToFeature=function(a){a=$(a).attr("fid");return this.features.id(a)};this.featureToRow=function(a){return $(".table table tr[fid="+a.id+"]")};this.deselect=function(a){a.each(_.bind(function(a,b){this.featureToRow(b).css("background-color",d.getColorForFeature(b).rgb())},this))};this.select=function(a){a.each(_.bind(function(a,b){this.featureToRow(b).css("background-color",ColorMap.HIGHLIGHT.rgb())},this))};this.draw=function(){this.eachRow(function(a,b){var c=this.rowToFeature(b),c=d.getColorForFeature(c);
$(b).css("background-color",c.rgb())})}};Panel.register("table",a);dash.controllers.panels.TablePanel=a})();var MapPanel={};
(function(){var a=function(a,c,d){Panel.call(this,"Map","map",a,c,d);var e,f,g=this;this.getMap=function(){return e};this.getWiggleView=function(){return e};this.create=function(){this.container=$("<div>").attr("class","wigglemap");this.parentElement.append(this.container);this.show();e=new wiggle.Map(".wigglemap");e.select(function(a){a=e.search(f,a);g.fireSelect(a)});this.created=!0};this.newData=function(a){f&&e.remove(f);f=a;f.features().type("Polygon").style(e,"stroke",ColorMap.WHITE).style(e,"fill-opacity",
0.9);e.center(f.bounds.centroid());e.extents(f.bounds.width());e.append(f)};this.deselect=function(a){a.style(e,"fill",function(a){return d.getColorForFeature(a)})};this.select=function(a){a.style(e,"fill",ColorMap.HIGHLIGHT)};this.draw=function(a){a.isFiltered()?a.getUnfiltered().style(e,"fill-opacity",0).style(e,"stroke-opacity",0):d.getLayerSelector().style(e,"fill-opacity",0.9).style(e,"stroke-opacity",1);a.getLayerSelector().style(e,"fill",function(a){return d.getColorForFeature(a)})}};Panel.register("map",
a);dash.controllers.panels.MapPanel=a})();var PanelManager=Backbone.View.extend({panelDivs:{},start:function(a,b,c,d,e){var f=this;a.append(this.$el);this.render();$(window).resize(function(){f.setSize()});this.model.on("change",function(){f.setPanels()});this.initPanels(b,c,d,e);this.setPanels();this.initFilterListener(c,d)},$left:null,$right:null,events:{"change select":"changePane"},className:"panels",render:function(){var a=this,b=$(jade.templates.panels({model:this.model}));this.$el.empty().append(b);this.$left=this.$el.find(".left");
this.$right=this.$el.find(".right");this.setSize();$.each(this.model.get("panels"),function(b,d){a.panelDivs[d.name]=d.makeParentElement();a.$left.find(".view").append(a.panelDivs[d.name]);d.create();a.panelDivs[d.name].hide()})},setSize:function(){var a=0;this.$el.siblings().each(function(b,c){a+=$(c).height()+parseInt($(c).css("marginTop"),10)+parseInt($(c).css("marginBottom"),10)});var b=0;this.$left.find(".view").siblings().each(function(a,c){b+=$(c).height()+parseInt($(c).css("marginTop"),10)+
parseInt($(c).css("marginBottom"),10)});var c=this.$el.parent().height()-a-b;this.$left.find(".view").css("height",c);this.$right.find(".view").css("height",c);1===this.model.get("panels").length?(this.$left.find(".view").css("width",$(".panels").width()),this.$right.hide()):(c=$(".panels").width()/2,this.$left.find(".view").css("width",c),this.$right.find(".view").css("width",c));this.model.get("panels")[this.model.get("left")].resize();this.model.get("panels")[this.model.get("right")].resize()},
showPanel:function(a){a.created||a.create();a.show();a.resize()},setPanel:function(a){var b=this.model.getPanel(this.model.get(a)),c=this["$"+a];c.find(".view").children().hide();b&&(c.find(".view").append(this.panelDivs[b.name]),this.showPanel(b),c.find("select").val(this.model.get(a)))},setPanels:function(){this.setPanel("left");this.setPanel("right")},initPanels:function(a,b,c,d){var e=this;$.each(this.model.get("panels"),function(a,e){d.addDataCallback(function(a,c){e.newData(a,c);e.draw(b)});
c.addView(e)});a.on("change",function(){e.draw(b,c)})},draw:function(a,b){$.each(this.model.get("panels"),function(b,d){d.draw(a)});b.reselect()},changePane:function(a){var b=this.$left.find(".select select"),c=this.$right.find(".select select"),d=parseInt(b.val(),10),c=parseInt(c.val(),10);d===c&&(a.target===b.get(0)?c=(c+1)%this.model.get("panels").length:d=(d+1)%this.model.get("panels").length);this.model.set({left:d,right:c})},initFilterListener:function(a,b){var c=this;a.on("change",function(){c.draw(a,
b)})}});var TimeSliderController=function(){this.start=function(a,b,c){var d=new wiggle.widget.Slider,e=function(){var a=b.get("attr");d.model.set("index",c.getIndexOfAttr(a))};c.addDataCallback(function(){d.model.set("attr",c.getSortedDateProperties());e();d.change(function(a){b.set("attr",d.model.get("attr")[a])})});b.on("change:attr",e);a.append(d.$el)}};var SelectionManager=function(a){var b=[],c,d=!1;this.addView=function(a){b.push(a)};this.getSelection=function(){return c};this.select=function(e){e=a.filter(e);$.each(b,function(a,b){!d&&c&&b.deselect(c);b.select(e)});c=!c||!d?e:c.join(e)};this.reselect=function(){c&&this.select(c)};$(document).on("keydown",function(a){16===a.which&&(d=!0)});$(document).on("keyup",function(a){16===a.which&&(d=!1)})};var DashboardState=Backbone.Model.extend({defaults:{attr:null,colorRampIndex:0,colorDist:ColorScales.DISTRIBUTION.UNIFORM,agg:"none"}});var AggregateModel=Backbone.Model.extend({defaults:{agg:null}});var Dashboard={};
dash.Dashboard=function(a){var b=a.parent||"body",c=a.panels||["map","time","table"],d=new DashboardState(a.saved||{}),e=new AggregateModel,f=new ServiceLayer;a=$(b);a.empty();(new TimeSliderController).start(a,d,f);var g=new MoveSelModel,b=new Filter({serviceLayer:f}),h=new SelectionManager(b);(new SidebarController).start(a,{dashState:d,aggregateModel:e,moveSelModel:g,filter:b,selectionManager:h,serviceLayer:f});var l=[];$.each(c,function(a,b){var c=dash.controllers.Panel.getClass(b);l.push(new c(h,
g,f))});c=new PanelState({panels:l});(new PanelManager({model:c})).start(a,d,b,h,f);this.loadUrl=function(a,b){f.loadUrl(a,d,e,b)};this.getState=function(){return d.toJSON()}};})();
