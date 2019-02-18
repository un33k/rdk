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
var classnames_1 = require("classnames");
var css = require("./Backdrop.module.scss");
var Backdrop = /** @class */ (function (_super) {
    __extends(Backdrop, _super);
    function Backdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backdrop.prototype.render = function () {
        var _a = this.props, visible = _a.visible, onClick = _a.onClick, zIndex = _a.zIndex, className = _a.className;
        return (react_1["default"].createElement(Transition_1["default"], { "in": visible, timeout: 100, mountOnEnter: true, unmountOnExit: true }, function (animationState) { return (react_1["default"].createElement("div", { className: classnames_1["default"](css.backdrop, animationState, className), onClick: onClick, style: { zIndex: zIndex } })); }));
    };
    Backdrop.defaultProps = {
        onClick: function () { return undefined; },
        zIndex: 998,
        visible: false,
        className: 'backdrop-0'
    };
    return Backdrop;
}(react_1.Component));
exports.Backdrop = Backdrop;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,+BAAyC;AACzC,gEAA2D;AAC3D,yCAAoC;AACpC,4CAA8C;AAS9C;IAA8B,4BAA4B;IAA1D;;IA4BA,CAAC;IApBC,yBAAM,GAAN;QACQ,IAAA,eAAoD,EAAlD,oBAAO,EAAE,oBAAO,EAAE,kBAAM,EAAE,wBAAS,CAAgB;QAE3D,OAAO,CACL,iCAAC,uBAAU,IACT,IAAE,EAAE,OAAO,EACX,OAAO,EAAE,GAAG,EACZ,YAAY,EAAE,IAAI,EAClB,aAAa,EAAE,IAAI,IAElB,UAAA,cAAc,IAAI,OAAA,CACjB,0CACE,SAAS,EAAE,uBAAU,CAAC,GAAG,CAAC,QAAQ,EAAE,cAAc,EAAE,SAAS,CAAC,EAC9D,OAAO,EAAE,OAAO,EAChB,KAAK,EAAE,EAAE,MAAM,QAAA,EAAE,GACjB,CACH,EANkB,CAMlB,CACU,CACd,CAAC;IACJ,CAAC;IA1BM,qBAAY,GAAkB;QACnC,OAAO,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;QACxB,MAAM,EAAE,GAAG;QACX,OAAO,EAAE,KAAK;QACd,SAAS,EAAE,YAAY;KACxB,CAAC;IAsBJ,eAAC;CAAA,AA5BD,CAA8B,iBAAS,GA4BtC;AA5BY,4BAAQ"}