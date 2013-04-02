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
217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)]};ColorRamps.NUM_COLORS=ColorRamps.WHITE_RED.length;ColorRamps.RAMPS=[ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];var ColorScales={DISTRIBUTION:{QUANTILE:0,UNIFORM:1},RANGE:{LOCAL:0,GLOBAL:1}};var DashboardState=Backbone.Model.extend({defaults:{attr:null,colorRamp:ColorRamps.RAMPS[0],colorDist:ColorScales.DISTRIBUTION.UNIFORM,agg:"none"}}),dashState=new DashboardState;var ServiceLayer=function(){var a=null,b={},d=[],c=[],e={};return{addDataCallback:function(a){d.push(a)},loadUrl:function(f){var g=this;$.ajax({url:f,dataType:"json",success:function(f){a=wiggle.io.GeoJSON(f);c=a.numeric();c.sort();e={};c.forEach(function(a,b){e[a]=b});b=new ColorMap(a);var h=a;$.each(d,function(a,b){b(h)});dashState.set("attr",g.getSortedDateProperties()[0])}})},getLayerSelector:function(){return a.features()},getSortedDateProperties:function(){return!a?[]:c},getIndexOfAttr:function(a){return e[a]},
getAttributesByFeature:function(){var b=a.features(),d=a.properties(),c={};b.each(function(a,b){var e={};$.each(d,function(a,d){e[d]=b.attr(d)});c[b.id]=e});return c},getAttributesBySortedDateProperty:function(){var b=a.numeric().sort(),d=a.features(),c={};$.each(b,function(a,b){var e={};d.each(function(a,d){e[d.id]=d.attr(b)});c[b]=e});return c},getColorForFeature:function(a){return b.colorForValue(a)}}}();var timeSlider=new wiggle.widget.Slider;ServiceLayer.addDataCallback(function(){timeSlider.model.set("attr",ServiceLayer.getSortedDateProperties())});timeSlider.change(function(a){dashState.set("attr",timeSlider.model.get("attr")[a])});dashState.on("change:attr",function(){var a=dashState.get("attr");timeSlider.model.set("index",ServiceLayer.getIndexOfAttr(a))});var SelectionManager=function(){var a=[],b,d=!1;this.addView=function(b){a.push(b)};this.getSelection=function(){return b};this.select=function(c){c=filter.filter(c);$.each(a,function(a,f){!d&&b&&f.deselect(b);f.select(c)});b=!b||!d?c:b.join(c)};this.reselect=function(){b&&this.select(b)};$(document).on("keydown",function(a){16===a.which&&(d=!0)});$(document).on("keyup",function(a){16===a.which&&(d=!1)})},selectionManager=new SelectionManager;var Panel=function(a,b,d){var c=this;this.created=!1;this.name=b;this.label=a;this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){var a=jade.templates.panel;return this.parentElement=$(a({name:this.name,configOptions:d}))};this.fireSelect=function(a){selectionManager.select(a)};this.allFeatures=function(){return ServiceLayer.currentData.features()};this.width=
function(){return this.parentElement.width()};this.height=function(){return this.parentElement.height()};this.select=function(){};this.deselect=function(){};this.draw=function(){};this.tempSelectMode=function(){};$(document).on("keydown",function(a){18===a.which&&c.tempSelectMode(!0)});$(document).on("keyup",function(a){18===a.which&&c.tempSelectMode(!1)})};Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection",FILTER:"filter"};var $div=function(){return $("<div></div>")},Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,d){a.text(b);a.css({display:"block",left:d.clientX+5,top:d.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};var TimePanel=function(){Panel.call(this,"Time Series","time",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Panel",select:"Select Time Steps"},enabled:!1}}});var a,b,d=this;this.create=function(){this.container=$("<div>").attr("id","timeseries");this.parentElement.append(this.container);this.show();this.created=!0};this.resize=function(){a.resize()};this.newData=function(c){b&&a.remove(b);b=c;c=b.numeric();c.sort();b.attr("order",c);a=new wiggle.TimeSeries("#timeseries",
b,{ticks:500,ylock:!0});a.select(function(c){selectionLayer=a.search(b,c);d.fireSelect(selectionLayer)});$("#time-selection-button").click(function(b){$(b.currentTarget).parents(".view").toggleClass("selection");$(b.currentTarget).children(".icon").toggleClass("enabled");$(b.currentTarget).children(".selection_box").hasClass("enabled")?a.enableSelect():a.disableSelect()})};this.deselect=function(b){b.style(a,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(b){b.style(a,
"stroke",ColorMap.HIGHLIGHT)};this.draw=function(){b.features().style(a,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})}};var PanelState=Backbone.Model.extend({defaults:{panels:[],left:0,right:1},findPanel:function(a){for(var b=this.get("panels"),d=0;d<b.length;d++)if(b[d].name===a)return b[d];return null},getPanel:function(a){return this.get("panels")[a]}}),panelState=new PanelState({panels:[new MapPanel,new TimePanel,new MDSPanel]});var MDSPanel=function(){Panel.call(this,"MDS","mds");var a,b;this.show=function(){a.style("display","block");this.parentElement.show()};this.create=function(){a=d3.select(this.parentElement[0]).append("svg").attr({viewBox:"0 0 1 1",preserveAspectRatio:"none"});b=a.append("g");a.append("g");b.append("rect").attr("x",0).attr("y",0).attr("width",1).attr("height",1).style("fill","#ff0000");this.parentElement.append($(a.node()));this.show();this.created=!0};this.resize=function(){};this.change=function(){};
this.draw=function(){};this.newData=function(){};this.select=function(){};this.deselect=function(){}};var Filter=Backbone.Model.extend({defaults:{filterSelector:void 0},isFiltered:function(){return void 0!==this.get("filterSelector")},setFilterToSelection:function(){this.set("filterSelector",selectionManager.getSelection())},filter:function(a){return this.isFiltered()?a.both(this.get("filterSelector")):a},clear:function(){this.set("filterSelector",void 0)},getFilter:function(){return this.isFiltered()?this.get("filterSelector"):ServiceLayer.getLayerSelector()},getUnfiltered:function(){return!this.isFiltered()?
null:ServiceLayer.getLayerSelector().not(this.get("filterSelector"))}}),filter=new Filter;var AggregateModel=Backbone.Model.extend({defaults:{agg:null}}),aggModel=new AggregateModel;var NUM_COLORS=ColorRamps.NUM_COLORS,ColorMap=function(a){var b={},d={},c=function(a,c){d[a]=[];c.sort(function(a,b){return a-b});b[a]={min:c[0],max:c[c.length-1]};for(var e=1;e<=NUM_COLORS;e++){var h=Math.round(e*c.length/NUM_COLORS),k=Math.round((e-1)*c.length/NUM_COLORS);d[a].push({max:c[h-1],min:c[k]})}};a.numeric().forEach(function(b){var d=[];a.features().each(function(a,c){var e=c.attr(b);void 0!==e&&d.push(e)});c(b,d)});var e=function(a,b){if(b<=d[a][0].max)return 0;if(b>=d[a][d[a].length-
1].min)return d[a].length-1;for(var c=0;c<d[a].length-1;c++)if(d[a][c].min<=b&&d[a][c+1].min>b)return c;return d[a].length-1};aggModel.on("change:agg",function(){var e=dashState.get("agg");e?(filteredValues=[],a.features().each(function(a,b){filteredValues.push(e[b.id])}),c("agg",filteredValues)):(b.agg=void 0,d.agg=void 0)});this.colorForValue=function(a){var d=dashState.get("attr"),c=dashState.get("colorRamp"),h=dashState.get("colorDist");a="none"===dashState.get("agg")?a.attr(d):aggModel.get("agg")[a.id];
if(!a)return ColorMap.NO_DATA;var k;h===ColorScales.DISTRIBUTION.QUANTILE?k=e(d,a):h===ColorScales.DISTRIBUTION.UNIFORM&&(h=b[d].max+1,k=Math.floor((1-(h-a)/(h-(b[d].min-1)))*c.length));return c[k]};this.extents=function(a){return b[a]}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var MapPanel=function(){Panel.call(this,"Map","map",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Map",select:"Select Features"},enabled:!1}},filter:{type:Panel.BUTTON_TYPES.FILTER,options:{hoverText:{filter:"Filter"}}}});var a,b,d=this,c=!1;this.getMap=function(){return a};this.create=function(){this.container=$("<div>").attr("id","wigglemap");this.parentElement.append(this.container);this.show();a=new wiggle.Map("#wigglemap");a.select(function(c){c=a.search(b,
c);d.fireSelect(c)});$("#map-selection-button").click(function(a){$(a.currentTarget).parents(".view").toggleClass("selection");$(a.currentTarget).children(".icon").toggleClass("enabled");c=$(a.currentTarget).children(".selection_box").hasClass("enabled");d.tempSelectMode(c)});$("#"+MapPanel.FILTER_ID).click(function(){filter.setFilterToSelection()});$("#"+MapPanel.FILTER_OFF_ID).click(function(){filter.clear()});this.created=!0};this.resize=function(){a.resize()};this.newData=function(d){b&&a.remove(b);
b=d;b.features().style(a,"stroke",ColorMap.WHITE).style(a,"fill-opacity",0.9);a.center(b.bounds.centroid());a.extents(b.bounds.width());a.append(b)};this.tempSelectMode=function(b){b?a.enableSelect():c||a.disableSelect()};this.deselect=function(b){b.style(a,"fill",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(b){b.style(a,"fill",ColorMap.HIGHLIGHT)};this.draw=function(b){filter.isFiltered()?filter.getUnfiltered().style(a,"fill-opacity",0).style(a,"stroke-opacity",0):
ServiceLayer.getLayerSelector().style(a,"fill-opacity",0.9).style(a,"stroke-opacity",1);b.style(a,"fill",function(a){return ServiceLayer.getColorForFeature(a)})}};MapPanel.FILTER_ID="mapFilter";MapPanel.FILTER_OFF_ID="mapFilterOff";var PanelManager=Backbone.View.extend({panelDivs:{},start:function(a){var b=this;a.append(this.$el);this.render();this.setSize();$(window).resize(function(){b.setSize()});this.model.on("change",function(){b.setPanels()});this.initPanels();this.setPanels();this.initFilterListener()},$left:null,$right:null,events:{"change select":"changePane"},className:"panels",render:function(){var a=this,b=$(jade.templates.panels({model:this.model}));this.$el.append(b);$.each(this.model.get("panels"),function(b,
c){a.panelDivs[c.name]=c.makeParentElement()});this.$left=this.$el.find(".left");this.$right=this.$el.find(".right")},setSize:function(){this.$left.find(".view").css("height",$(window).height()-this.$left.find(".view").offset().top);this.$right.find(".view").css("height",$(window).height()-this.$right.find(".view").offset().top)},showPanel:function(a){a.created||a.create();a.show()},setPanel:function(a){var b=this.model.getPanel(this.model.get(a));$pane=this["$"+a];$pane.find(".view").children().hide();
$pane.find(".view").append(this.panelDivs[b.name]);this.showPanel(b);$pane.find("select").val(this.model.get(a))},setPanels:function(){this.setPanel("left");this.setPanel("right")},initPanels:function(){var a=this;$.each(this.model.get("panels"),function(a,d){ServiceLayer.addDataCallback(function(a){return d.newData(a)});selectionManager.addView(d)});dashState.on("change",function(){a.draw()})},draw:function(){$.each(this.model.get("panels"),function(a,b){b.draw(filter.getFilter())});selectionManager.reselect()},
changePane:function(a){var b=this.$left.find(".select select"),d=this.$right.find(".select select"),c=parseInt(b.val(),10),d=parseInt(d.val(),10);c===d&&(a.target===b.get(0)?d=(d+1)%this.model.get("panels").length:c=(c+1)%this.model.get("panels").length);this.model.set({left:c,right:d})},initFilterListener:function(){var a=this;filter.on("change",function(){a.draw()})}}),panelManager=new PanelManager({model:panelState});var DistribRangeController=function(){this.start=function(){$('.filter-button[name="'+DistribRangeController.DISTRIB+'"]').change(function(a){a=parseInt($(a.target).val(),10);dashState.set("colorDist",a)})}};DistribRangeController.DISTRIB="dist";DistribRangeController.RANGE="range";var distribRangeController=new DistribRangeController;var ColorRampController=function(){var a=0,b="#"+ColorRampController.NAME+"-filter";this.start=function(){d()};var d=function(){var c=ColorRamps.RAMPS,e=26*c.length,f=20*ColorRamps.NUM_COLORS,g=d3.select(b).append("svg:svg").attr("id","ramp-svg").attr("width",f+6).attr("height",e),j=0,h=0;$.each(c,function(b,c){var e=g.append("svg:rect").attr("x",j).attr("y",h).attr("height",26).attr("width",f+6).attr("fill","white");b===a&&e.attr("fill","yellow");j=3;$.each(c,function(e,f){g.append("svg:rect").attr("x",
j).attr("y",h+3).attr("height",20).attr("width",20).attr("fill",d3.rgb(f.rgb())).data([c]).on("click",function(){dashState.set("colorRamp",ColorRamps.RAMPS[b]);a=b;d3.select("#ramp-svg").remove();d()});j+=20});h+=26;j=0})}};ColorRampController.NAME="ramp";var colorRampController=new ColorRampController;var AGGREGATION_FUNCTIONS={mean:function(a){var b=0,d=0;$.each(a,function(a,e){isNaN(e)||(b+=e,d+=1)});return b/d},min:function(a){var b=Infinity;$.each(a,function(a,c){isNaN(c)||(b=c<b?c:b)});return b},max:function(a){var b=-Infinity;$.each(a,function(a,c){isNaN(c)||(b=c>b?c:b)});return b}};var aggregationService={computeAggregates:function(a){var b=AGGREGATION_FUNCTIONS[a];if(!b)return{};a=ServiceLayer.getAttributesByFeature();var d={};$.each(a,function(a,e){d[a]=b(e)});return d}};var AggregationController=function(){this.start=function(){$('.filter-button[name="'+AggregationController.NAME+'"]').change(function(a){a=$(a.target).val();var b;b="none"!==a?aggregationService.computeAggregates(a):null;aggModel.set("agg",b);dashState.set("agg",a)})}};AggregationController.NAME="agg";var aggregationController=new AggregationController;var TimeStepFilterView=function(){this.update=function(a){$("#step-filter").empty();var b=[];$.each(a,function(a,c){b.push({label:c,name:c})});return this.render(b)};this.render=function(a){var b=Handlebars.templates.select_and_options_template;a=b({selClass:TimeStepFilterView.CLASS,options:a});$("#"+TimeStepFilterView.NAME+"-filter").html(a)}};TimeStepFilterView.NAME="step";TimeStepFilterView.CLASS=TimeStepFilterView.NAME+"-select";var TimeStepController=function(){var a=new TimeStepFilterView;this.start=function(){ServiceLayer.addDataCallback(function(b){a.update(b.properties().sort());$("."+TimeStepFilterView.CLASS).change(function(a){a=$(a.target).val();dashState.set("attr",a)})});dashState.on("change:attr",function(){$("."+TimeStepFilterView.CLASS).val(dashState.get("attr"))})}};TimeStepController.NAME=TimeStepFilterView.NAME;var timeStepController=new TimeStepController;var ColorController=function(){this.start=function(a){var b;b=Handlebars.templates.filter_template;b=b({filters:[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.NAME,title:"Color Ramp",options:[]},{name:"dist",title:"Color Distribution",options:[{label:"Uniform",value:ColorScales.DISTRIBUTION.UNIFORM},{label:"Quantile",value:ColorScales.DISTRIBUTION.QUANTILE}]},{name:AggregationController.NAME,title:"Aggregate",options:[{label:"None",value:"none"},{label:"Mean",
value:"mean"},{label:"Max",value:"max"},{label:"Min",value:"min"}]}]});a.append(b);$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});$(".filter-button").change(function(a){var b=$(a.target).attr("name");a=$(a.target).attr("value");console.log(b+" changed to "+a)});colorRampController.start();timeStepController.start();distribRangeController.start();aggregationController.start()}},colorController=
new ColorController;var dash={},Dashboard=function(a){$(a).append(timeSlider.$el);colorController.start($(a));panelManager.start($(a));this.loadUrl=function(a){ServiceLayer.loadUrl(a)}};window.dash={ready:function(a){$(document).ready(a)},create:function(a){return new Dashboard(a||"body")}};})();
