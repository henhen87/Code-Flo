/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var Classes = require("../../common/classes");
var Tag = (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = "Blueprint.Tag";
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, onRemove = _a.onRemove;
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_b = {},
            _b[Classes.TAG_REMOVABLE] = onRemove != null,
            _b), className);
        var button = utils_1.isFunction(onRemove) ? React.createElement("button", { type: "button", className: Classes.TAG_REMOVE, onClick: onRemove }) : undefined;
        return (React.createElement("span", tslib_1.__assign({}, props_1.removeNonHTMLProps(this.props), { className: tagClasses }),
            this.props.children,
            button));
        var _b;
    };
    return Tag;
}(React.Component));
Tag = tslib_1.__decorate([
    PureRender
], Tag);
exports.Tag = Tag;
exports.TagFactory = React.createFactory(Tag);

//# sourceMappingURL=tag.js.map
