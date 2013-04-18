goog.provide('Panel');

goog.require('ServiceLayer');

var Panel = function (label, name, selectionManager, moveSelModel) {

    var ALT = 18;
    var that = this;

    this.created = false;
    // for internal/class
    this.name = name;
    // for display
    this.label = label;

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

    this.makeParentElement = function () {
        var template = jade.templates.panel;
        this.parentElement = $(template({name: this.name}));
        return this.parentElement;
    };

    this.fireSelect = function (selectionLayerSelector) {
        selectionManager.select(selectionLayerSelector);
    };

    this.allFeatures = function () { return ServiceLayer.currentData.features(); };

    this.width = function () { return this.parentElement.width(); };
    this.height = function () { return this.parentElement.height(); };

    // override in subclass, abstract methods
    this.select = function () {};
    this.deselect = function () {};
    this.draw = function (layerSelector) {};
    this.getWiggleView = function () {};

    // temporarily go into select mode (for modifier/ctrl hotkey)
    this.tempSelectMode = function (tempSelectOn) {};

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

Panel.BUTTON_TYPES = {SELECTION_TOGGLE: 'selection', FILTER: 'filter'};
