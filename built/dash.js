(function() {'use strict'; var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(f){if(!(f in d.written)){if(!(f in d.visited)&&(d.visited[f]=!0,f in d.requires))for(var e in d.requires[f])if(!goog.isProvided_(e))if(e in d.nameToPath)a(d.nameToPath[e]);else throw Error("Undefined nameToPath for "+e);f in c||(c[f]=!0,b.push(f))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
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
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,h=a.constructor;h;h=h.superClass_&&h.superClass_.constructor)if(h.prototype[b]===d)f=!0;else if(f)return h.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var ColorRamps={GREY_BLUE:[wiggle.util.icolor(255,247,251,255),wiggle.util.icolor(208,209,230,255),wiggle.util.icolor(166,189,219,255),wiggle.util.icolor(116,169,207,255),wiggle.util.icolor(43,140,190,255),wiggle.util.icolor(4,90,141,255)],WHITE_RED:[wiggle.util.icolor(254,229,217,255),wiggle.util.icolor(252,187,161,255),wiggle.util.icolor(252,146,114,255),wiggle.util.icolor(251,106,74,255),wiggle.util.icolor(222,45,38,255),wiggle.util.icolor(165,15,21,255)],RED_BLUE:[wiggle.util.icolor(178,24,43,
255),wiggle.util.icolor(239,138,98,255),wiggle.util.icolor(253,219,199,255),wiggle.util.icolor(209,169,207,255),wiggle.util.icolor(103,169,207,255),wiggle.util.icolor(33,102,172,255)],BROWN_GREEN:[wiggle.util.icolor(140,82,10,255),wiggle.util.icolor(216,179,101,255),wiggle.util.icolor(246,232,195,255),wiggle.util.icolor(199,234,229,255),wiggle.util.icolor(90,180,172,255),wiggle.util.icolor(1,102,94,255)],WHITE_GREEN:[wiggle.util.icolor(237,248,233,255),wiggle.util.icolor(199,233,192,255),wiggle.util.icolor(161,
217,155,255),wiggle.util.icolor(116,196,118,255),wiggle.util.icolor(49,163,84,255),wiggle.util.icolor(0,109,44,255)]};ColorRamps.NUM_COLORS=ColorRamps.WHITE_RED.length;ColorRamps.RAMPS=[ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];var ColorScales={DISTRIBUTION:{QUANTILE:0,UNIFORM:1},RANGE:{LOCAL:0,GLOBAL:1}};var DashboardState=Backbone.Model.extend({defaults:{attr:null,colorRamp:ColorRamps.RAMPS[0],colorDist:ColorScales.DISTRIBUTION.UNIFORM,agg:"none"}}),dashState=new DashboardState;var ServiceLayer=function(){var a=null,b={},c=[],d=[],e={};return{addDataCallback:function(a){c.push(a)},loadUrl:function(f){var h=this;$.ajax({url:f,dataType:"json",success:function(f){a=wiggle.io.GeoJSON(f);d=a.numeric();d.sort();e={};d.forEach(function(a,b){e[a]=b});b=new ColorMap(a);var g=a;$.each(c,function(a,b){b(g)});dashState.set("attr",h.getSortedDateProperties()[0])}})},getSortedDateProperties:function(){return!a?[]:d},getIndexOfAttr:function(a){return e[a]},getAttributesByFeature:function(){var b=
a.features(),c=a.properties(),d={};b.each(function(a,b){var f={};$.each(c,function(a,c){f[c]=b.attr(c)});d[b.id]=f});return d},getAttributesBySortedDateProperty:function(){var b=a.numeric().sort(),c=a.features(),d={};$.each(b,function(a,b){var f={};c.each(function(a,c){f[c.id]=c.attr(b)});d[b]=f});return d},getColorForFeature:function(a){return b.colorForValue(a)}}}();var timeSlider=new wiggle.widget.Slider;ServiceLayer.addDataCallback(function(){timeSlider.model.set("attr",ServiceLayer.getSortedDateProperties())});timeSlider.change(function(a){dashState.set("attr",ServiceLayer.getSortedDateProperties()[a])});dashState.on("change:attr",function(){var a=dashState.get("attr");timeSlider.model.set("index",ServiceLayer.getIndexOfAttr(a))});var SelectionManager=function(){var a=[],b,c=!1;this.addView=function(b){a.push(b)};this.select=function(d){$.each(a,function(a,f){!c&&b&&f.deselect(b);f.select(d)});b=!b||!c?d:b.join(d)};this.reselect=function(){b&&this.select(b)};$(document).on("keydown",function(a){16===a.which&&(c=!0)});$(document).on("keyup",function(a){16===a.which&&(c=!1)})},selectionManager=new SelectionManager;var Panel=function(a,b,c){var d=this;this.created=!1;this.name=a;this.label=b;this.show=function(){this.container&&this.container.css("display","block");this.parentElement.show()};this.addClass=function(a){this.parentElement.addClass(a)};this.makeParentElement=function(){var a=jade.templates.panel;return this.parentElement=$(a({label:this.label,configOptions:c}))};this.fireSelect=function(a){selectionManager.select(a)};this.allFeatures=function(){return ServiceLayer.currentData.features()};this.width=
function(){return this.parentElement.width()};this.height=function(){return this.parentElement.height()};this.select=function(){};this.deselect=function(){};this.tempSelectMode=function(){};$(document).on("keydown",function(a){18===a.which&&d.tempSelectMode(!0)});$(document).on("keyup",function(a){18===a.which&&d.tempSelectMode(!1)})};Panel.BUTTON_TYPES={SELECTION_TOGGLE:"selection",FILTER:"filter"};var $div=function(){return $("<div></div>")},Popup=function(){var a=$div().css({position:"absolute",display:"none"}).addClass("popup");$("body").append(a);this.show=function(b,c){a.text(b);a.css({display:"block",left:c.clientX+5,top:c.clientY-a.innerHeight()-5})};this.hide=function(){a.css("display","none")}};var TimePanel=function(){Panel.call(this,"Time Series","time",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Panel",select:"Select Time Steps"},enabled:!1}}});var a,b,c=this;this.create=function(){this.container=$("<div>").attr("id","timeseries");this.parentElement.append(this.container);this.show();this.created=!0};this.resize=function(){a.resize()};this.newData=function(d){b&&a.remove(b);b=d;d=b.numeric();d.sort();b.attr("order",d);a=new wiggle.TimeSeries("#timeseries",
b,{ticks:500,ylock:!0});a.select(function(d){selectionLayer=a.search(b,d);c.fireSelect(selectionLayer)});$("#time-selection-button").click(function(b){$(b.currentTarget).parents(".view").toggleClass("selection");$(b.currentTarget).children(".icon").toggleClass("enabled");$(b.currentTarget).children(".selection_box").hasClass("enabled")?a.enableSelect():a.disableSelect()})};this.deselect=function(b){b.style(a,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(b){b.style(a,
"stroke",ColorMap.HIGHLIGHT)};this.draw=function(){b.features().style(a,"stroke",function(a){return ServiceLayer.getColorForFeature(a)})}};var MDSPanel=function(){Panel.call(this,"MDS","mds");var a,b;this.show=function(){a.style("display","block");this.parentElement.show()};this.create=function(){a=d3.select(this.parentElement[0]).append("svg").attr({viewBox:"0 0 1 1",preserveAspectRatio:"none"});b=a.append("g");a.append("g");b.append("rect").attr("x",0).attr("y",0).attr("width",1).attr("height",1).style("fill","#ff0000");this.parentElement.append($(a.node()));this.show();this.created=!0};this.resize=function(){};this.change=function(){};
this.draw=function(){};this.newData=function(){};this.select=function(){};this.deselect=function(){}};var AggregateModel=Backbone.Model.extend({defaults:{agg:null}}),aggModel=new AggregateModel;var NUM_COLORS=ColorRamps.NUM_COLORS,ColorMap=function(a){var b={},c={},d=function(a,d){c[a]=[];d.sort(function(a,b){return a-b});b[a]={min:d[0],max:d[d.length-1]};for(var e=1;e<=NUM_COLORS;e++){var g=Math.round(e*d.length/NUM_COLORS),k=Math.round((e-1)*d.length/NUM_COLORS);c[a].push({max:d[g-1],min:d[k]})}};a.numeric().forEach(function(b){var c=[];a.features().each(function(a,d){var e=d.attr(b);void 0!==e&&c.push(e)});d(b,c)});var e=function(a,b){if(b<=c[a][0].max)return 0;if(b>=c[a][c[a].length-
1].min)return c[a].length-1;for(var d=0;d<c[a].length-1;d++)if(c[a][d].min<=b&&c[a][d+1].min>b)return d;return c[a].length-1};aggModel.on("change:agg",function(){var f=dashState.get("agg");f?(filteredValues=[],a.features().each(function(a,b){filteredValues.push(f[b.id])}),d("agg",filteredValues)):(b.agg=void 0,c.agg=void 0)});this.colorForValue=function(a){var c=dashState.get("attr"),d=dashState.get("colorRamp"),g=dashState.get("colorDist");a="none"==dashState.get("agg")?a.attr(c):aggModel.get("agg")[a.id];
if(!a)return ColorMap.NO_DATA;var k;g===ColorScales.DISTRIBUTION.QUANTILE?k=e(c,a):g===ColorScales.DISTRIBUTION.UNIFORM&&(g=b[c].max+1,k=Math.floor((1-(g-a)/(g-(b[c].min-1)))*d.length));return d[k]};this.extents=function(a){return b[a]}};ColorMap.NO_DATA=wiggle.util.icolor(75,75,75,255);ColorMap.HIGHLIGHT=wiggle.util.icolor(241,246,112,255);ColorMap.AGGREGATE=wiggle.util.icolor(230,97,1,255);ColorMap.WHITE=wiggle.util.icolor(255,255,255,255);var MapPanel=function(){Panel.call(this,"Map","map",{selection:{type:Panel.BUTTON_TYPES.SELECTION_TOGGLE,options:{hoverText:{move:"Move Map",select:"Select Features"},enabled:!1}},filter:{type:Panel.BUTTON_TYPES.FILTER,options:{hoverText:{filter:"Filter"}}}});var a,b,c,d=this,e=!1;this.getMap=function(){return a};this.create=function(){this.container=$("<div>").attr("id","wigglemap");this.parentElement.append(this.container);this.show();a=new wiggle.Map("#wigglemap");a.select(function(e){c=a.search(b,
e);d.fireSelect(c)});$("#map-selection-button").click(function(a){$(a.currentTarget).parents(".view").toggleClass("selection");$(a.currentTarget).children(".icon").toggleClass("enabled");e=$(a.currentTarget).children(".selection_box").hasClass("enabled");d.tempSelectMode(e)});$("#"+MapPanel.FILTER_ID).click(function(){});this.created=!0};this.resize=function(){a.resize()};this.newData=function(c){b&&a.remove(b);b=c;b.features().style(a,"stroke",ColorMap.WHITE).style(a,"fill-opacity",0.9);a.center(b.bounds.centroid());
a.extents(b.bounds.width());a.append(b)};this.tempSelectMode=function(b){b?a.enableSelect():e||a.disableSelect()};this.deselect=function(b){b.style(a,"fill",function(a){return ServiceLayer.getColorForFeature(a)})};this.select=function(b){b.style(a,"fill",ColorMap.HIGHLIGHT)};this.draw=function(){b.features().style(a,"fill",function(a){return ServiceLayer.getColorForFeature(a)})}};MapPanel.FILTER_ID="mapFilter";var PanelManager=function(){var a=this,b={},c,d=0,e=1,f=$("<div>").attr("id","left"),h=$("<div>").attr("id","right");this.init=function(a){c=[new MapPanel,new TimePanel,new MDSPanel];$.each(c,function(a,c){b[c.label]=c;ServiceLayer.addDataCallback(function(a){return c.newData(a)});selectionManager.addView(c)});var d=$("<div>").addClass("panels").append(f).append(h);$(a).append(d);$.each(c,function(a,b){var c=b.makeParentElement();d.append(c)});a=Handlebars.templates.select_template;var e=a({selClass:"left-select"});
f.append(e);h.append(a({selClass:"right-select"}));$.each(c,function(a,b){$(".view-select").append(j(b.label,b.name))});g($(".left-select"));g($(".right-select"));$(".left-select").val(c[0].name).change()};var j=function(a,b){var c=Handlebars.templates.select_option_template;return c({label:a,name:b})};this.redraw=function(){$.each(c,function(a,b){b.draw()});selectionManager.reselect()};dashState.on("change",function(){a.redraw()});var g=function(a){a.change(function(){$(".view").hide();var c=k($(".left-select")),
f=k($(".right-select"));if(!c)throw"cant show panels: Left panel name undefined";if(!f)throw"Right panel name undefined";c=b[c];f=b[f];$.each([c,f],function(a,b){if(!b)throw"Error: Panel "+leftPanelName+" "+rightPanelName+" not found";b.created?b.show():b.create()});$(".view").removeClass("left-panel").removeClass("right-panel");c.addClass("left-panel");f.addClass("right-panel");f=-1!==a.attr("class").indexOf("left")?$(".right-select"):$(".left-select");d=l($(".left-select"));e=l($(".right-select"));
d===e&&(c=l(a)+1%$(".left-select option").length,-1!==f.attr("class").indexOf("left")?d=c:e=c,m(f).removeAttr("selected"),c=f.children().eq(c).val(),f.val(c).change())})},k=function(a){return m(a).val()},l=function(a){return m(a).prop("index")},m=function(a){var b=a.children("option[selected='selected']");0===b.length&&(b=a.children("option:selected"));return b};$(window).resize(function(){c[d].resize();c[e].resize()})},panelManager=new PanelManager;var DistribRangeController=function(){this.start=function(){$('.filter-button[name="'+DistribRangeController.DISTRIB+'"]').change(function(a){a=parseInt($(a.target).val(),10);dashState.set("colorDist",a)})}};DistribRangeController.DISTRIB="dist";DistribRangeController.RANGE="range";var distribRangeController=new DistribRangeController;var ColorRampController=function(){var a=0,b="#"+ColorRampController.NAME+"-filter";this.start=function(){c()};var c=function(){var d=ColorRamps.RAMPS,e=26*d.length,f=20*ColorRamps.NUM_COLORS,h=d3.select(b).append("svg:svg").attr("id","ramp-svg").attr("width",f+6).attr("height",e),j=0,g=0;$.each(d,function(b,d){var e=h.append("svg:rect").attr("x",j).attr("y",g).attr("height",26).attr("width",f+6).attr("fill","white");b===a&&e.attr("fill","yellow");j=3;$.each(d,function(e,f){h.append("svg:rect").attr("x",
j).attr("y",g+3).attr("height",20).attr("width",20).attr("fill",d3.rgb(f.rgb())).data([d]).on("click",function(){dashState.set("colorRamp",ColorRamps.RAMPS[b]);a=b;d3.select("#ramp-svg").remove();c()});j+=20});g+=26;j=0})}};ColorRampController.NAME="ramp";var colorRampController=new ColorRampController;var AGGREGATION_FUNCTIONS={mean:function(a){var b=0,c=0;$.each(a,function(a,e){isNaN(e)||(b+=e,c+=1)});return b/c},min:function(a){var b=Infinity;$.each(a,function(a,d){isNaN(d)||(b=d<b?d:b)});return b},max:function(a){var b=-Infinity;$.each(a,function(a,d){isNaN(d)||(b=d>b?d:b)});return b}};var aggregationService={computeAggregates:function(a){var b=AGGREGATION_FUNCTIONS[a];if(!b)return{};a=ServiceLayer.getAttributesByFeature();var c={};$.each(a,function(a,e){c[a]=b(e)});return c}};var AggregationController=function(){this.start=function(){$('.filter-button[name="'+AggregationController.NAME+'"]').change(function(a){a=$(a.target).val();var b;b="none"!=a?aggregationService.computeAggregates(a):null;aggModel.set("agg",b);dashState.set("agg",a)})}};AggregationController.NAME="agg";var aggregationController=new AggregationController;var TimeStepFilterView=function(){this.update=function(a){$("#step-filter").empty();var b=[];$.each(a,function(a,d){b.push({label:d,name:d})});return this.render(b)};this.render=function(a){var b=Handlebars.templates.select_and_options_template;a=b({selClass:TimeStepFilterView.CLASS,options:a});$("#"+TimeStepFilterView.NAME+"-filter").html(a)}};TimeStepFilterView.NAME="step";TimeStepFilterView.CLASS=TimeStepFilterView.NAME+"-select";var TimeStepController=function(){var a=new TimeStepFilterView;this.start=function(){ServiceLayer.addDataCallback(function(b){a.update(b.properties().sort());$("."+TimeStepFilterView.CLASS).change(function(a){a=$(a.target).val();dashState.set("attr",a)})});dashState.on("change:attr",function(){$("."+TimeStepFilterView.CLASS).val(dashState.get("attr"))})}};TimeStepController.NAME=TimeStepFilterView.NAME;var timeStepController=new TimeStepController;var ColorController=function(){this.start=function(a){var b;b=Handlebars.templates.filter_template;b=b({filters:[{name:TimeStepController.NAME,title:"Time Step",options:[]},{name:ColorRampController.NAME,title:"Color Ramp",options:[]},{name:"dist",title:"Color Distribution",options:[{label:"Uniform",value:ColorScales.DISTRIBUTION.UNIFORM},{label:"Quantile",value:ColorScales.DISTRIBUTION.QUANTILE}]},{name:AggregationController.NAME,title:"Aggregate",options:[{label:"None",value:"none"},{label:"Mean",
value:"mean"},{label:"Max",value:"max"},{label:"Min",value:"min"}]}]});a.append(b);$(".collapse-toggler").click(function(a){$(a.currentTarget).siblings(".collapsible").slideToggle();$(a.currentTarget).toggleClass("collapsed");a.stopPropagation()});$(".filter-button").change(function(a){var b=$(a.target).attr("name");a=$(a.target).attr("value");console.log(b+" changed to "+a)});colorRampController.start();timeStepController.start();distribRangeController.start();aggregationController.start()}},colorController=
new ColorController;var dash={},Dashboard=function(a,b){$(a).append(timeSlider.$el);$(a).append('<div id="main">');colorController.start($("#main"));panelManager.init("#main",b);this.loadUrl=function(a){ServiceLayer.loadUrl(a)}};window.dash={ready:function(a){$(document).ready(a)},create:function(a,b){return new Dashboard(a||"body",b||"")}};})();
