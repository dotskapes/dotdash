goog.provide('Panel');

goog.require('ServiceLayer');
goog.require('selectionManager');

var Panel = function (name, label, configOptions) {

    var ALT = 18;
    var that = this;

    this.created = false;
    // for display
    this.name = name;
    // for internal/class
    this.label = label;

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
        this.parentElement = $(template({label: this.label, configOptions: configOptions}));
        return this.parentElement;
    };

    this.fireSelect = function (selectionLayer) {
        selectionManager.select(selectionLayer);
    };

    this.allFeatures = function () { return ServiceLayer.currentData.features(); };

    this.width = function () { return this.parentElement.width(); };
    this.height = function () { return this.parentElement.height(); };

    // override in subclass
    this.select = function () {};
    this.deselect = function () {};

    // temporarily go into select mode (for modifier/ctrl hotkey)
    this.tempSelectMode = function (tempSelectOn) {};

    // control hotkey -> temporary select mode
    var addKeyListeners = function () {
        $(document).on('keydown', function (e) {
            if (e.which === ALT) { that.tempSelectMode(true); }
        });
        $(document).on('keyup', function (e) {
            if (e.which === ALT) { that.tempSelectMode(false); }
        });
    };

    addKeyListeners();
};

Panel.BUTTON_TYPES = {SELECTION_TOGGLE: 'selection',FILTER: 'filter'};


Handlebars.registerHelper('renderButton', function (type, options) {
    if (type === Panel.BUTTON_TYPES.SELECTION_TOGGLE) {
        var template = Handlebars.templates.selection_toggle_button_template;
        return new Handlebars.SafeString(template(options));
    }
});