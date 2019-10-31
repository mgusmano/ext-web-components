import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Time from './Ext/panel/Time';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTimepanelComponent =
/*#__PURE__*/
function (_Ext_panel_Time) {
  _inheritsLoose(ExtTimepanelComponent, _Ext_panel_Time);

  function ExtTimepanelComponent() {
    var _this;

    _this = _Ext_panel_Time.call(this, [], []) || this;
    _this.xtype = 'timepanel';
    return _this;
  }

  return ExtTimepanelComponent;
}(Ext_panel_Time); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timepanel', ExtTimepanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(ExtTimepanelComponent));