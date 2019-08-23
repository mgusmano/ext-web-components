import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Checkbox_Component from '../../Ext/field/Checkbox';

var Ext_field_Radio_Component =
/*#__PURE__*/
function (_Ext_field_Checkbox_C) {
  _inheritsLoose(Ext_field_Radio_Component, _Ext_field_Checkbox_C);

  //events
  //configs
  Ext_field_Radio_Component.XTYPE = function XTYPE() {
    return 'radio';
  };

  Ext_field_Radio_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_Radio_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Radio_Component.METHODS = function METHODS() {
    return [{
      name: 'getGroupValue',
      "function": function _function() {
        return this.ext.getGroupValue();
      }
    }, {
      name: 'getSameGroupFields',
      "function": function _function() {
        return this.ext.getSameGroupFields();
      }
    }, {
      name: 'refreshGroupValues',
      "function": function _function(trigger) {
        return this.ext.refreshGroupValues(trigger);
      }
    }, {
      name: 'setGroupValue',
      "function": function _function(value) {
        return this.ext.setGroupValue(value);
      }
    }];
  };

  _createClass(Ext_field_Radio_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Checkbox_C.observedAttributes;

      for (var property in Ext_field_Radio_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Radio_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Radio_Component() {
    var _this;

    _this = _Ext_field_Checkbox_C.call(this, Ext_field_Radio_Component.METHODS(), Ext_field_Radio_Component.XTYPE(), Ext_field_Radio_Component.PROPERTIESOBJECT(), Ext_field_Radio_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_Radio_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Radio_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_Radio_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_Radio_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Radio_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Checkbox_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Checkbox_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Radio_Component;
}(Ext_field_Checkbox_Component);

export { Ext_field_Radio_Component as default };