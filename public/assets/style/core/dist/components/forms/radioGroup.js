/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var controls_1 = require("./controls");
var counter = 0;
function nextName() { return RadioGroup.displayName + "-" + counter++; }
var RadioGroup = (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // a unique name for this group, which can be overridden by `name` prop.
        _this.autoGroupName = nextName();
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", { className: this.props.className },
            label == null ? null : React.createElement("label", { className: Classes.LABEL }, label),
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null) {
            if (this.props.options != null) {
                throw new Error(Errors.RADIOGROUP_CHILDREN_OPTIONS_MUTEX);
            }
            React.Children.forEach(this.props.children, function (child) {
                var radio = child;
                if (radio.type !== controls_1.Radio) {
                    throw new Error(Errors.RADIOGROUP_RADIO_CHILDREN);
                }
            });
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            var radio = child;
            return React.cloneElement(radio, _this.getRadioProps(radio.props));
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) { return (React.createElement(controls_1.Radio, tslib_1.__assign({}, option, _this.getRadioProps(option), { key: option.value }))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var value = optionProps.value, disabled = optionProps.disabled;
        return {
            checked: value === this.props.selectedValue,
            disabled: disabled || this.props.disabled,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
        };
    };
    return RadioGroup;
}(abstractComponent_1.AbstractComponent));
RadioGroup.displayName = "Blueprint.RadioGroup";
exports.RadioGroup = RadioGroup;
;

//# sourceMappingURL=radioGroup.js.map
