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
var ClickOutsideListener = /** @class */ (function (_super) {
    __extends(ClickOutsideListener, _super);
    function ClickOutsideListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node = null;
        _this.onDocumentClick = function (event) {
            if (event.which !== 3) {
                var contentContains = _this.node && _this.node.contains(event.target);
                if (!contentContains && _this.props.onClickOutside) {
                    _this.props.onClickOutside(event);
                }
            }
        };
        _this.onDocumentKeydown = function (event) {
            if (event.keyCode === 27 && _this.props.onEscape) {
                _this.props.onEscape(event);
            }
        };
        return _this;
    }
    ClickOutsideListener.prototype.componentDidMount = function () {
        this.node = react_dom_1["default"].findDOMNode(this);
        if (this.props.onClickOutside) {
            document.addEventListener('mousedown', this.onDocumentClick);
        }
        if (this.props.onEscape) {
            document.addEventListener('keydown', this.onDocumentKeydown);
        }
    };
    ClickOutsideListener.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onDocumentClick);
        document.removeEventListener('keydown', this.onDocumentKeydown);
    };
    ClickOutsideListener.prototype.render = function () {
        return this.props.children;
    };
    return ClickOutsideListener;
}(react_1["default"].Component));
exports.ClickOutsideListener = ClickOutsideListener;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,+BAA0B;AAC1B,uCAAiC;AAQjC;IAA0C,wCAEzC;IAFD;QAAA,qEA0CC;QAvCC,UAAI,GAAmB,IAAI,CAAC;QAmB5B,qBAAe,GAAG,UAAC,KAAiB;YAClC,IAAI,KAAK,CAAC,KAAK,KAAK,CAAC,EAAE;gBACrB,IAAM,eAAe,GACnB,KAAI,CAAC,IAAI,IAAI,KAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAqB,CAAC,CAAC;gBAE/D,IAAI,CAAC,eAAe,IAAI,KAAI,CAAC,KAAK,CAAC,cAAc,EAAE;oBACjD,KAAI,CAAC,KAAK,CAAC,cAAc,CAAC,KAAK,CAAC,CAAC;iBAClC;aACF;QACH,CAAC,CAAC;QAEF,uBAAiB,GAAG,UAAC,KAAoB;YACvC,IAAI,KAAK,CAAC,OAAO,KAAK,EAAE,IAAI,KAAI,CAAC,KAAK,CAAC,QAAQ,EAAE;gBAC/C,KAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;aAC5B;QACH,CAAC,CAAC;;IAKJ,CAAC;IArCC,gDAAiB,GAAjB;QACE,IAAI,CAAC,IAAI,GAAG,sBAAQ,CAAC,WAAW,CAAC,IAAI,CAAY,CAAC;QAElD,IAAI,IAAI,CAAC,KAAK,CAAC,cAAc,EAAE;YAC7B,QAAQ,CAAC,gBAAgB,CAAC,WAAW,EAAE,IAAI,CAAC,eAAe,CAAC,CAAC;SAC9D;QAED,IAAI,IAAI,CAAC,KAAK,CAAC,QAAQ,EAAE;YACvB,QAAQ,CAAC,gBAAgB,CAAC,SAAS,EAAE,IAAI,CAAC,iBAAiB,CAAC,CAAC;SAC9D;IACH,CAAC;IAED,mDAAoB,GAApB;QACE,QAAQ,CAAC,mBAAmB,CAAC,WAAW,EAAE,IAAI,CAAC,eAAe,CAAC,CAAC;QAChE,QAAQ,CAAC,mBAAmB,CAAC,SAAS,EAAE,IAAI,CAAC,iBAAiB,CAAC,CAAC;IAClE,CAAC;IAmBD,qCAAM,GAAN;QACE,OAAO,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC;IAC7B,CAAC;IACH,2BAAC;AAAD,CAAC,AA1CD,CAA0C,kBAAK,CAAC,SAAS,GA0CxD;AA1CY,oDAAoB"}