import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

var Ext_sparkline_BarBase =
/*#__PURE__*/
function (_Ext_sparkline_Base) {
  _inheritsLoose(Ext_sparkline_BarBase, _Ext_sparkline_Base);

  Ext_sparkline_BarBase.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width'];
  };

  Ext_sparkline_BarBase.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_sparkline_BarBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_BarBase.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  };

  Ext_sparkline_BarBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_BarBase.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_BarBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base.observedAttributes;
      Ext_sparkline_BarBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_BarBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_BarBase(properties, events) {
    return _Ext_sparkline_Base.call(this, properties.concat(Ext_sparkline_BarBase.PROPERTIES()), events.concat(Ext_sparkline_BarBase.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_BarBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_BarBase;
}(Ext_sparkline_Base);

export { Ext_sparkline_BarBase as default };