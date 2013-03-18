// This file was autogenerated by ./build/depswriter.py.
// Please do not edit.
goog.addDependency('../src/base.js', ['goog'], []);
goog.addDependency('../src/controllers/aggregation_controller.js', ['aggregationController'], ['aggModel', 'aggregationService', 'dashState', 'panelManager']);
goog.addDependency('../src/controllers/color_controller.js', ['colorController'], ['aggregationController', 'colorRampController', 'distribRangeController', 'timeStepController']);
goog.addDependency('../src/controllers/color_ramp_controller.js', ['colorRampController'], ['ColorRamps', 'dashState']);
goog.addDependency('../src/controllers/distrib_range_controller.js', ['distribRangeController'], ['ServiceLayer']);
goog.addDependency('../src/controllers/filter_controller.js', ['filterController'], ['ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/map_panel.js', ['MapPanel'], ['ColorMap', 'Panel', 'ServiceLayer', 'filterController', 'selectionManager']);
goog.addDependency('../src/controllers/mds_panel.js', ['MDSPanel'], ['Panel']);
goog.addDependency('../src/controllers/panel.js', ['Panel'], ['ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/panel_manager.js', ['panelManager'], ['MDSPanel', 'MapPanel', 'ServiceLayer', 'TimePanel', 'dashState', 'filterController', 'panelState', 'selectionManager']);
goog.addDependency('../src/controllers/selection_manager.js', ['selectionManager'], []);
goog.addDependency('../src/controllers/time_panel.js', ['TimePanel'], ['Panel', 'Popup', 'ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/time_slider_controller.js', ['timeSlider'], ['ServiceLayer', 'dashState']);
goog.addDependency('../src/controllers/time_step_controller.js', ['timeStepController'], ['ServiceLayer', 'TimeStepFilterView', 'dashState', 'panelManager']);
goog.addDependency('../src/dash.js', ['dash'], ['ServiceLayer', 'colorController', 'dashState', 'panelManager', 'timeSlider']);
goog.addDependency('../src/models/aggregate.js', ['aggModel'], []);
goog.addDependency('../src/models/aggregation_functions.js', ['AGGREGATION_FUNCTIONS'], []);
goog.addDependency('../src/models/color_map.js', ['ColorMap'], ['ColorRamps', 'ColorScales', 'aggModel', 'dashState']);
goog.addDependency('../src/models/color_ramps.js', ['ColorRamps'], []);
goog.addDependency('../src/models/color_scales.js', ['ColorScales'], []);
goog.addDependency('../src/models/dash_state.js', ['dashState'], ['ColorRamps', 'ColorScales']);
goog.addDependency('../src/models/panel_state.js', ['panelState'], ['dashState']);
goog.addDependency('../src/services/aggregation_service.js', ['aggregationService'], ['AGGREGATION_FUNCTIONS', 'ServiceLayer']);
goog.addDependency('../src/services/service_layer.js', ['ServiceLayer'], ['ColorRamps', 'ColorScales', 'dashState']);
goog.addDependency('../src/views/popup.js', ['Popup'], []);
goog.addDependency('../src/views/time_step_filter_view.js', ['TimeStepFilterView'], []);
