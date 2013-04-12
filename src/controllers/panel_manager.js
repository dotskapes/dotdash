goog.provide('panelManager');

goog.require('dashState');
goog.require('panelState');
goog.require('ServiceLayer');
goog.require('selectionManager');
goog.require('MapPanel');
goog.require('TimePanel');
goog.require('MDSPanel');
goog.require('filter');

var PanelManager = Backbone.View.extend({

    // A mapping between names of panels and their actual html element
    panelDivs: {},

    start: function ($parent) {
        var that = this;

        $parent.append (this.$el);
        this.render();

        // Set the height of the panels div
        this.setSize();

        // Whenever the window is resized, chnage the size of the panels
        $(window).resize(function () {
            that.setSize();
        });

        // Whenver the model changes the current panels, reflect this in the view
        this.model.on('change', function () {
            that.setPanels();
        });

        // Initialize data callbacks on the panels
        this.initPanels();

        // It is now okay to bring in the actual panels
        this.setPanels();

        this.initFilterListener();

    },

    // Shortcuts to the left and right panels, created by render
    $left: null,
    $right: null,

    events: {
        'change select': 'changePane'
    },

    // Name of the containing element
    className: 'panels',

    // Initializes the elements for managing the panels (left and right panelsl, etc)
    // Don't call render until after start has been called
    render: function () {
        var that = this;
        var panelContainer = $(jade.templates.panels({
            model: this.model
        }));
        this.$el.append(panelContainer);

        // Initialize the html elements for each panel
        $.each(this.model.get('panels'), function (i, panel) {
            that.panelDivs[panel.name] = panel.makeParentElement();
        });

        this.$left = this.$el.find('.left');
        this.$right = this.$el.find('.right');
    },

    // Configure the height of the panels so that they take up the remainder of the screen
    setSize: function () {
        var siblingsHeight = 0;
        this.$el.siblings().each(function (i, sibling) {
            siblingsHeight += $(sibling).height() +
                parseInt($(sibling).css('marginTop'), 10) +
                parseInt($(sibling).css('marginBottom'), 10);
        });
        var viewSiblingsHeight = 0;
        this.$left.find('.view').siblings().each(function (i, sibling) {
            viewSiblingsHeight += $(sibling).height() +
                parseInt($(sibling).css('marginTop'), 10) +
                parseInt($(sibling).css('marginBottom'), 10);
        });
        var height = this.$el.parent().height() - siblingsHeight - viewSiblingsHeight;
        this.$left.find('.view').css('height', height);
        this.$right.find('.view').css('height', height);
    },

    // Either create of show a given panel
    showPanel: function (panel) {
        if (!panel.created) {
            panel.create();
        }
        panel.show();
    },

    setPanel: function (side) {
        var panel = this.model.getPanel(this.model.get(side));
        var $pane = this['$' + side];

        // Hide the exisiting elements
        $pane.find('.view').children().hide();

        // Append these panels to the correct side
        $pane.find('.view').append(this.panelDivs[panel.name]);

        // Show the two panels
        this.showPanel(panel);

        // Set the dropdown so the correct values are reflected
        $pane.find('select').val(this.model.get(side));
    },

    // Set the panes that the panels belong to
    setPanels: function () {
        this.setPanel('left');
        this.setPanel('right');
    },

    // Register a data callback on all the panels
    initPanels: function () {
        var that = this;

        $.each(this.model.get('panels'), function (i, pan) {
            ServiceLayer.addDataCallback(function (data) {
                return pan.newData(data);
            });
            selectionManager.addView(pan);
        });

        dashState.on('change', function () {
            that.draw();
        });
    },

    draw: function () {
        // todo: this should probably only draw the panels currently showing
        // and on showing a new panel would need to do a draw
        $.each(this.model.get('panels'), function (i, panel) {
            // redraws all panels (without selection/highlight)
            // only draw filtered features
            panel.draw(filter.getFilter());
        });
        // panels dont track selection, hafta redo selection with selMan
        selectionManager.reselect();
    },

    changePane: function (event) {
        var leftSelect = this.$left.find('.select select');
        var rightSelect = this.$right.find('.select select');

        var leftIndex = parseInt(leftSelect.val(), 10);
        var rightIndex = parseInt(rightSelect.val(), 10);

        // If the indices are the same, we must increment one of them
        if (leftIndex === rightIndex) {
            if (event.target === leftSelect.get(0)) {
                rightIndex = (rightIndex + 1) % this.model.get('panels').length;
            }
            else {
                leftIndex = (leftIndex + 1) % this.model.get('panels').length;
            }
        }

        this.model.set({
            'left': leftIndex,
            'right': rightIndex
        });
    },

    initFilterListener: function () {
        var that = this;
        filter.on('change', function () { that.draw(); });
    }

});

var panelManager = new PanelManager({
    model: panelState
});

