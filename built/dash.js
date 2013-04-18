(function() {'use strict'; var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
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
goog.scope=function(a){a.call(goog.global)};var ColorRamps={GREY_BLUE:[wiggle.util.icolor(255,247,251,255),wiggle.util.icolor(208,209,230,255),wiggle.util.icolor(166,189,219,255),wiggle.util.icolor(116,169,207,255),wiggle.util.icolor(43,140,190,255),wiggle.util.icolor(4,90,141,255)],WHITE_RED:[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],RED_BLUE:[wiggle.util.icolor(178,24,43,
255),wiggle.util.icolor(239,138,98,255),wiggle.util.icolor(253,219,199,255),wiggle.util.icolor(209,169,207,255),wiggle.util.icolor(103,169,207,255),wiggle.util.icolor(33,102,172,255)],BROWN_GREEN:[wiggle.util.icolor(140,82,10,255),wiggle.util.icolor(216,179,101,255),wiggle.util.icolor(246,232,195,255),wiggle.util.icolor(199,234,229,255),wiggle.util.icolor(90,180,172,255),wiggle.util.icolor(1,102,94,255)],WHITE_GREEN:[wiggle.util.icolor(237,248,233,255),wiggle.util.icolor(199,233,192,255),wiggle.util.icolor(161,
217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)]};ColorRamps.NUM_COLORS=ColorRamps.WHITE_RED.length;ColorRamps.RAMPS=[ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];var ColorScales={DISTRIBUTION:{QUANTILE:0,UNIFORM:1},RANGE:{LOCAL:0,GLOBAL:1}};var ServiceLayer=function(){var a=null,b={},c=[],d=[],e={};return{addDataCallback:function(a){c.push(a)},loadUrl:function(g,f){var l=this;$.ajax({url:g,dataType:"json",success:function(g){a=wiggle.io.GeoJSON(g);d=a.numeric();d.sort();e={};d.forEach(function(a,c){e[a]=c});b=new ColorMap(a,f);var h=a;$.each(c,function(a,c){c(h)});f.set("attr",l.getSortedDateProperties()[0])}})},getLayerSelector:function(){return a.features()},getSortedDateProperties:function(){return!a?[]:d},getIndexOfAttr:function(a){return e[a]},
getAttributesByFeature:function(){var c=a.features(),b=a.properties(),d={};c.each(function(a,c){var e={};$.each(b,function(a,b){e[b]=c.attr(b)});d[c.id]=e});return d},getAttributesBySortedDateProperty:function(){var c=a.numeric().sort(),b=a.features(),d={};$.each(c,function(a,c){var e={};b.each(function(a,b){e[b.id]=b.attr(c)});d[c]=e});return d},getColorForFeature:function(a){return b.colorForFeature(a)}}}();var $div=function(){return $("<div></div>")},Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,c){a.text(b);a.css({display:"block",left:c.clientX+5,top:c.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};var Panel=function(a,b,c,d){var e=this;this.created=!1;this.name=b;this.label=a;this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){var a=jade.templates.panel;return this.parentElement=$(a({name:this.name}))};this.fireSelect=function(a){c.select(a)};this.allFeatures=function(){return ServiceLayer.currentData.features()};this.width=function(){return this.parentElement.width()};
this.height=function(){return this.parentElement.height()};this.select=function(){};this.deselect=function(){};this.draw=function(){};this.getWiggleView=function(){};this.tempSelectMode=function(){};$(document).on("keydown",function(a){18===a.which&&d.set("selectOverride",!0)});$(document).on("keyup",function(a){18===a.which&&d.set("selectOverride",!1)});(function(){d.on("change",function(a){var c=e.getWiggleView();c&&(a.isMoveMode()?c.disableSelect():c.enableSelect())},this)})()};
Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection",FILTER:"filter"};var TimePanel=function(a,b){Panel.call(this,"Time Series","time",a,b);var c,d,e=this;this.create=function(){this.container=$("<div>").attr("id","timeseries");this.parentElement.append(this.container);this.show();this.created=!0};this.getWiggleView=function(){return c};this.resize=function(){c.resize()};this.newData=function(a){d&&c.remove(d);d=a;a=d.numeric();a.sort();d.attr("order",a);c=new wiggle.TimeSeries("#timeseries",d,{ticks:500,ylock:!0});c.select(function(a){a=c.search(d,a);e.fireSelect(a)})};
this.deselect=function(a){a.style(c,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(a){a.style(c,"stroke",ColorMap.HIGHLIGHT)};this.draw=function(){d.features().style(c,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})}};var PanelState=Backbone.Model.extend({defaults:{panels:[],left:0,right:1},findPanel:function(a){for(var b=this.get("panels"),c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},getPanel:function(a){return this.get("panels")[a]}});var MDSPanel=function(a,b){Panel.call(this,"MDS","mds",a,b);var c,d;this.show=function(){c.style("display","block");this.parentElement.show()};this.create=function(){c=d3.select(this.parentElement[0]).append("svg").attr({viewBox:"0 0 1 1",preserveAspectRatio:"none"});d=c.append("g");c.append("g");d.append("rect").attr("x",0).attr("y",0).attr("width",1).attr("height",1).style("fill","#ff0000");this.parentElement.append($(c.node()));this.show();this.created=!0};this.resize=function(){};this.change=
function(){};this.draw=function(){};this.newData=function(){};this.select=function(){};this.deselect=function(){}};var MoveSelModel=Backbone.Model.extend({defaults:{isMove:!0,selectOverride:!1},toggle:function(){var a=!this.get("isMove");this.set({isMove:a})},isMoveMode:function(){return this.get("isMove")&&!this.get("selectOverride")}});var MoveSelController=Backbone.View.extend({initialize:function(){this.model=this.model||new MoveSelModel},start:function(a){a.append(this.$el);this.render()},render:function(){var a=jade.templates.moveSel();this.$el.empty().append(a)},events:{"click #move-sel-toggle":"toggle"},toggle:function(a){$(a.currentTarget).children(".icon").toggleClass("enabled");this.model.toggle()}});var DistribRangeController=function(){this.start=function(){$('.filter-button[name="'+DistribRangeController.DISTRIB+'"]').change(function(a){a=parseInt($(a.target).val(),10);dashState.set("colorDist",a)})}};DistribRangeController.DISTRIB="dist";DistribRangeController.RANGE="range";var ColorRampController=function(){var a=0,b="#"+ColorRampController.NAME+"-filter";this.start=function(a){c(a)};var c=function(d){var e=ColorRamps.RAMPS,g=26*e.length,f=20*ColorRamps.NUM_COLORS,l=d3.select(b).append("svg:svg").attr("id","ramp-svg").attr("width",f+6).attr("height",g),j=0,h=0;$.each(e,function(b,e){var g=l.append("svg:rect").attr("x",j).attr("y",h).attr("height",26).attr("width",f+6).attr("fill","white");b===a&&g.attr("fill","yellow");j=3;$.each(e,function(f,g){l.append("svg:rect").attr("x",
j).attr("y",h+3).attr("height",20).attr("width",20).attr("fill",d3.rgb(g.rgb())).data([e]).on("click",function(){d.set("colorRamp",ColorRamps.RAMPS[b]);a=b;d3.select("#ramp-svg").remove();c(d)});j+=20});h+=26;j=0})}};ColorRampController.NAME="ramp";var AGGREGATION_FUNCTIONS={mean:function(a){var b=0,c=0;$.each(a,function(a,e){isNaN(e)||(b+=e,c+=1)});return b/c},min:function(a){var b=Infinity;$.each(a,function(a,d){isNaN(d)||(b=d<b?d:b)});return b},max:function(a){var b=-Infinity;$.each(a,function(a,d){isNaN(d)||(b=d>b?d:b)});return b}};var aggregationService={computeAggregates:function(a){var b=AGGREGATION_FUNCTIONS[a];if(!b)return{};a=ServiceLayer.getAttributesByFeature();var c={};$.each(a,function(a,e){c[a]=b(e)});return c}};var AggregateModel=Backbone.Model.extend({defaults:{agg:null}}),aggModel=new AggregateModel;var AggregationController=function(){this.start=function(a){$('.filter-button[name="'+AggregationController.NAME+'"]').change(function(b){b=$(b.target).val();var c;c="none"!==b?aggregationService.computeAggregates(b):null;aggModel.set("agg",c);a.set("agg",b)})}};AggregationController.NAME="agg";var TimeStepFilterView=function(){this.update=function(a){$("#step-filter").empty();var b=[];$.each(a,function(a,d){b.push({label:d,name:d})});return this.render(b)};this.render=function(a){var b=Handlebars.templates.select_and_options_template;a=b({selClass:TimeStepFilterView.CLASS,options:a});$("#"+TimeStepFilterView.NAME+"-filter").html(a)}};TimeStepFilterView.NAME="step";TimeStepFilterView.CLASS=TimeStepFilterView.NAME+"-select";var TimeStepController=function(){var a=new TimeStepFilterView;this.start=function(b){ServiceLayer.addDataCallback(function(c){a.update(c.properties().sort());$("."+TimeStepFilterView.CLASS).change(function(a){a=$(a.target).val();b.set("attr",a)})});b.on("change:attr",function(){$("."+TimeStepFilterView.CLASS).val(b.get("attr"))})}};TimeStepController.NAME=TimeStepFilterView.NAME;var ColorController=function(){this.start=function(a,b){var c;c=jade.templates.coloring;c=c({colorings:[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.NAME,title:"Color Ramp",options:[]},{name:"dist",title:"Color Distribution",options:[{label:"Uniform",value:ColorScales.DISTRIBUTION.UNIFORM},{label:"Quantile",value:ColorScales.DISTRIBUTION.QUANTILE}]},{name:AggregationController.NAME,title:"Aggregate",options:[{label:"None",value:"none"},{label:"Mean",value:"mean"},
{label:"Max",value:"max"},{label:"Min",value:"min"}]}]});a.append(c);$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});$(".filter-button").change(function(a){var c=$(a.target).attr("name");a=$(a.target).attr("value");console.log(c+" changed to "+a)});(new ColorRampController).start(b);(new TimeStepController).start(b);(new DistribRangeController).start();(new AggregationController).start(b)}};var Filter=Backbone.Model.extend({defaults:{filterSelector:void 0},isFiltered:function(){return void 0!==this.get("filterSelector")},setFilterToSelection:function(a){this.set("filterSelector",a)},filter:function(a){return this.isFiltered()?a.both(this.get("filterSelector")):a},clear:function(){this.set("filterSelector",void 0)},getFilter:function(){return this.isFiltered()?this.get("filterSelector"):ServiceLayer.getLayerSelector()},getUnfiltered:function(){return!this.isFiltered()?null:ServiceLayer.getLayerSelector().not(this.get("filterSelector"))}});var FilterController=Backbone.View.extend({initialize:function(a){this.model=this.model||new Filter;this.selectionManager=a.selectionManager},start:function(a){a.append(this.$el);this.render()},render:function(){var a=$(jade.templates.filter());this.$el.empty().append(a)},events:{"click #filter-selected":"filterSel","click #filter-off":"unfilter"},filterSel:function(){this.model.setFilterToSelection(this.selectionManager.getSelection())},unfilter:function(){this.model.clear()}});var SidebarController=Backbone.View.extend({start:function(a,b,c,d,e){a.append(this.$el);this.render(b,c,d,e)},render:function(a,b,c,d){var e=$(jade.templates.sidebar());this.$el.empty().append(e);(new MoveSelController({model:b})).start(e);(new FilterController({model:c,selectionManager:d})).start(e);(new ColorController).start(e,a)}});var NUM_COLORS=ColorRamps.NUM_COLORS,ColorMap=function(a,b){var c={},d={},e=function(a,b){d[a]=[];b.sort(function(a,b){return a-b});c[a]={min:b[0],max:b[b.length-1]};for(var e=1;e<=NUM_COLORS;e++){var g=Math.round(e*b.length/NUM_COLORS),k=Math.round((e-1)*b.length/NUM_COLORS);d[a].push({max:b[g-1],min:b[k]})}};a.numeric().forEach(function(b){var c=[];a.features().each(function(a,d){var e=d.attr(b);void 0!==e&&c.push(e)});e(b,c)});var g=function(a,b){if(b<=d[a][0].max)return 0;if(b>=d[a][d[a].length-
1].min)return d[a].length-1;for(var c=0;c<d[a].length-1;c++)if(d[a][c].min<=b&&d[a][c+1].min>b)return c;return d[a].length-1};aggModel.on("change:agg",function(){var f=b.get("agg");f?(filteredValues=[],a.features().each(function(a,b){filteredValues.push(f[b.id])}),e("agg",filteredValues)):(c.agg=void 0,d.agg=void 0)});this.colorForFeature=function(a){var d=b.get("attr"),e=b.get("colorRamp"),h=b.get("colorDist");a="none"===b.get("agg")?a.attr(d):aggModel.get("agg")[a.id];if(!a)return ColorMap.NO_DATA;
var k;h===ColorScales.DISTRIBUTION.QUANTILE?k=g(d,a):h===ColorScales.DISTRIBUTION.UNIFORM&&(h=c[d].max+1,k=Math.floor((1-(h-a)/(h-(c[d].min-1)))*e.length));return e[k]};this.extents=function(a){return c[a]}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var MapPanel=function(a,b){Panel.call(this,"Map","map",a,b);var c,d,e=this;this.getMap=function(){return c};this.getWiggleView=function(){return c};this.create=function(){this.container=$("<div>").attr("id","wigglemap");this.parentElement.append(this.container);this.show();c=new wiggle.Map("#wigglemap");c.select(function(a){a=c.search(d,a);e.fireSelect(a)});this.created=!0};this.resize=function(){c.resize()};this.newData=function(a){d&&c.remove(d);d=a;d.features().style(c,"stroke",ColorMap.WHITE).style(c,
"fill-opacity",0.9);c.center(d.bounds.centroid());c.extents(d.bounds.width());c.append(d)};this.deselect=function(a){a.style(c,"fill",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(a){a.style(c,"fill",ColorMap.HIGHLIGHT)};this.draw=function(a,b){b.isFiltered()?b.getUnfiltered().style(c,"fill-opacity",0).style(c,"stroke-opacity",0):ServiceLayer.getLayerSelector().style(c,"fill-opacity",0.9).style(c,"stroke-opacity",1);a.style(c,"fill",function(a){return ServiceLayer.getColorForFeature(a)})}};var PanelManager=Backbone.View.extend({panelDivs:{},start:function(a,b,c,d){var e=this;a.append(this.$el);this.render();this.setSize();$(window).resize(function(){e.setSize()});this.model.on("change",function(){e.setPanels()});this.initPanels(b,c,d);this.setPanels();this.initFilterListener(c,d)},$left:null,$right:null,events:{"change select":"changePane"},className:"panels",render:function(){var a=this,b=$(jade.templates.panels({model:this.model}));this.$el.empty().append(b);$.each(this.model.get("panels"),
function(b,d){a.panelDivs[d.name]=d.makeParentElement()});this.$left=this.$el.find(".left");this.$right=this.$el.find(".right")},setSize:function(){var a=0;this.$el.siblings().each(function(b,c){a+=$(c).height()+parseInt($(c).css("marginTop"),10)+parseInt($(c).css("marginBottom"),10)});var b=0;this.$left.find(".view").siblings().each(function(a,c){b+=$(c).height()+parseInt($(c).css("marginTop"),10)+parseInt($(c).css("marginBottom"),10)});var c=this.$el.parent().height()-a-b;this.$left.find(".view").css("height",
c);this.$right.find(".view").css("height",c)},showPanel:function(a){a.created||a.create();a.show()},setPanel:function(a){var b=this.model.getPanel(this.model.get(a)),c=this["$"+a];c.find(".view").children().hide();c.find(".view").append(this.panelDivs[b.name]);this.showPanel(b);c.find("select").val(this.model.get(a))},setPanels:function(){this.setPanel("left");this.setPanel("right")},initPanels:function(a,b,c){var d=this;$.each(this.model.get("panels"),function(a,b){ServiceLayer.addDataCallback(function(a){return b.newData(a)});
c.addView(b)});a.on("change",function(){d.draw(b,c)})},draw:function(a,b){$.each(this.model.get("panels"),function(b,d){d.draw(a.getFilter(),a)});b.reselect()},changePane:function(a){var b=this.$left.find(".select select"),c=this.$right.find(".select select"),d=parseInt(b.val(),10),c=parseInt(c.val(),10);d===c&&(a.target===b.get(0)?c=(c+1)%this.model.get("panels").length:d=(d+1)%this.model.get("panels").length);this.model.set({left:d,right:c})},initFilterListener:function(a,b){var c=this;a.on("change",
function(){c.draw(a,b)})}});var TimeSliderController=function(){this.start=function(a,b){var c=new wiggle.widget.Slider;ServiceLayer.addDataCallback(function(){c.model.set("attr",ServiceLayer.getSortedDateProperties())});c.change(function(a){b.set("attr",c.model.get("attr")[a])});b.on("change:attr",function(){var a=b.get("attr");c.model.set("index",ServiceLayer.getIndexOfAttr(a))});a.append(c.$el)}};var DashboardState=Backbone.Model.extend({defaults:{attr:null,colorRamp:ColorRamps.RAMPS[0],colorDist:ColorScales.DISTRIBUTION.UNIFORM,agg:"none"}});var SelectionManager=function(a){var b=[],c,d=!1;this.addView=function(a){b.push(a)};this.getSelection=function(){return c};this.select=function(e){e=a.filter(e);$.each(b,function(a,b){!d&&c&&b.deselect(c);b.select(e)});c=!c||!d?e:c.join(e)};this.reselect=function(){c&&this.select(c)};$(document).on("keydown",function(a){16===a.which&&(d=!0)});$(document).on("keyup",function(a){16===a.which&&(d=!1)})};var dash={},Dashboard=function(a){var b=new DashboardState;a=$(a);a.empty();(new TimeSliderController).start(a,b);var c=new MoveSelModel,d=new Filter,e=new SelectionManager(d);(new SidebarController).start(a,b,c,d,e);c=new PanelState({panels:[new MapPanel(e,c),new TimePanel(e,c),new MDSPanel(e,c)]});(new PanelManager({model:c})).start(a,b,d,e);this.loadUrl=function(a){ServiceLayer.loadUrl(a,b)}};window.dash={ready:function(a){$(document).ready(a)},create:function(a){return new Dashboard(a||"body")}};})();
