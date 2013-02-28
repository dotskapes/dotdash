// This file was autogenerated by ./build/depswriter.py.
// Please do not edit.
goog.addDependency('../src/base.js', ['goog'], []);
goog.addDependency('../src/controllers/color_ramp_controller.js', ['ColorRampController'], ['ServiceLayer', 'panelManager']);
goog.addDependency('../src/controllers/distrib_range_controller.js', ['DistribRangeController'], ['ServiceLayer']);
goog.addDependency('../src/controllers/filter_controller.js', ['FilterController'], ['ColorRampController', 'DistribRangeController', 'TimeStepController']);
goog.addDependency('../src/controllers/map_panel.js', ['MapPanel'], ['ColorMap', 'Panel', 'ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/mds_panel.js', ['MDSPanel'], ['Panel']);
goog.addDependency('../src/controllers/panel.js', ['Panel'], ['ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/panel_manager.js', ['panelManager'], ['MDSPanel', 'MapPanel', 'TimePanel', 'selectionManager']);
goog.addDependency('../src/controllers/selection_manager.js', ['selectionManager'], []);
goog.addDependency('../src/controllers/time_panel.js', ['TimePanel'], ['Panel', 'Popup', 'ServiceLayer', 'selectionManager']);
goog.addDependency('../src/controllers/time_step_controller.js', ['TimeStepController'], ['ServiceLayer', 'TimeStepFilterView', 'panelManager']);
goog.addDependency('../src/dash.js', ['dash'], ['FilterController', 'ServiceLayer', 'panelManager']);
goog.addDependency('../src/models/color_map.js', ['ColorMap'], ['ColorRamps']);
goog.addDependency('../src/models/color_ramps.js', ['ColorRamps'], []);
goog.addDependency('../src/models/service_layer.js', ['ServiceLayer'], []);
goog.addDependency('../src/views/popup.js', ['Popup'], []);
goog.addDependency('../src/views/time_step_filter_view.js', ['TimeStepFilterView'], []);
