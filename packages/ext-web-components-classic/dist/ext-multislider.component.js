import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_MultiSlider from './Ext/slider/MultiSlider.js';
import ElementParser from './common/ElementParser.js';

var EWCMultislider = /*#__PURE__*/function (_Ext_slider_MultiSlid) {
  _inheritsLoose(EWCMultislider, _Ext_slider_MultiSlid);

  var _super = _createSuper(EWCMultislider);

  function EWCMultislider() {
    var _this;

    _this = _Ext_slider_MultiSlid.call(this, [], []) || this;
    _this.xtype = 'multislider';
    return _this;
  }

  return EWCMultislider;
}(Ext_slider_MultiSlider);

export { EWCMultislider as default };

try {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', ElementParser.withParsedCallback(EWCMultislider));
  }
} catch (e) {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', EWCMultislider);
  }
}