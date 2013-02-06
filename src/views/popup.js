function $div () {
    return $ ('<div></div>');
};

function Popup () {
    var container = $div ().css ({
        position: 'absolute',
        'display': 'none',
    }).addClass ('popup');

    $ ('body').append (container);

    this.show = function (text, event) {
        container.text (text);
        container.css ({
            'display': 'block',
            'left': event.clientX + 5,
            'top': event.clientY - container.innerHeight () - 5
        });
    };

    this.hide = function () {
        container.css ('display', 'none');
    };
};
