import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_panel_Header from '@sencha/ext-runtime-base/dist/./Ext/panel/Header.js';
import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './ElementParser.js';

var EWCHeader =
/*#__PURE__*/
function (_Ext_panel_Header) {
  _inheritsLoose(EWCHeader, _Ext_panel_Header);

  function EWCHeader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'header';
    return _this;
  }

  return EWCHeader;
}(Ext_panel_Header);

export { EWCHeader as default };
window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));