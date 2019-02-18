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
var Transition_1 = require("react-transition-group/Transition");
var OverlayPortal_1 = require("./OverlayPortal");
var Backdrop_1 = require("./Backdrop");
var react_scrolllock_1 = require("react-scrolllock");
var bind = require("memoize-bind");
var OverlayContext_1 = require("./OverlayContext");
var GlobalOverlay = /** @class */ (function (_super) {
    __extends(GlobalOverlay, _super);
    function GlobalOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.onDocumentKeydown = function (event) {
            if (event.keyCode === 27) {
                _this.close();
            }
        };
        _this.state = {
            open: props.open
        };
        return _this;
    }
    GlobalOverlay.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, open = _a.open, onClose = _a.onClose;
        if (open !== prevProps.open && this.state.open !== open) {
            this.setState({ open: open });
            if (!open && onClose) {
                onClose();
            }
        }
    };
    GlobalOverlay.prototype.onBackdropClick = function () {
        if (this.props.closeOnBackdropClick) {
            this.close();
        }
    };
    GlobalOverlay.prototype.onPortalMount = function () {
        if (this.props.closeOnEscape) {
            document.addEventListener('keydown', this.onDocumentKeydown);
        }
    };
    GlobalOverlay.prototype.onPortalUnmount = function () {
        if (this.props.closeOnEscape) {
            document.removeEventListener('keydown', this.onDocumentKeydown);
        }
    };
    GlobalOverlay.prototype.close = function () {
        this.setState({ open: false });
        if (this.props.onClose) {
            this.props.onClose();
        }
    };
    GlobalOverlay.prototype.render = function () {
        var _this = this;
        var open = this.state.open;
        var _a = this.props, hasBackdrop = _a.hasBackdrop, children = _a.children, render = _a.render;
        var renderFn = children || render;
        return (react_1["default"].createElement(OverlayContext_1.OverlayContext.Provider, { value: {
                close: bind(this.close, this)
            } },
            react_1["default"].createElement(Transition_1["default"], { "in": open, timeout: 100, mountOnEnter: true, unmountOnExit: true }, function (animation) { return (react_1["default"].createElement(react_1.Fragment, null,
                react_1["default"].createElement(OverlayPortal_1.OverlayPortal, { onMount: bind(_this.onPortalMount, _this), onUnmount: bind(_this.onPortalUnmount, _this) }, function (_a) {
                    var overlayIndex = _a.overlayIndex, backdropIndex = _a.backdropIndex, portalIndex = _a.portalIndex;
                    return (react_1["default"].createElement(react_1.Fragment, null,
                        hasBackdrop && (react_1["default"].createElement(Backdrop_1.Backdrop, { zIndex: backdropIndex, visible: open, onClick: bind(_this.onBackdropClick, _this), className: "backdrop-" + portalIndex })),
                        renderFn({ overlayIndex: overlayIndex, animation: animation })));
                }),
                react_1["default"].createElement(react_scrolllock_1["default"], null))); })));
    };
    GlobalOverlay.defaultProps = {
        hasBackdrop: true,
        closeOnEscape: true,
        closeOnBackdropClick: true,
        onClose: function () { return undefined; }
    };
    return GlobalOverlay;
}(react_1.Component));
exports.GlobalOverlay = GlobalOverlay;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}