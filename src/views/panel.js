function Panel(name,label) {
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
        this.parentElement = $('<div>').attr('id', this.label).addClass('view');
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