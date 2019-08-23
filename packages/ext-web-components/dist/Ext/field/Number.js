import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Text_Component from '../../Ext/field/Text';

var Ext_field_Number_Component =
/*#__PURE__*/
function (_Ext_field_Text_Compo) {
  _inheritsLoose(Ext_field_Number_Component, _Ext_field_Text_Compo);

  //events
  //configs
  Ext_field_Number_Component.XTYPE = function XTYPE() {
    return 'numberfield';
  };

  Ext_field_Number_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "decimals": ["number"],
      "decimalSeparator": ["string"],
      "decimalsText": ["string"],
      "inputType": ["string"],
      "maxValue": ["number"],
      "maxValueText": ["string"],
      "minValue": ["number"],
      "minValueText": ["string"],
      "trim": ["boolean"]
    };
  };

  Ext_field_Number_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Number_Component.METHODS = function METHODS() {
    return [{
      name: 'syncDecimalValidator',
      "function": function _function() {
        return this.ext.syncDecimalValidator();
      }
    }];
  };

  _createClass(Ext_field_Number_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Text_Compo.observedAttributes;

      for (var property in Ext_field_Number_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Number_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Number_Component() {
    var _this;

    _this = _Ext_field_Text_Compo.call(this, Ext_field_Number_Component.METHODS(), Ext_field_Number_Component.XTYPE(), Ext_field_Number_Component.PROPERTIESOBJECT(), Ext_field_Number_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_Number_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Number_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_Number_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_Number_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Number_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Text_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Text_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Number_Component;
}(Ext_field_Text_Component);

export { Ext_field_Number_Component as default };