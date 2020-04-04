import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_ActionColumn from './Ext/grid/ActionColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCActioncolumn = /*#__PURE__*/function (_Ext_grid_ActionColum) {
  _inheritsLoose(EWCActioncolumn, _Ext_grid_ActionColum);

  var _super = _createSuper(EWCActioncolumn);

  function EWCActioncolumn() {
    var _this;

    _this = _Ext_grid_ActionColum.call(this, [], []) || this;
    _this.xtype = 'actioncolumn';
    return _this;
  }

  return EWCActioncolumn;
}(Ext_grid_ActionColumn);

export { EWCActioncolumn as default };

try {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', ElementParser.withParsedCallback(EWCActioncolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', EWCActioncolumn);
  }
}