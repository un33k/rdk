"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var bind = require("memoize-bind");
var OverlayTrigger = /** @class */ (function (_super) {
    __extends(OverlayTrigger, _super);
    function OverlayTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        return _this;
    }
    OverlayTrigger.prototype.hasTrigger = function (type) {
        var triggers = this.props.trigger;
        if (Array.isArray(triggers)) {
            return triggers.includes(type);
        }
        else {
            return type === triggers;
        }
    };
    OverlayTrigger.prototype.onFocus = function (event) {
        this.activate({ type: 'focus', nativeEvent: event });
    };
    OverlayTrigger.prototype.onBlur = function (event) {
        this.deactivate({ type: 'focus', nativeEvent: event });
    };
    OverlayTrigger.prototype.onMouseEnter = function (event) {
        this.activate({ type: 'hover', nativeEvent: event });
    };
    OverlayTrigger.prototype.onMouseLeave = function (event) {
        this.deactivate({ type: 'hover', nativeEvent: event });
    };
    OverlayTrigger.prototype.onClick = function (event) {
        this.activate({ type: 'click', nativeEvent: event });
        // Kill the tooltip on click if its not a click listener
        if (!this.hasTrigger('click')) {
            this.props.onDeactivate({ type: 'hover', nativeEvent: event });
        }
    };
    OverlayTrigger.prototype.activate = function (_a) {
        var type = _a.type, nativeEvent = _a.nativeEvent;
        var onActivate = this.props.onActivate;
        if (this.hasTrigger(type)) {
            onActivate({ type: type, nativeEvent: nativeEvent });
        }
    };
    OverlayTrigger.prototype.deactivate = function (_a) {
        var type = _a.type, nativeEvent = _a.nativeEvent;
        var onDeactivate = this.props.onDeactivate;
        if (this.hasTrigger(type)) {
            onDeactivate({ type: type, nativeEvent: nativeEvent });
        }
    };
    OverlayTrigger.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className;
        var tabIndex = this.hasTrigger('focus') ? -1 : undefined;
        return (react_1["default"].createElement("span", { tabIndex: tabIndex, ref: function (ref) { return (_this.element = ref); }, onMouseEnter: bind(this.onMouseEnter, this), onMouseLeave: bind(this.onMouseLeave, this), onFocus: bind(this.onFocus, this), onBlur: bind(this.onBlur, this), onClick: bind(this.onClick, this), className: classnames_1["default"](className) }, children));
    };
    return OverlayTrigger;
}(react_1.Component));
exports.OverlayTrigger = OverlayTrigger;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}