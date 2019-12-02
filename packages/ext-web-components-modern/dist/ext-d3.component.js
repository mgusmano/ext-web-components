import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_d3_svg_Svg from '@sencha/ext-runtime-base/dist/./Ext/d3/svg/Svg.js';
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3 =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(EWCD3, _Ext_d3_svg_Svg);

  function EWCD3() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3';
    return _this;
  }

  return EWCD3;
}(Ext_d3_svg_Svg);

export { EWCD3 as default };
window.customElements.define('ext-d3', HTMLParsedElement.withParsedCallback(EWCD3));