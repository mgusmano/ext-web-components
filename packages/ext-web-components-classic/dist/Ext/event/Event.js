import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_event_Event =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_event_Event, _Ext_Base);

  Ext_event_Event.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_Event.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_Event.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_Event.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_event_Event.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_Event.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_event_Event, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_event_Event.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_Event.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_Event(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_event_Event.PROPERTIES()), events.concat(Ext_event_Event.EVENTS())) || this;
  }

  var _proto = Ext_event_Event.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_Event;
}(Ext_Base);

export { Ext_event_Event as default };