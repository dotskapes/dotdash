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
        if (this.container) this.container.css('display','block');
        this.parentElement.show();
    };

    this.addClass = function(cssClass) {
        this.parentElement.addClass(cssClass);
    };

    this.makeParentElement = function() {
        // this should be moved to a template
        this.parentElement = $('<div>').attr('id', this.label).addClass('view');
        var buttons = $('<div>').addClass('buttons');
        if (configOptions) {
            $.each(configOptions, function (label, option) {
                var button = $('<div>')
                    .attr('id', label+'-button')
                    .addClass('button')
                    .html(option.name);
                if (option.enabled) {
                    button.addClass('enabled');
                }
                buttons.append(button);
            });
        }
        this.parentElement.append(buttons);
        return this.parentElement;
    };

    this.fireSelect = function(selectionLayer) {
        // hmmm, this is view knowing controller - refactor?
        selectionManager.select(selectionLayer);
    };

    this.allFeatures = function() { return ServiceLayer.currentData.features(); }

    this.width = function() { return this.parentElement.width(); }
    this.height = function() { return this.parentElement.height(); }

    // override in subclass
    this.select = function() {}
    this.deselect = function() {}
    
}