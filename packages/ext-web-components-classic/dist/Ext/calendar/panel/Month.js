import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Weeks from '../../../Ext/calendar/panel/Weeks.js';

var Ext_calendar_panel_Month = /*#__PURE__*/function (_Ext_calendar_panel_W) {
  _inheritsLoose(Ext_calendar_panel_Month, _Ext_calendar_panel_W);

  var _super = _createSuper(Ext_calendar_panel_Month);

  Ext_calendar_panel_Month.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'addForm', 'addOnSelect', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'allowSelection', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'animCollapse', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bubbleEvents', 'buttonAlign', 'buttons', 'childEls', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsedCls', 'collapseDirection', 'collapseFirst', 'collapseMode', 'collapseToolText', 'collapsible', 'columnWidth', 'compact', 'compactOptions', 'componentCls', 'componentLayout', 'constrain', 'constrainHeader', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'controlStoreRange', 'data', 'dayFormat', 'dayHeader', 'dayHeaderFormat', 'defaultAlign', 'defaultButton', 'defaultButtonTarget', 'defaultDockWeights', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'dockedItems', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'eventRelayers', 'expandToolText', 'fbar', 'firstDayOfWeek', 'fixed', 'flex', 'floatable', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'frameHeader', 'gestureNavigation', 'glyph', 'header', 'headerOverCls', 'headerPosition', 'height', 'hidden', 'hideCollapseTool', 'hideMode', 'highlightToday', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'maintainTitlePosition', 'manageHeight', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'overflowText', 'overlapHeader', 'padding', 'placeholder', 'placeholderCollapseHideMode', 'plugins', 'publishes', 'rbar', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showOverflow', 'shrinkWrap', 'shrinkWrapDock', 'simpleDrag', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'timezoneOffset', 'title', 'titleAlign', 'titleCollapse', 'titlePosition', 'titleRotation', 'toFrontOnShow', 'tools', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'view', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'weight', 'width', 'xtype'];
  };

  Ext_calendar_panel_Month.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'add',
      parameters: 'sender,component,index'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayout',
      parameters: 'sender,layout'
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
      name: 'beforeadd',
      parameters: 'sender,component,index'
    }, {
      name: 'beforeclose',
      parameters: 'panel'
    }, {
      name: 'beforecollapse',
      parameters: 'p,direction,animate'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforeeventadd',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'sender,context'
    }, {
      name: 'beforeexpand',
      parameters: 'p,animate'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeremove',
      parameters: 'sender,component'
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
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'close',
      parameters: 'panel'
    }, {
      name: 'collapse',
      parameters: 'p'
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
      name: 'dockedadd',
      parameters: 'sender,component,index'
    }, {
      name: 'dockedremove',
      parameters: 'sender,component'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'eventadd',
      parameters: 'sender,context'
    }, {
      name: 'eventdrop',
      parameters: 'sender,context'
    }, {
      name: 'eventedit',
      parameters: 'sender,context'
    }, {
      name: 'eventtap',
      parameters: 'sender,context'
    }, {
      name: 'expand',
      parameters: 'p'
    }, {
      name: 'float',
      parameters: ''
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
      name: 'glyphchange',
      parameters: 'sender,newGlyph,oldGlyph'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'iconalignchange',
      parameters: 'sender,newIconAlign,oldIconAlign'
    }, {
      name: 'iconchange',
      parameters: 'sender,newIcon,oldIcon'
    }, {
      name: 'iconclschange',
      parameters: 'sender,newIconCls,oldIconCls'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'remove',
      parameters: 'sender,component'
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
      name: 'titlealignchange',
      parameters: 'sender,newTitleAlign,oldTitleAlign'
    }, {
      name: 'titlechange',
      parameters: 'sender,newTitle,oldTitle'
    }, {
      name: 'titlepositionchange',
      parameters: 'sender,newTitlePosition,oldTitlePosition'
    }, {
      name: 'titlerotationchange',
      parameters: 'sender,newTitleRotation,oldTitleRotation'
    }, {
      name: 'unfloat',
      parameters: ''
    }, {
      name: 'validateeventadd',
      parameters: 'sender,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'sender,context'
    }, {
      name: 'validateeventedit',
      parameters: 'sender,context'
    }, {
      name: 'valuechange',
      parameters: 'sender,context'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_panel_Month.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_panel_Month.PROPERTIES());
    return Ext_calendar_panel_Weeks.getProperties(properties);
  };

  Ext_calendar_panel_Month.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_panel_Month.EVENTS());
    return Ext_calendar_panel_Weeks.getEvents(events);
  };

  _createClass(Ext_calendar_panel_Month, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_W.observedAttributes;
      Ext_calendar_panel_Month.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_panel_Month.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Month(properties, events) {
    return _Ext_calendar_panel_W.call(this, properties.concat(Ext_calendar_panel_Month.PROPERTIES()), events.concat(Ext_calendar_panel_Month.EVENTS())) || this;
  }

  var _proto = Ext_calendar_panel_Month.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_W.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_W.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Month;
}(Ext_calendar_panel_Weeks);

export { Ext_calendar_panel_Month as default };