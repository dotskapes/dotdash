// This file was autogenerated by ./build/depswriter.py.
// Please do not edit.
goog.addDependency('../src/base.js', ['goog'], []);
goog.addDependency('../src/controllers/FilterController.js', ['FilterController'], ['Filter']);
goog.addDependency('../src/controllers/MoveSelController.js', ['MoveSelController'], ['MoveSelModel']);
goog.addDependency('../src/controllers/Panel.js', ['Panel'], ['dash']);
goog.addDependency('../src/controllers/SidebarController.js', ['SidebarController'], ['ColorController', 'FilterController', 'MoveSelController']);
goog.addDependency('../src/controllers/aggregation_controller.js', ['AggregationController'], ['AggregationService']);
goog.addDependency('../src/controllers/color_controller.js', ['ColorController'], ['AggregationController', 'ColorRampController', 'DistribRangeController', 'TimeStepController']);
goog.addDependency('../src/controllers/color_ramp_controller.js', ['ColorRampController'], ['ColorRamps']);
goog.addDependency('../src/controllers/distrib_range_controller.js', ['DistribRangeController'], []);
goog.addDependency('../src/controllers/panel_manager.js', ['PanelManager'], ['MapPanel', 'TablePanel', 'TimePanel']);
goog.addDependency('../src/controllers/panels/MapPanel.js', ['MapPanel'], ['ColorMap', 'Panel']);
goog.addDependency('../src/controllers/panels/TablePanel.js', ['TablePanel'], ['Panel']);
goog.addDependency('../src/controllers/panels/TimePanel.js', ['TimePanel'], ['Panel', 'Popup']);
goog.addDependency('../src/controllers/selection_manager.js', ['SelectionManager'], []);
goog.addDependency('../src/controllers/time_slider_controller.js', ['TimeSliderController'], []);
goog.addDependency('../src/controllers/time_step_controller.js', ['TimeStepController'], ['TimeStepFilterView']);
goog.addDependency('../src/dash.js', ['Dashboard'], ['AggregateModel', 'DashboardState', 'Filter', 'MapPanel', 'MoveSelModel', 'Panel', 'PanelManager', 'PanelState', 'SelectionManager', 'ServiceLayer', 'SidebarController', 'TablePanel', 'TimePanel', 'TimeSliderController', 'dash']);
goog.addDependency('../src/models/MoveSelModel.js', ['MoveSelModel'], []);
goog.addDependency('../src/models/aggregate.js', ['AggregateModel'], []);
goog.addDependency('../src/models/aggregation_functions.js', ['AGGREGATION_FUNCTIONS'], []);
goog.addDependency('../src/models/color_map.js', ['ColorMap'], ['ColorRamps', 'ColorScales']);
goog.addDependency('../src/models/color_ramps.js', ['ColorRamps'], []);
goog.addDependency('../src/models/color_scales.js', ['ColorScales'], []);
goog.addDependency('../src/models/dash_state.js', ['DashboardState'], ['ColorRamps', 'ColorScales']);
goog.addDependency('../src/models/filter.js', ['Filter'], []);
goog.addDependency('../src/models/panel_state.js', ['PanelState'], []);
goog.addDependency('../src/namespace.js', ['dash'], []);
goog.addDependency('../src/services/aggregation_service.js', ['AggregationService'], ['AGGREGATION_FUNCTIONS']);
goog.addDependency('../src/services/service_layer.js', ['ServiceLayer'], ['AggregationService', 'ColorRamps', 'ColorScales']);
goog.addDependency('../src/views/popup.js', ['Popup'], []);
goog.addDependency('../src/views/time_step_filter_view.js', ['TimeStepFilterView'], []);
