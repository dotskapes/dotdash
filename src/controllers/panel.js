goog.provide('Panel');

goog.require('ServiceLayer');
goog.require('selectionManager');

var Panel = function (name, label, configOptions) {
    this.created = false;
    // for display
    this.name = name;
    // for internal/class
    this.label = label;
    this.parentElement;
    this.container;

    this.show = function() {
        if (this.container) {
            this.container.css('display','block');
        }
        this.parentElement.show();
    };

    this.addClass = function(cssClass) {
        this.parentElement.addClass(cssClass);
    };

    this.makeParentElement = function() {
        var template = Handlebars.templates.panel_template;
        this.parentElement = $(template({label: this.label, configOptions: configOptions}));
        return this.parentElement;
    };

    this.fireSelect = function(selectionLayer) {
        // hmmm, this is view knowing controller - refactor?
        selectionManager.select(selectionLayer);
    };

    this.allFeatures = function() { return ServiceLayer.currentData.features(); };

    this.width = function() { return this.parentElement.width(); };
    this.height = function() { return this.parentElement.height(); };

    // override in subclass
    this.select = function() {};
    this.deselect = function() {};
    
};

Panel.BUTTON_TYPES = {SELECTION_TOGGLE: 'selection'};


Handlebars.registerHelper('renderButton', function (type, options) {
    if (type === Panel.BUTTON_TYPES.SELECTION_TOGGLE) {
        var template = Handlebars.templates.selection_toggle_button;
        return new Handlebars.SafeString(template(options));
    }
});