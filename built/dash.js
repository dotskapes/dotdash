(function() {'use strict'; var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,d){a=a.split(".");d=d||goog.global;!(a[0]in d)&&d.execScript&&d.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)!a.length&&goog.isDef(b)?d[c]=b:d=d[c]?d[c]:d[c]={}};goog.getObjectByName=function(a,b){for(var d=a.split("."),c=b||goog.global,e;e=d.shift();)if(goog.isDefAndNotNull(c[e]))c=c[e];else return null;return c};
goog.globalize=function(a,b){var d=b||goog.global,c;for(c in a)d[c]=a[c]};goog.addDependency=function(a,b,d){if(!COMPILED){var c;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;c=b[f];f++)e.nameToPath[c]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][c]=!0;for(c=0;b=d[c];c++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var d=a[b].src,c=d.lastIndexOf("?"),c=
-1==c?d.length:c;if("base.js"==d.substr(c-7,7)){goog.basePath=d.substr(0,c-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in c.written)){if(!(e in c.visited)&&(c.visited[e]=!0,e in c.requires))for(var g in c.requires[e])if(!goog.isProvided_(g))if(g in c.nameToPath)a(c.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);e in d||(d[e]=!0,b.push(e))}}var b=[],d={},c=goog.dependencies_,e;for(e in goog.included_)c.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},d;for(d in a)b[d]=goog.cloneObject(a[d]);return b}return a};goog.bindNative_=function(a,b,d){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,d){if(!a)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,c);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,d){goog.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,d);return a.apply(this,b)}};goog.mixin=function(a,b){for(var d in b)a[d]=b[d]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,d=b.createElement("script");d.type="text/javascript";d.defer=!1;d.appendChild(b.createTextNode(a));b.body.appendChild(d);
b.body.removeChild(d)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var d=function(a){return goog.cssNameMapping_[a]||a},c=function(a){a=a.split("-");for(var b=[],c=0;c<a.length;c++)b.push(d(a[c]));return b.join("-")},c=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?d:c:function(a){return a};return b?a+"-"+c(b):c(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var d=b||{},c;for(c in d){var e=(""+d[c]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+c+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a){return a};goog.exportSymbol=function(a,b,d){goog.exportPath_(a,b,d)};goog.exportProperty=function(a,b,d){a[b]=d};
goog.inherits=function(a,b){function d(){}d.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new d;a.prototype.constructor=a};
goog.base=function(a,b,d){var c=arguments.callee.caller;if(c.superClass_)return c.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===c)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===c)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var ColorRamps={GREY_BLUE:[wiggle.util.icolor(255,247,251,255),wiggle.util.icolor(208,209,230,255),wiggle.util.icolor(166,189,219,255),wiggle.util.icolor(116,169,207,255),wiggle.util.icolor(43,140,190,255),wiggle.util.icolor(4,90,141,255)],WHITE_RED:[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],RED_BLUE:[wiggle.util.icolor(178,24,43,
255),wiggle.util.icolor(239,138,98,255),wiggle.util.icolor(253,219,199,255),wiggle.util.icolor(209,169,207,255),wiggle.util.icolor(103,169,207,255),wiggle.util.icolor(33,102,172,255)],BROWN_GREEN:[wiggle.util.icolor(140,82,10,255),wiggle.util.icolor(216,179,101,255),wiggle.util.icolor(246,232,195,255),wiggle.util.icolor(199,234,229,255),wiggle.util.icolor(90,180,172,255),wiggle.util.icolor(1,102,94,255)],WHITE_GREEN:[wiggle.util.icolor(237,248,233,255),wiggle.util.icolor(199,233,192,255),wiggle.util.icolor(161,
217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)]};ColorRamps.NUM_COLORS=ColorRamps.WHITE_RED.length;ColorRamps.RAMPS=[ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];var ColorScales={DISTRIBUTION:{QUANTILE:0,UNIFORM:1},RANGE:{LOCAL:0,GLOBAL:1}};var ServiceLayer=function(){var a=null,b={},d=[],c=[],e={};return{addDataCallback:function(a){d.push(a)},loadUrl:function(f,g,k){var l=this;$.ajax({url:f,dataType:"json",success:function(f){a=wiggle.io.GeoJSON(f);c=a.numeric();c.sort();e={};c.forEach(function(a,b){e[a]=b});b=new ColorMap(a,g,k);var h=a;$.each(d,function(a,b){b(h)});g.set("attr",l.getSortedDateProperties()[0])}})},getLayerSelector:function(){return a.features()},getSortedDateProperties:function(){return!a?[]:c},getIndexOfAttr:function(a){return e[a]},
getAttributesByFeature:function(){var b=a.features(),c=a.properties(),d={};b.each(function(a,b){var e={};$.each(c,function(a,c){e[c]=b.attr(c)});d[b.id]=e});return d},getAttributesBySortedDateProperty:function(){var b=a.numeric().sort(),c=a.features(),d={};$.each(b,function(a,b){var e={};c.each(function(a,c){e[c.id]=c.attr(b)});d[b]=e});return d},getColorForFeature:function(a){return b.colorForFeature(a)}}};var $div=function(){return $("<div></div>")},Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,d){a.text(b);a.css({display:"block",left:d.clientX+5,top:d.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};var Panel=function(a,b,d,c,e){var f=this;this.created=!1;this.name=b;this.label=a;this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){var a=jade.templates.panel;return this.parentElement=$(a({name:this.name}))};this.fireSelect=function(a){d.select(a)};this.allFeatures=function(){return e.currentData.features()};this.width=function(){return this.parentElement.width()};
this.height=function(){return this.parentElement.height()};this.select=function(){};this.deselect=function(){};this.draw=function(){};this.getWiggleView=function(){};this.tempSelectMode=function(){};$(document).on("keydown",function(a){18===a.which&&c.set("selectOverride",!0)});$(document).on("keyup",function(a){18===a.which&&c.set("selectOverride",!1)});(function(){c.on("change",function(a){var b=f.getWiggleView();b&&(a.isMoveMode()?b.disableSelect():b.enableSelect())},this)})()};
Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection",FILTER:"filter"};var TimePanel=function(a,b,d){Panel.call(this,"Time Series","time",a,b,d);var c,e,f=this;this.create=function(){this.container=$("<div>").attr("class","timeseries");this.parentElement.append(this.container);this.show();this.created=!0};this.getWiggleView=function(){return c};this.resize=function(){c.resize()};this.newData=function(a){e=a;a=e.numeric();a.sort();e.attr("order",a);c=new wiggle.TimeSeries(".timeseries",e,{ticks:500,ylock:!0});c.select(function(a){a=c.search(e,a);f.fireSelect(a)})};this.deselect=
function(a){a.style(c,"stroke",function(a){return d.getColorForFeature(a)})};this.select=function(a){a.style(c,"stroke",ColorMap.HIGHLIGHT)};this.draw=function(){e.features().style(c,"stroke",function(a){return d.getColorForFeature(a)})}};var PanelState=Backbone.Model.extend({defaults:{panels:[],left:0,right:1},findPanel:function(a){for(var b=this.get("panels"),d=0;d<b.length;d++)if(b[d].name===a)return b[d];return null},getPanel:function(a){return this.get("panels")[a]}});var MDSPanel=function(a,b,d){Panel.call(this,"MDS","mds",a,b,d);var c,e;this.show=function(){c.style("display","block");this.parentElement.show()};this.create=function(){c=d3.select(this.parentElement[0]).append("svg").attr({viewBox:"0 0 1 1",preserveAspectRatio:"none"});e=c.append("g");c.append("g");e.append("rect").attr("x",0).attr("y",0).attr("width",1).attr("height",1).style("fill","#ff0000");this.parentElement.append($(c.node()));this.show();this.created=!0};this.resize=function(){};this.change=
function(){};this.draw=function(){};this.newData=function(){};this.select=function(){};this.deselect=function(){}};var MoveSelModel=Backbone.Model.extend({defaults:{isMove:!0,selectOverride:!1},toggle:function(){var a=!this.get("isMove");this.set({isMove:a})},isMoveMode:function(){return this.get("isMove")&&!this.get("selectOverride")}});var MoveSelController=Backbone.View.extend({initialize:function(){this.model=this.model||new MoveSelModel},start:function(a){a.append(this.$el);this.render()},render:function(){var a=jade.templates.moveSel();this.$el.empty().append(a)},events:{"click .move-sel-toggle":"toggle"},toggle:function(a){$(a.currentTarget).children(".icon").toggleClass("enabled");this.model.toggle()}});var DistribRangeController=function(){this.start=function(a){$('.filter-button[name="'+DistribRangeController.DISTRIB+'"]').change(function(b){b=parseInt($(b.target).val(),10);a.set("colorDist",b)})}};DistribRangeController.DISTRIB="dist";DistribRangeController.RANGE="range";var ColorRampController=Backbone.View.extend({initialize:function(){this.currentRampIndex=0;this.rampSvgClass="ramp-svg"},start:function(a){this.dashState=a;this.render(a)},newRamp:function(a){this.dashState.set("colorRamp",ColorRamps.RAMPS[a]);this.currentRampIndex=a;this.redraw(this.dashState)},redraw:function(a){d3.select(this.$("."+this.rampSvgClass).get(0)).remove();this.render(a)},render:function(a){var b=ColorRamps.RAMPS,d=26*b.length,c=20*ColorRamps.NUM_COLORS,e=d3.select(this.$el.get(0)).append("svg:svg").attr("class",
this.rampSvgClass).attr("width",c+6).attr("height",d),f=0,g=0;_.each(b,function(b,d){var m=e.append("svg:rect").attr("x",f).attr("y",g).attr("height",26).attr("width",c+6).attr("fill","white");d===this.currentRampIndex&&m.attr("fill","yellow");f=3;_.each(b,function(c){e.append("svg:rect").attr("x",f).attr("y",g+3).attr("height",20).attr("width",20).attr("fill",d3.rgb(c.rgb())).data([b]).on("click",_.bind(function(){this.newRamp(d,a)},this));f+=20},this);g+=26;f=0},this)}});
ColorRampController.NAME="ramp";var AGGREGATION_FUNCTIONS={mean:function(a){var b=0,d=0;$.each(a,function(a,e){isNaN(e)||(b+=e,d+=1)});return b/d},min:function(a){var b=Infinity;$.each(a,function(a,c){isNaN(c)||(b=c<b?c:b)});return b},max:function(a){var b=-Infinity;$.each(a,function(a,c){isNaN(c)||(b=c>b?c:b)});return b}};var AggregationService=function(a){this.computeAggregates=function(b){var d=AGGREGATION_FUNCTIONS[b];if(!d)return{};b=a.getAttributesByFeature();var c={};$.each(b,function(a,b){c[a]=d(b)});return c}};var AggregationController=function(){this.start=function(a,b,d){$('.filter-button[name="'+AggregationController.NAME+'"]').change(function(c){c=$(c.target).val();var e;e="none"!==c?(new AggregationService(d)).computeAggregates(c):null;b.set("agg",e);a.set("agg",c)})}};AggregationController.NAME="agg";var TimeStepFilterView=function(){this.update=function(a){$(".step-filter").empty();var b=[];$.each(a,function(a,c){b.push({label:c,name:c})});return this.render(b)};this.render=function(a){var b=Handlebars.templates.select_and_options_template;a=b({selClass:TimeStepFilterView.CLASS,options:a});$("."+TimeStepFilterView.NAME+"-filter").html(a)}};TimeStepFilterView.NAME="step";TimeStepFilterView.CLASS=TimeStepFilterView.NAME+"-select";var TimeStepController=function(){var a=new TimeStepFilterView;this.start=function(b,d){d.addDataCallback(function(c){a.update(c.properties().sort());$("."+TimeStepFilterView.CLASS).change(function(a){a=$(a.target).val();b.set("attr",a)})});b.on("change:attr",function(){$("."+TimeStepFilterView.CLASS).val(b.get("attr"))})}};TimeStepController.NAME=TimeStepFilterView.NAME;var ColorController=Backbone.View.extend({start:function(a,b,d,c){a.append(this.$el);this.render();this.$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});this.initControllers(b,d,c)},render:function(){var a=[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.NAME,title:"Color Ramp",options:[]},{name:"dist",title:"Color Distribution",options:[{label:"Uniform",
value:ColorScales.DISTRIBUTION.UNIFORM},{label:"Quantile",value:ColorScales.DISTRIBUTION.QUANTILE}]},{name:AggregationController.NAME,title:"Aggregate",options:[{label:"None",value:"none"},{label:"Mean",value:"mean"},{label:"Max",value:"max"},{label:"Min",value:"min"}]}],b=jade.templates.coloring;this.$el.empty().append(b({colorings:a}))},initControllers:function(a,b,d){_.bind(function(a){this.$(".filter-button").change(function(b){var d=$(b.target).attr("name");b=$(b.target).attr("value");a(d,b)})},
this)(function(a,b){console.log(a+" changed to "+b)});(new ColorRampController({el:this.$("."+ColorRampController.NAME+"-filter")})).start(a);(new TimeStepController).start(a,d);(new DistribRangeController).start(a);(new AggregationController).start(a,b,d)}});var Filter=Backbone.Model.extend({defaults:{filterSelector:void 0},isFiltered:function(){return void 0!==this.get("filterSelector")},setFilterToSelection:function(a){this.set("filterSelector",a)},filter:function(a){return this.isFiltered()?a.both(this.get("filterSelector")):a},clear:function(){this.set("filterSelector",void 0)},getFilter:function(){return this.isFiltered()?this.get("filterSelector"):this.get("serviceLayer").getLayerSelector()},getUnfiltered:function(){return!this.isFiltered()?null:
this.get("serviceLayer").getLayerSelector().not(this.get("filterSelector"))}});var FilterController=Backbone.View.extend({initialize:function(a){this.model=this.model||new Filter;this.selectionManager=a.selectionManager},start:function(a){a.append(this.$el);this.render()},render:function(){var a=$(jade.templates.filter());this.$el.empty().append(a)},events:{"click .filter-selected":"filterSel","click .filter-off":"unfilter"},filterSel:function(){this.model.setFilterToSelection(this.selectionManager.getSelection())},unfilter:function(){this.model.clear()}});var SidebarController=Backbone.View.extend({start:function(a,b){a.append(this.$el);this.render(b)},render:function(a){var b=$(jade.templates.sidebar());this.$el.empty().append(b);(new MoveSelController({model:a.moveSelModel})).start(b);(new FilterController({model:a.filter,selectionManager:a.selectionManager})).start(b);(new ColorController).start(b,a.dashState,a.aggregateModel,a.serviceLayer)}});var NUM_COLORS=ColorRamps.NUM_COLORS,ColorMap=function(a,b,d){var c={},e={},f=function(a,b){e[a]=[];b.sort(function(a,b){return a-b});c[a]={min:b[0],max:b[b.length-1]};for(var d=1;d<=NUM_COLORS;d++){var g=Math.round(d*b.length/NUM_COLORS),f=Math.round((d-1)*b.length/NUM_COLORS);e[a].push({max:b[g-1],min:b[f]})}};a.numeric().forEach(function(b){var c=[];a.features().each(function(a,d){var e=d.attr(b);void 0!==e&&c.push(e)});f(b,c)});var g=function(a,b){if(b<=e[a][0].max)return 0;if(b>=e[a][e[a].length-
1].min)return e[a].length-1;for(var c=0;c<e[a].length-1;c++)if(e[a][c].min<=b&&e[a][c+1].min>b)return c;return e[a].length-1};d.on("change:agg",function(){var d=b.get("agg");d?(filteredValues=[],a.features().each(function(a,b){filteredValues.push(d[b.id])}),f("agg",filteredValues)):(c.agg=void 0,e.agg=void 0)});this.colorForFeature=function(a){var e=b.get("attr"),f=b.get("colorRamp"),h=b.get("colorDist");a="none"===b.get("agg")?a.attr(e):d.get("agg")[a.id];if(!a)return ColorMap.NO_DATA;var j;h===
ColorScales.DISTRIBUTION.QUANTILE?j=g(e,a):h===ColorScales.DISTRIBUTION.UNIFORM&&(h=c[e].max+1,j=Math.floor((1-(h-a)/(h-(c[e].min-1)))*f.length));return f[j]};this.extents=function(a){return c[a]}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var MapPanel=function(a,b,d){Panel.call(this,"Map","map",a,b,d);var c,e,f=this;this.getMap=function(){return c};this.getWiggleView=function(){return c};this.create=function(){this.container=$("<div>").attr("class","wigglemap");this.parentElement.append(this.container);this.show();c=new wiggle.Map(".wigglemap");c.select(function(a){a=c.search(e,a);f.fireSelect(a)});this.created=!0};this.resize=function(){c.resize()};this.newData=function(a){e&&c.remove(e);e=a;e.features().style(c,"stroke",ColorMap.WHITE).style(c,
"fill-opacity",0.9);c.center(e.bounds.centroid());c.extents(e.bounds.width());c.append(e)};this.deselect=function(a){a.style(c,"fill",function(a){return d.getColorForFeature(a)})};this.select=function(a){a.style(c,"fill",ColorMap.HIGHLIGHT)};this.draw=function(a,b){b.isFiltered()?b.getUnfiltered().style(c,"fill-opacity",0).style(c,"stroke-opacity",0):d.getLayerSelector().style(c,"fill-opacity",0.9).style(c,"stroke-opacity",1);a.style(c,"fill",function(a){return d.getColorForFeature(a)})}};var PanelManager=Backbone.View.extend({panelDivs:{},start:function(a,b,d,c,e){var f=this;a.append(this.$el);this.render();this.setSize();$(window).resize(function(){f.setSize()});this.model.on("change",function(){f.setPanels()});this.initPanels(b,d,c,e);this.setPanels();this.initFilterListener(d,c)},$left:null,$right:null,events:{"change select":"changePane"},className:"panels",render:function(){var a=this,b=$(jade.templates.panels({model:this.model}));this.$el.empty().append(b);$.each(this.model.get("panels"),
function(b,c){a.panelDivs[c.name]=c.makeParentElement()});this.$left=this.$el.find(".left");this.$right=this.$el.find(".right")},setSize:function(){var a=0;this.$el.siblings().each(function(b,d){a+=$(d).height()+parseInt($(d).css("marginTop"),10)+parseInt($(d).css("marginBottom"),10)});var b=0;this.$left.find(".view").siblings().each(function(a,d){b+=$(d).height()+parseInt($(d).css("marginTop"),10)+parseInt($(d).css("marginBottom"),10)});var d=this.$el.parent().height()-a-b;this.$left.find(".view").css("height",
d);this.$right.find(".view").css("height",d)},showPanel:function(a){a.created||a.create();a.show()},setPanel:function(a){var b=this.model.getPanel(this.model.get(a)),d=this["$"+a];d.find(".view").children().hide();d.find(".view").append(this.panelDivs[b.name]);this.showPanel(b);d.find("select").val(this.model.get(a))},setPanels:function(){this.setPanel("left");this.setPanel("right")},initPanels:function(a,b,d,c){var e=this;$.each(this.model.get("panels"),function(a,b){c.addDataCallback(function(a){return b.newData(a)});
d.addView(b)});a.on("change",function(){e.draw(b,d)})},draw:function(a,b){$.each(this.model.get("panels"),function(b,c){c.draw(a.getFilter(),a)});b.reselect()},changePane:function(a){var b=this.$left.find(".select select"),d=this.$right.find(".select select"),c=parseInt(b.val(),10),d=parseInt(d.val(),10);c===d&&(a.target===b.get(0)?d=(d+1)%this.model.get("panels").length:c=(c+1)%this.model.get("panels").length);this.model.set({left:c,right:d})},initFilterListener:function(a,b){var d=this;a.on("change",
function(){d.draw(a,b)})}});var TimeSliderController=function(){this.start=function(a,b,d){var c=new wiggle.widget.Slider;d.addDataCallback(function(){c.model.set("attr",d.getSortedDateProperties())});c.change(function(a){b.set("attr",c.model.get("attr")[a])});b.on("change:attr",function(){var a=b.get("attr");c.model.set("index",d.getIndexOfAttr(a))});a.append(c.$el)}};var DashboardState=Backbone.Model.extend({defaults:{attr:null,colorRamp:ColorRamps.RAMPS[0],colorDist:ColorScales.DISTRIBUTION.UNIFORM,agg:"none"}});var AggregateModel=Backbone.Model.extend({defaults:{agg:null}});var SelectionManager=function(a){var b=[],d,c=!1;this.addView=function(a){b.push(a)};this.getSelection=function(){return d};this.select=function(e){e=a.filter(e);$.each(b,function(a,b){!c&&d&&b.deselect(d);b.select(e)});d=!d||!c?e:d.join(e)};this.reselect=function(){d&&this.select(d)};$(document).on("keydown",function(a){16===a.which&&(c=!0)});$(document).on("keyup",function(a){16===a.which&&(c=!1)})};var dash={},Dashboard=function(a){var b=new DashboardState,d=new AggregateModel,c=new ServiceLayer;a=$(a);a.empty();(new TimeSliderController).start(a,b,c);var e=new MoveSelModel,f=new Filter({serviceLayer:c}),g=new SelectionManager(f);(new SidebarController).start(a,{dashState:b,aggregateModel:d,moveSelModel:e,filter:f,selectionManager:g,serviceLayer:c});e=new PanelState({panels:[new MapPanel(g,e,c),new TimePanel(g,e,c),new MDSPanel(g,e,c)]});(new PanelManager({model:e})).start(a,b,f,g,c);this.loadUrl=
function(a){c.loadUrl(a,b,d)}};window.dash={ready:function(a){$(document).ready(a)},create:function(a){return new Dashboard(a||"body")}};})();
