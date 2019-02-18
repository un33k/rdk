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
var popper_js_1 = require("popper.js");
var classnames_1 = require("classnames");
var react_sizeme_1 = require("react-sizeme");
var bind = require("memoize-bind");
var css = require("./Position.module.scss");
var SizeMe = react_sizeme_1["default"]({
    monitorHeight: true,
    monitorWidth: true,
    refreshMode: 'debounce'
})(function (_a) {
    var children = _a.children;
    return react_1["default"].createElement(react_1.Fragment, null, children);
});
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mouse = { pageX: 0, pageY: 0 };
        _this.onMouseMove = function (_a) {
            var pageX = _a.pageX, pageY = _a.pageY;
            _this.mouse = { pageX: pageX, pageY: pageY };
            if (_this.popperInstance) {
                _this.popperInstance.scheduleUpdate();
            }
        };
        return _this;
    }
    Position.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.reference !== prevProps.reference && this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = undefined;
            this.createPopper();
        }
    };
    Position.prototype.componentWillUnmount = function () {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        if (this.props.followCursor) {
            window.removeEventListener('mousemove', this.onMouseMove);
        }
    };
    Position.prototype.getReference = function () {
        var _this = this;
        var _a = this.props, reference = _a.reference, followCursor = _a.followCursor;
        var referenceElement = reference;
        if (followCursor) {
            return {
                getBoundingClientRect: function () { return ({
                    top: _this.mouse.pageY,
                    right: _this.mouse.pageX,
                    bottom: _this.mouse.pageY,
                    left: _this.mouse.pageX,
                    width: 0,
                    height: 0
                }); },
                clientWidth: 0,
                clientHeight: 0
            };
        }
        else if (referenceElement && !referenceElement.getBoundingClientRect) {
            var _b = reference, top_1 = _b.top, left_1 = _b.left, width_1 = _b.width, height_1 = _b.height;
            return {
                getBoundingClientRect: function () { return ({
                    top: top_1,
                    left: left_1,
                    width: width_1,
                    bottom: top_1 - height_1,
                    right: left_1 - width_1,
                    height: height_1
                }); },
                clientWidth: width_1,
                clientHeight: height_1
            };
        }
        return referenceElement;
    };
    Position.prototype.createPopper = function (element) {
        var _this = this;
        if (element === void 0) { element = this.element; }
        this.element = element;
        if (!this.popperInstance && element) {
            var _a = this.props, placement = _a.placement, modifiers = _a.modifiers, followCursor_1 = _a.followCursor;
            var reference = this.getReference();
            if (reference) {
                window.removeEventListener('mousemove', this.onMouseMove);
                this.popperInstance = new popper_js_1["default"](reference, this.element, {
                    placement: placement,
                    modifiers: modifiers,
                    onCreate: function () {
                        if (followCursor_1) {
                            window.addEventListener('mousemove', _this.onMouseMove);
                        }
                    }
                });
            }
        }
    };
    Position.prototype.onSize = function () {
        if (this.popperInstance) {
            this.popperInstance.scheduleUpdate();
        }
    };
    Position.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children;
        return (react_1["default"].createElement("span", { ref: function (elm) { return _this.createPopper(elm); }, className: classnames_1["default"](className, css.container), style: style },
            react_1["default"].createElement(SizeMe, { onSize: bind(this.onSize, this) }, children)));
    };
    Position.defaultProps = {
        placement: 'top',
        modifiers: {}
    };
    return Position;
}(react_1.Component));
exports.Position = Position;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}