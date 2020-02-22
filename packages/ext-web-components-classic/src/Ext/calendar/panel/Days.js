import Ext_calendar_panel_Base from '../../../Ext/calendar/panel/Base.js';

export default class Ext_calendar_panel_Days extends Ext_calendar_panel_Base {
  static PROPERTIES() { return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'addForm',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'allowSelection',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnWidth',
    'compact',
    'compactOptions',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'controlStoreRange',
    'data',
    'dayHeader',
    'dayHeaderFormat',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'displayOverlap',
    'dock',
    'dockedItems',
    'draggable',
    'droppable',
    'editForm',
    'endTime',
    'eventDefaults',
    'eventRelayers',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'gestureNavigation',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'highlightToday',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plugins',
    'publishes',
    'rbar',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeEvents',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showNowMarker',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'startTime',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'timeFormat',
    'timezoneOffset',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'view',
    'viewModel',
    'visibleDays',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'add', parameters:'sender,component,index'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayout', parameters:'sender,layout'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeadd', parameters:'sender,component,index'},
    {name:'beforeclose', parameters:'panel'},
    {name:'beforecollapse', parameters:'p,direction,animate'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforeeventadd', parameters:'sender,context'},
    {name:'beforeeventdragstart', parameters:'sender,context'},
    {name:'beforeeventedit', parameters:'sender,context'},
    {name:'beforeeventresizestart', parameters:'sender,context'},
    {name:'beforeexpand', parameters:'p,animate'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'close', parameters:'panel'},
    {name:'collapse', parameters:'p'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'dockedadd', parameters:'sender,component,index'},
    {name:'dockedremove', parameters:'sender,component'},
    {name:'enable', parameters:'sender'},
    {name:'eventadd', parameters:'sender,context'},
    {name:'eventdrop', parameters:'sender,context'},
    {name:'eventedit', parameters:'sender,context'},
    {name:'eventresize', parameters:'sender,context'},
    {name:'eventtap', parameters:'sender,context'},
    {name:'expand', parameters:'p'},
    {name:'float', parameters:''},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'glyphchange', parameters:'sender,newGlyph,oldGlyph'},
    {name:'hide', parameters:'sender'},
    {name:'iconalignchange', parameters:'sender,newIconAlign,oldIconAlign'},
    {name:'iconchange', parameters:'sender,newIcon,oldIcon'},
    {name:'iconclschange', parameters:'sender,newIconCls,oldIconCls'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'titlealignchange', parameters:'sender,newTitleAlign,oldTitleAlign'},
    {name:'titlechange', parameters:'sender,newTitle,oldTitle'},
    {name:'titlepositionchange', parameters:'sender,newTitlePosition,oldTitlePosition'},
    {name:'titlerotationchange', parameters:'sender,newTitleRotation,oldTitleRotation'},
    {name:'unfloat', parameters:''},
    {name:'validateeventadd', parameters:'sender,context'},
    {name:'validateeventdrop', parameters:'sender,context'},
    {name:'validateeventedit', parameters:'sender,context'},
    {name:'validateeventresize', parameters:'sender,context'},
    {name:'valuechange', parameters:'sender,context'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_panel_Days.PROPERTIES());
    return Ext_calendar_panel_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_panel_Days.EVENTS());
    return Ext_calendar_panel_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_panel_Days.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_panel_Days.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_panel_Days.PROPERTIES()),
      events.concat(Ext_calendar_panel_Days.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
