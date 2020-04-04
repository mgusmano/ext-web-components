import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_desktop_TaskBar from './Ext/ux/desktop/TaskBar.js';
import ElementParser from './common/ElementParser.js';

var EWCTaskbar = /*#__PURE__*/function (_Ext_ux_desktop_TaskB) {
  _inheritsLoose(EWCTaskbar, _Ext_ux_desktop_TaskB);

  var _super = _createSuper(EWCTaskbar);

  function EWCTaskbar() {
    var _this;

    _this = _Ext_ux_desktop_TaskB.call(this, [], []) || this;
    _this.xtype = 'taskbar';
    return _this;
  }

  return EWCTaskbar;
}(Ext_ux_desktop_TaskBar);

export { EWCTaskbar as default };

try {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', ElementParser.withParsedCallback(EWCTaskbar));
  }
} catch (e) {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', EWCTaskbar);
  }
}