/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var common_1 = require("../../common");
var Errors = require("../../common/errors");
var buttons_1 = require("../button/buttons");
var dialog_1 = require("../dialog/dialog");
var Alert = (function (_super) {
    tslib_1.__extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, intent = _a.intent, isOpen = _a.isOpen, confirmButtonText = _a.confirmButtonText, onConfirm = _a.onConfirm, style = _a.style;
        return (React.createElement(dialog_1.Dialog, { className: classNames(common_1.Classes.ALERT, className), isOpen: isOpen, style: style },
            React.createElement("div", { className: common_1.Classes.ALERT_BODY },
                this.maybeRenderIcon(),
                React.createElement("div", { className: common_1.Classes.ALERT_CONTENTS }, children)),
            React.createElement("div", { className: common_1.Classes.ALERT_FOOTER },
                React.createElement(buttons_1.Button, { intent: intent, text: confirmButtonText, onClick: onConfirm }),
                this.maybeRenderSecondaryAction())));
    };
    Alert.prototype.validateProps = function (props) {
        if (props.cancelButtonText != null && props.onCancel == null ||
            props.cancelButtonText == null && props.onCancel != null) {
            throw new Error(Errors.ALERT_CANCEL_PROPS);
        }
    };
    Alert.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName != null) {
            var iconClass = classNames("pt-icon", common_1.Classes.iconClass(iconName));
            return React.createElement("span", { className: iconClass });
        }
        return undefined;
    };
    Alert.prototype.maybeRenderSecondaryAction = function () {
        if (this.props.cancelButtonText != null) {
            return React.createElement(buttons_1.Button, { text: this.props.cancelButtonText, onClick: this.props.onCancel });
        }
        return undefined;
    };
    return Alert;
}(common_1.AbstractComponent));
Alert.defaultProps = {
    confirmButtonText: "OK",
    isOpen: false,
    onConfirm: null,
};
Alert.displayName = "Blueprint.Alert";
exports.Alert = Alert;

//# sourceMappingURL=alert.js.map
