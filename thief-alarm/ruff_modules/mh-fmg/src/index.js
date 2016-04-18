/*
 * Copyright (c) 2015 Nanchao Inc. All rights reserved.
 */
'use strict';
var driver = require('ruff-driver');
var Gpio = require('gpio');

module.exports = driver({
    attach: function(inputs) {
        this.gpio = inputs.getRequired('gpio');
        this.gpio.setDirection(Gpio.OUT_LOW);
    },

    exports: {
        buzz: function() {
            return this.gpio.write(1);
        },

        turnOn: function() {
            return this.gpio.write(1);
        },

        unbuzz: function() {
            return this.gpio.write(0);
        },

        turnOff: function() {
            return this.gpio.write(0);
        }
    }
});
