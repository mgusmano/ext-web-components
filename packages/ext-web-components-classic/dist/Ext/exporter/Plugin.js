import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

var Ext_exporter_Plugin = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_exporter_Plugin, _Ext_plugin_Abstract);

  var _super = _createSuper(Ext_exporter_Plugin);

  Ext_exporter_Plugin.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_exporter_Plugin.EVENTS = function EVENTS() {
    return [{
      name: 'beforedocumentsave',
      parameters: 'component,params'
    }, {
      name: 'dataready',
      parameters: 'component,params'
    }, {
      name: 'documentsave',
      parameters: 'component,params'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_Plugin.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_Plugin.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_exporter_Plugin.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_Plugin.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_exporter_Plugin, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_exporter_Plugin.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_Plugin.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_Plugin(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_exporter_Plugin.PROPERTIES()), events.concat(Ext_exporter_Plugin.EVENTS())) || this;
  }

  var _proto = Ext_exporter_Plugin.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_Plugin;
}(Ext_plugin_Abstract);

export { Ext_exporter_Plugin as default };