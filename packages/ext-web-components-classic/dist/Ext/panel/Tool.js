import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component from '../../Ext/Component.js';

var Ext_panel_Tool =
/*#__PURE__*/
function (_Ext_Component) {
  _inheritsLoose(Ext_panel_Tool, _Ext_Component);

  Ext_panel_Tool.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'cacheHeight', 'cacheWidth', 'callback', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'disabled', 'disabledCls', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'glyph', 'height', 'hidden', 'hideMode', 'html', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'padding', 'plugins', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scope', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'stopEvent', 'style', 'tabIndex', 'toFrontOnShow', 'toolOverCls', 'toolOwner', 'toolPressedCls', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'type', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_panel_Tool.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'click',
      parameters: 'sender,e,owner'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
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
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_panel_Tool.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_Tool.PROPERTIES());
    return Ext_Component.getProperties(properties);
  };

  Ext_panel_Tool.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_Tool.EVENTS());
    return Ext_Component.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'tool'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_panel_Tool, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component.observedAttributes; //for (var property in Ext_panel_Tool.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_panel_Tool.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_Tool.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Tool(properties, events) {
    return _Ext_Component.call(this, properties.concat(Ext_panel_Tool.PROPERTIES()), events.concat(Ext_panel_Tool.EVENTS())) || this;
  }

  var _proto = Ext_panel_Tool.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Tool;
}(Ext_Component);

export { Ext_panel_Tool as default };