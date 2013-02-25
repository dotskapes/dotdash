goog.provide('ColorRamps');

'use strict';

var ColorRamps = {

    GREY_BLUE: [
        wiggle.util.icolor(255, 247, 251, 255),
        wiggle.util.icolor(208, 209, 230, 255),
        wiggle.util.icolor(166, 189, 219, 255),
        wiggle.util.icolor(116, 169, 207, 255),
        wiggle.util.icolor(43, 140, 190, 255),
        wiggle.util.icolor(4, 90, 141, 255)
    ],

    WHITE_RED: [
        wiggle.util.icolor(254, 229, 217, 255),
        wiggle.util.icolor(252, 187, 161, 255),
        wiggle.util.icolor(252, 146, 114, 255),
        wiggle.util.icolor(251, 106, 74, 255),
        wiggle.util.icolor(222, 45, 38, 255),
        wiggle.util.icolor(165, 15, 21, 255)
    ],
    
    RED_BLUE: [
        wiggle.util.icolor(178, 24, 43, 255),
        wiggle.util.icolor(239, 138, 98, 255),
        wiggle.util.icolor(253, 219, 199, 255),
        wiggle.util.icolor(209, 169, 207, 255),
        wiggle.util.icolor(103, 169, 207, 255),
        wiggle.util.icolor(33, 102, 172, 255)
    ],

    BROWN_GREEN: [
        wiggle.util.icolor(140, 82, 10, 255),
        wiggle.util.icolor(216, 179, 101, 255),
        wiggle.util.icolor(246, 232, 195, 255),
        wiggle.util.icolor(199, 234, 229, 255),
        wiggle.util.icolor(90, 180, 172, 255),
        wiggle.util.icolor(1, 102, 94, 255)
    ],

    WHITE_GREEN: [
        wiggle.util.icolor(237, 248, 233, 255),
        wiggle.util.icolor(199, 233, 192, 255),
        wiggle.util.icolor(161, 217, 155, 255),
        wiggle.util.icolor(116, 196, 118, 255),
        wiggle.util.icolor(49, 163, 84, 255),
        wiggle.util.icolor(0, 109, 44, 255)
    ]

};

ColorRamps.NUM_COLORS = ColorRamps.WHITE_RED.length;

ColorRamps.RAMPS = [ColorRamps.WHITE_RED,ColorRamps.GREY_BLUE,ColorRamps.RED_BLUE,
                    ColorRamps.WHITE_GREEN,ColorRamps.BROWN_GREEN];