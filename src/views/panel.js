function Panel() {
    this.created = false;
    this.name = 'Name Me';
    this.label = 'label_me';
    this.parentElement;
    this.container;

    this.show = function() {
        this.container.css('display','block');
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