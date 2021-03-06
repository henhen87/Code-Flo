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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var overlay_1 = require("../overlay/overlay");
var Dialog = (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = "Blueprint.Dialog";
        return _this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: classNames((_a = {}, _a[Classes.OVERLAY_SCROLL_CONTAINER] = !this.props.inline, _a)), hasBackdrop: true }),
            React.createElement("div", { className: classNames(Classes.DIALOG, this.props.className), style: this.props.style },
                this.maybeRenderHeader(),
                this.props.children)));
        var _a;
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = classNames(Classes.DIALOG_CLOSE_BUTTON, Classes.iconClass("small-cross"));
            return React.createElement("button", { "aria-label": "Close", className: classes, onClick: this.props.onClose });
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        if (this.props.title == null) {
            return undefined;
        }
        var maybeIcon;
        if (this.props.iconName != null) {
            maybeIcon = React.createElement("span", { className: classNames(Classes.ICON_LARGE, Classes.iconClass(this.props.iconName)) });
        }
        return (React.createElement("div", { className: Classes.DIALOG_HEADER },
            maybeIcon,
            React.createElement("h5", null, this.props.title),
            this.maybeRenderCloseButton()));
    };
    return Dialog;
}(abstractComponent_1.AbstractComponent));
Dialog.defaultProps = {
    isOpen: false,
};
exports.Dialog = Dialog;
exports.DialogFactory = React.createFactory(Dialog);

//# sourceMappingURL=dialog.js.map
