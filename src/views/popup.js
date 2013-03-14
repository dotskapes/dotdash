goog.provide('Popup');

var $div = function () {
    return $('<div></div>');
};


// this is a poorly named class that isnt used at all - it is in fact for hover
// not for what one would normall call a popup. it is not being deleted as it
// is going to be used at some point for hover box, whence it should be renamed
var Popup = function () {
    var container = $div().css({
        position: 'absolute',
        'display': 'none'
    }).addClass('popup');

    $('body').append(container);

    this.show = function (text, event) {
        container.text(text);
        container.css({
            'display': 'block',
            'left': event.clientX + 5,
            'top': event.clientY - container.innerHeight() - 5
        });
    };

    this.hide = function () {
        container.css('display', 'none');
    };
};
