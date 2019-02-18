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
var Portal_1 = require("../Portal");
var portals = [];
var START_INDEX = 990;
var OverlayPortal = /** @class */ (function (_super) {
    __extends(OverlayPortal, _super);
    function OverlayPortal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayPortal.prototype.componentWillMount = function () {
        portals.push(this);
    };
    OverlayPortal.prototype.componentWillUnmount = function () {
        portals.splice(portals.indexOf(this), 1);
    };
    OverlayPortal.prototype.getIndexes = function () {
        var portalIndex = portals.indexOf(this);
        var overlayIndex = START_INDEX + portalIndex * 2 + 1;
        var backdropIndex = START_INDEX + portals.length * 2 - 1;
        return {
            portalIndex: portalIndex,
            overlayIndex: overlayIndex,
            backdropIndex: backdropIndex
        };
    };
    OverlayPortal.prototype.render = function () {
        var _a = this.props, onMount = _a.onMount, onUnmount = _a.onUnmount;
        var render = this.props.children || this.props.render;
        var _b = this.getIndexes(), portalIndex = _b.portalIndex, backdropIndex = _b.backdropIndex, overlayIndex = _b.overlayIndex;
        return (react_1["default"].createElement(Portal_1.Portal, { onMount: onMount, onUnmount: onUnmount }, render({ overlayIndex: overlayIndex, portalIndex: portalIndex, backdropIndex: backdropIndex })));
    };
    OverlayPortal.defaultProps = {
        onMount: function () { return undefined; },
        onUnmount: function () { return undefined; },
        onOverlayClick: function () { return undefined; }
    };
    return OverlayPortal;
}(react_1["default"].Component));
exports.OverlayPortal = OverlayPortal;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,+BAA0B;AAC1B,oCAAmC;AAcnC,IAAM,OAAO,GAAoB,EAAE,CAAC;AACpC,IAAM,WAAW,GAAG,GAAG,CAAC;AAExB;IAAmC,iCAAmC;IAAtE;;IAsCA,CAAC;IA/BC,0CAAkB,GAAlB;QACE,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IACrB,CAAC;IAED,4CAAoB,GAApB;QACE,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,OAAO,CAAC,IAAI,CAAC,EAAE,CAAC,CAAC,CAAC;IAC3C,CAAC;IAED,kCAAU,GAAV;QACE,IAAM,WAAW,GAAG,OAAO,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC;QAC1C,IAAM,YAAY,GAAG,WAAW,GAAG,WAAW,GAAG,CAAC,GAAG,CAAC,CAAC;QACvD,IAAM,aAAa,GAAG,WAAW,GAAG,OAAO,CAAC,MAAM,GAAG,CAAC,GAAG,CAAC,CAAC;QAE3D,OAAO;YACL,WAAW,aAAA;YACX,YAAY,cAAA;YACZ,aAAa,eAAA;SACd,CAAC;IACJ,CAAC;IAED,8BAAM,GAAN;QACQ,IAAA,eAAmC,EAAjC,oBAAO,EAAE,wBAAS,CAAgB;QAC1C,IAAM,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,QAAQ,IAAI,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC;QAClD,IAAA,sBAAgE,EAA9D,4BAAW,EAAE,gCAAa,EAAE,8BAAY,CAAuB;QAEvE,OAAO,CACL,iCAAC,eAAM,IAAC,OAAO,EAAE,OAAO,EAAE,SAAS,EAAE,SAAS,IAC3C,MAAM,CAAC,EAAE,YAAY,cAAA,EAAE,WAAW,aAAA,EAAE,aAAa,eAAA,EAAE,CAAC,CAC9C,CACV,CAAC;IACJ,CAAC;IApCM,0BAAY,GAAuB;QACxC,OAAO,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;QACxB,SAAS,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;QAC1B,cAAc,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;KAChC,CAAC;IAiCJ,oBAAC;CAAA,AAtCD,CAAmC,kBAAK,CAAC,SAAS,GAsCjD;AAtCY,sCAAa"}