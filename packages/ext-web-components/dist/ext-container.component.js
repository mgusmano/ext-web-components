import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_container_Container from '@sencha/ext-runtime-base/dist/./Ext/container/Container.js';
import Ext_container_Container from './Ext/container/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCContainer =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(EWCContainer, _Ext_container_Contai);

  function EWCContainer() {
    var _this;

    _this = _Ext_container_Contai.call(this, [], []) || this;
    _this.xtype = 'container';
    return _this;
  }

  return EWCContainer;
}(Ext_container_Container);

export { EWCContainer as default };
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(EWCContainer));