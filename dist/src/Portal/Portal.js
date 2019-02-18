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
var react_dom_1 = require("react-dom");
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultNode = null;
        return _this;
    }
    Portal.prototype.componentWillUnmount = function () {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
            this.props.onUnmount();
        }
        this.defaultNode = null;
    };
    Portal.prototype.render = function () {
        if (!this.defaultNode) {
            this.defaultNode = document.createElement('div');
            document.body.appendChild(this.defaultNode);
            this.props.onMount();
        }
        return react_dom_1["default"].createPortal(this.props.children, this.defaultNode);
    };
    Portal.defaultProps = {
        onMount: function () { return undefined; },
        onUnmount: function () { return undefined; }
    };
    return Portal;
}(react_1["default"].Component));
exports.Portal = Portal;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,+BAA0B;AAC1B,uCAAiC;AAQjC;IAA4B,0BAAgC;IAA5D;QAAA,qEA0BC;QApBC,iBAAW,GAAuB,IAAI,CAAC;;IAoBzC,CAAC;IAlBC,qCAAoB,GAApB;QACE,IAAI,IAAI,CAAC,WAAW,EAAE;YACpB,QAAQ,CAAC,IAAI,CAAC,WAAW,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;YAC5C,IAAI,CAAC,KAAK,CAAC,SAAS,EAAE,CAAC;SACxB;QAED,IAAI,CAAC,WAAW,GAAG,IAAI,CAAC;IAC1B,CAAC;IAED,uBAAM,GAAN;QACE,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE;YACrB,IAAI,CAAC,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;YACjD,QAAQ,CAAC,IAAI,CAAC,WAAW,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;YAC5C,IAAI,CAAC,KAAK,CAAC,OAAO,EAAE,CAAC;SACtB;QAED,OAAO,sBAAQ,CAAC,YAAY,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,EAAE,IAAI,CAAC,WAAW,CAAC,CAAC;IACtE,CAAC;IAxBM,mBAAY,GAAG;QACpB,OAAO,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;QACxB,SAAS,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;KAC3B,CAAC;IAsBJ,aAAC;CAAA,AA1BD,CAA4B,kBAAK,CAAC,SAAS,GA0B1C;AA1BY,wBAAM"}