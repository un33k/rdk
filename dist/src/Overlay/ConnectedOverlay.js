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
var react_transition_group_1 = require("react-transition-group");
var Portal_1 = require("../Portal");
var OverlayTrigger_1 = require("./OverlayTrigger");
var ClickOutsideListener_1 = require("../ClickOutsideListener");
var Position_1 = require("../Position");
var bind = require("memoize-bind");
var ConnectedOverlay = /** @class */ (function (_super) {
    __extends(ConnectedOverlay, _super);
    function ConnectedOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.triggerRef = null;
        _this.positionRef = null;
        return _this;
    }
    ConnectedOverlay.prototype.getReference = function () {
        var reference = this.props.reference;
        if (reference) {
            if (reference.current) {
                return reference.current;
            }
            return reference;
        }
        else if (this.triggerRef) {
            return this.triggerRef.element;
        }
    };
    ConnectedOverlay.prototype.onClickOutside = function (event) {
        var _a = this.props, onDeactivate = _a.onDeactivate, closeOnBodyClick = _a.closeOnBodyClick;
        if (closeOnBodyClick && onDeactivate) {
            onDeactivate({
                type: 'click',
                nativeEvent: event
            });
        }
    };
    ConnectedOverlay.prototype.onEscape = function (event) {
        var _a = this.props, onDeactivate = _a.onDeactivate, closeOnEscape = _a.closeOnEscape;
        if (closeOnEscape && onDeactivate) {
            onDeactivate({
                type: 'key',
                nativeEvent: event
            });
        }
    };
    ConnectedOverlay.prototype.renderContent = function (animationState) {
        var _this = this;
        var _a = this.props, placement = _a.placement, modifiers = _a.modifiers, content = _a.content, followCursor = _a.followCursor;
        var reference = this.getReference();
        return (react_1["default"].createElement(Position_1.Position, { style: { zIndex: 9999 }, reference: reference, placement: placement, modifiers: modifiers, followCursor: followCursor, ref: function (ref) { return (_this.positionRef = ref); } },
            react_1["default"].createElement(ClickOutsideListener_1.ClickOutsideListener, { onClickOutside: bind(this.onClickOutside, this), onEscape: bind(this.onEscape, this) }, content(animationState))));
    };
    ConnectedOverlay.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, trigger = _a.trigger, visible = _a.visible, onActivate = _a.onActivate, onDeactivate = _a.onDeactivate, appendToBody = _a.appendToBody;
        return (react_1["default"].createElement(react_1.Fragment, null,
            children && trigger && onActivate && onDeactivate && (react_1["default"].createElement(OverlayTrigger_1.OverlayTrigger, { trigger: trigger, onActivate: onActivate, onDeactivate: onDeactivate, ref: function (ref) { return (_this.triggerRef = ref); } }, children)),
            children && !trigger && children,
            react_1["default"].createElement(react_transition_group_1.Transition, { "in": visible, timeout: 100, mountOnEnter: true, unmountOnExit: true }, function (animationState) { return (react_1["default"].createElement(react_1.Fragment, null,
                appendToBody && (react_1["default"].createElement(Portal_1.Portal, null, _this.renderContent(animationState))),
                !appendToBody && _this.renderContent(animationState))); })));
    };
    ConnectedOverlay.defaultProps = {
        closeOnBodyClick: true,
        closeOnEscape: true,
        appendToBody: true
    };
    return ConnectedOverlay;
}(react_1["default"].Component));
exports.ConnectedOverlay = ConnectedOverlay;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}