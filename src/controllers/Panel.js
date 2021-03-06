goog.provide('Panel');

goog.require('dash');

// Legacy Mode: Need to track down all refs to Panel in the code
var Panel;

(function() {

    // A mapping from panel names to panel classes
    var panelClasses = {};

    Panel = function (label, name, selectionManager, moveSelModel, serviceLayer) {

        var ALT = 18;
        var that = this;

        this.created = false;
        // for internal/class
        this.name = name;
        // for display
        this.label = label;

        // Make the parent element of the parent
        var template = jade.templates.panel;
        this.parentElement = $(template({name: this.name}));

        var init = function () {
            addKeyListeners();
            addMoveSelListener();
        };

        this.show = function () {
            if (this.container) {
                this.container.css('display', 'block');
            }
            this.parentElement.show();
        };

        this.addClass = function (cssClass) {
            this.parentElement.addClass(cssClass);
        };

        // Rename: parent element is now created right away
        this.makeParentElement = function () {
            return this.parentElement;
        };

        this.fireSelect = function (selectionLayerSelector) {
            selectionManager.select(selectionLayerSelector);
        };

        this.allFeatures = function () { return serviceLayer.currentData.features(); };

        this.width = function () { return this.parentElement.width(); };
        this.height = function () { return this.parentElement.height(); };

        this.resize = function () {
            if (this.hasWiggleView()) {
                this.getWiggleView().resize();
            }
        };

        // override in subclass, abstract methods
        this.select = function () {};
        this.deselect = function () {};
        this.draw = function (layerSelector) {};
        this.hasWiggleView = function () {
            return (this.getWiggleView() !== null && this.getWiggleView() !== undefined);
        };
        this.getWiggleView = function () { return null; };

        // temporarily go into select mode (for modifier/ctrl hotkey)
        this.tempSelectMode = function (tempSelectOn) {};

        // Abstract create method
        this.create = function() {};

        // Abstract new data function
        this.newData = function(data) {};

        // Abstract new overlay function
        this.newOverlay = function (data) {};

        // control hotkey -> temporary select mode
        var addKeyListeners = function () {
            $(document).on('keydown', function (e) {
                if (e.which === ALT) { moveSelModel.set('selectOverride', true); }
            });
            $(document).on('keyup', function (e) {
                if (e.which === ALT) { moveSelModel.set('selectOverride', false); }
            });
        };

        var addMoveSelListener = function () {
            moveSelModel.on('change', function (m) {
                //toggle cursor from pointer to 4HeadedArrow. not working! put in panel?
                //$(event.currentTarget).parents('.view').toggleClass('selection');
                var view = that.getWiggleView();
                if (view) {
                    if (m.isMoveMode()) { view.disableSelect(); }
                    else { view.enableSelect(); }
                }
            }, this);
        };

        init();

    };

    // Static method. Returns the class of panel associated with a name
    // ie - map returns the MapPanel constructor
    Panel.getClass = function(name) {
        return panelClasses[name];
    };

    // Panel classes must register themselves to be avaialble through the Panel.get(name) interface
    Panel.register = function(name, func) {
        panelClasses[name] = func;
    };

    Panel.BUTTON_TYPES = {SELECTION_TOGGLE: 'selection', FILTER: 'filter'};

    dash.controllers.Panel = Panel;

})();
