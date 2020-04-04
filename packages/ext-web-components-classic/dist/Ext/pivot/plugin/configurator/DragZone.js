import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dd_DragZone from '../../../../Ext/dd/DragZone.js';

var Ext_pivot_plugin_configurator_DragZone = /*#__PURE__*/function (_Ext_dd_DragZone) {
  _inheritsLoose(Ext_pivot_plugin_configurator_DragZone, _Ext_dd_DragZone);

  var _super = _createSuper(Ext_pivot_plugin_configurator_DragZone);

  Ext_pivot_plugin_configurator_DragZone.PROPERTIES = function PROPERTIES() {
    return ['animRepair', 'containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'repairHighlightColor', 'scrollEl'];
  };

  Ext_pivot_plugin_configurator_DragZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_configurator_DragZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_configurator_DragZone.PROPERTIES());
    return Ext_dd_DragZone.getProperties(properties);
  };

  Ext_pivot_plugin_configurator_DragZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_configurator_DragZone.EVENTS());
    return Ext_dd_DragZone.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_configurator_DragZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragZone.observedAttributes;
      Ext_pivot_plugin_configurator_DragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_configurator_DragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_DragZone(properties, events) {
    return _Ext_dd_DragZone.call(this, properties.concat(Ext_pivot_plugin_configurator_DragZone.PROPERTIES()), events.concat(Ext_pivot_plugin_configurator_DragZone.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_configurator_DragZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_DragZone;
}(Ext_dd_DragZone);

export { Ext_pivot_plugin_configurator_DragZone as default };