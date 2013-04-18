// This file was autogenerated by ./build/depswriter.py.
// Please do not edit.
goog.addDependency('../src/base.js', ['goog'], []);
goog.addDependency('../src/controllers/FilterController.js', ['FilterController'], ['Filter']);
goog.addDependency('../src/controllers/MoveSelController.js', ['MoveSelController'], ['MoveSelModel']);
goog.addDependency('../src/controllers/SidebarController.js', ['SidebarController'], ['ColorController', 'FilterController', 'MoveSelController']);
goog.addDependency('../src/controllers/aggregation_controller.js', ['AggregationController'], ['aggModel', 'aggregationService']);
goog.addDependency('../src/controllers/color_controller.js', ['ColorController'], ['AggregationController', 'ColorRampController', 'DistribRangeController', 'TimeStepController']);
goog.addDependency('../src/controllers/color_ramp_controller.js', ['ColorRampController'], ['ColorRamps']);
goog.addDependency('../src/controllers/distrib_range_controller.js', ['DistribRangeController'], ['ServiceLayer']);
goog.addDependency('../src/controllers/map_panel.js', ['MapPanel'], ['ColorMap', 'Panel', 'ServiceLayer']);
goog.addDependency('../src/controllers/mds_panel.js', ['MDSPanel'], ['Panel']);
goog.addDependency('../src/controllers/panel.js', ['Panel'], ['ServiceLayer']);
goog.addDependency('../src/controllers/panel_manager.js', ['PanelManager'], ['MDSPanel', 'MapPanel', 'ServiceLayer', 'TimePanel']);
goog.addDependency('../src/controllers/selection_manager.js', ['SelectionManager'], []);
goog.addDependency('../src/controllers/time_panel.js', ['TimePanel'], ['Panel', 'Popup', 'ServiceLayer']);
goog.addDependency('../src/controllers/time_slider_controller.js', ['TimeSliderController'], ['ServiceLayer']);
goog.addDependency('../src/controllers/time_step_controller.js', ['TimeStepController'], ['ServiceLayer', 'TimeStepFilterView']);
goog.addDependency('../src/dash.js', ['dash'], ['DashboardState', 'Filter', 'MDSPanel', 'MapPanel', 'MoveSelModel', 'PanelManager', 'PanelState', 'SelectionManager', 'ServiceLayer', 'SidebarController', 'TimePanel', 'TimeSliderController']);
goog.addDependency('../src/models/MoveSelModel.js', ['MoveSelModel'], []);
goog.addDependency('../src/models/aggregate.js', ['aggModel'], []);
goog.addDependency('../src/models/aggregation_functions.js', ['AGGREGATION_FUNCTIONS'], []);
goog.addDependency('../src/models/color_map.js', ['ColorMap'], ['ColorRamps', 'ColorScales', 'aggModel']);
goog.addDependency('../src/models/color_ramps.js', ['ColorRamps'], []);
goog.addDependency('../src/models/color_scales.js', ['ColorScales'], []);
goog.addDependency('../src/models/dash_state.js', ['DashboardState'], ['ColorRamps', 'ColorScales']);
goog.addDependency('../src/models/filter.js', ['Filter'], ['ServiceLayer']);
goog.addDependency('../src/models/panel_state.js', ['PanelState'], []);
goog.addDependency('../src/services/aggregation_service.js', ['aggregationService'], ['AGGREGATION_FUNCTIONS', 'ServiceLayer']);
goog.addDependency('../src/services/service_layer.js', ['ServiceLayer'], ['ColorRamps', 'ColorScales']);
goog.addDependency('../src/views/popup.js', ['Popup'], []);
goog.addDependency('../src/views/time_step_filter_view.js', ['TimeStepFilterView'], []);
