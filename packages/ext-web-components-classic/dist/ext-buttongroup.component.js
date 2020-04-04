import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCButtongroup = /*#__PURE__*/function (_Ext_ButtonGroup) {
  _inheritsLoose(EWCButtongroup, _Ext_ButtonGroup);

  var _super = _createSuper(EWCButtongroup);

  function EWCButtongroup() {
    var _this;

    _this = _Ext_ButtonGroup.call(this, [], []) || this;
    _this.xtype = 'buttongroup';
    return _this;
  }

  return EWCButtongroup;
}(Ext_ButtonGroup);

export { EWCButtongroup as default };

try {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));
  }
} catch (e) {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', EWCButtongroup);
  }
}