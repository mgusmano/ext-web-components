import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Text_Component from '../../Ext/field/Text';

var Ext_form_Search_Component =
/*#__PURE__*/
function (_Ext_field_Text_Compo) {
  _inheritsLoose(Ext_form_Search_Component, _Ext_field_Text_Compo);

  //events
  //configs
  Ext_form_Search_Component.XTYPE = function XTYPE() {
    return 'searchfield';
  };

  Ext_form_Search_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_form_Search_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_form_Search_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_form_Search_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Text_Compo.observedAttributes;

      for (var property in Ext_form_Search_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Search_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Search_Component() {
    var _this;

    _this = _Ext_field_Text_Compo.call(this, Ext_form_Search_Component.METHODS(), Ext_form_Search_Component.XTYPE(), Ext_form_Search_Component.PROPERTIESOBJECT(), Ext_form_Search_Component.EVENTS()) || this;
    _this.XTYPE = Ext_form_Search_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_form_Search_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_form_Search_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_form_Search_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_form_Search_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Text_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Text_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Search_Component;
}(Ext_field_Text_Component);

export { Ext_form_Search_Component as default };