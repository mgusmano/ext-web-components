import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_request_Base from '../../../Ext/data/request/Base.js';

var Ext_data_request_Form = /*#__PURE__*/function (_Ext_data_request_Bas) {
  _inheritsLoose(Ext_data_request_Form, _Ext_data_request_Bas);

  var _super = _createSuper(Ext_data_request_Form);

  Ext_data_request_Form.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_request_Form.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_request_Form.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_request_Form.PROPERTIES());
    return Ext_data_request_Base.getProperties(properties);
  };

  Ext_data_request_Form.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_request_Form.EVENTS());
    return Ext_data_request_Base.getEvents(events);
  };

  _createClass(Ext_data_request_Form, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_request_Bas.observedAttributes;
      Ext_data_request_Form.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_request_Form.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_request_Form(properties, events) {
    return _Ext_data_request_Bas.call(this, properties.concat(Ext_data_request_Form.PROPERTIES()), events.concat(Ext_data_request_Form.EVENTS())) || this;
  }

  var _proto = Ext_data_request_Form.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_request_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_request_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_request_Form;
}(Ext_data_request_Base);

export { Ext_data_request_Form as default };