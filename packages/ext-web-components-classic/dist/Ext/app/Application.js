import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_app_Controller from '../../Ext/app/Controller.js';

var Ext_app_Application = /*#__PURE__*/function (_Ext_app_Controller) {
  _inheritsLoose(Ext_app_Application, _Ext_app_Controller);

  var _super = _createSuper(Ext_app_Application);

  Ext_app_Application.PROPERTIES = function PROPERTIES() {
    return ['appFolder', 'application', 'appProperty', 'control', 'controllers', 'currentProfile', 'defaultToken', 'extend', 'glyphFontFamily', 'id', 'listen', 'listeners', 'mainView', 'models', 'moduleClassName', 'name', 'namespaces', 'paths', 'profiles', 'quickTips', 'refs', 'router', 'routes', 'scope', 'stores', 'views'];
  };

  Ext_app_Application.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_Application.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_Application.PROPERTIES());
    return Ext_app_Controller.getProperties(properties);
  };

  Ext_app_Application.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_Application.EVENTS());
    return Ext_app_Controller.getEvents(events);
  };

  _createClass(Ext_app_Application, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_Controller.observedAttributes;
      Ext_app_Application.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_Application.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_Application(properties, events) {
    return _Ext_app_Controller.call(this, properties.concat(Ext_app_Application.PROPERTIES()), events.concat(Ext_app_Application.EVENTS())) || this;
  }

  var _proto = Ext_app_Application.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_Controller.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_Controller.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_Application;
}(Ext_app_Controller);

export { Ext_app_Application as default };