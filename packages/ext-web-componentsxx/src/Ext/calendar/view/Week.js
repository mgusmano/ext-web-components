import Ext_calendar_view_Days from '../../../Ext/calendar/view/Days';

export default class Ext_calendar_view_Week extends Ext_calendar_view_Days {

    static PROPERTIES() { return [
'addForm',
'alignSelf',
'allowSelection',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'axisLock',
'bind',
'border',
'bottom',
'centered',
'cls',
'compact',
'compactOptions',
'constrainAlign',
'contentEl',
'controller',
'controlStoreRange',
'data',
'defaultListenerScope',
'disabled',
'displayed',
'displayOverlap',
'docked',
'draggable',
'droppable',
'editForm',
'endTime',
'eventDefaults',
'firstDayOfWeek',
'flex',
'floated',
'focusCls',
'fullscreen',
'gestureNavigation',
'header',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'left',
'listeners',
'margin',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'padding',
'plugins',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'resizeEvents',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'showNowMarker',
'startTime',
'stateful',
'statefulDefaults',
'stateId',
'store',
'style',
'tabIndex',
'timeFormat',
'timeRenderer',
'timezoneOffset',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'value',
'viewModel',
'visibleDays',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'calendar-weekview,context'},
{name:'beforeeventdragstart',parameters:'calendar-weekview,context'},
{name:'beforeeventedit',parameters:'calendar-weekview,context'},
{name:'beforeeventresizestart',parameters:'calendar-weekview,context'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar-weekview'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-weekview,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'calendar-weekview,context'},
{name:'eventdrop',parameters:'calendar-weekview,context'},
{name:'eventedit',parameters:'calendar-weekview,context'},
{name:'eventresize',parameters:'calendar-weekview,context'},
{name:'eventtap',parameters:'calendar-weekview,context'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-weekview,event'},
{name:'focusenter',parameters:'calendar-weekview,event'},
{name:'focusleave',parameters:'calendar-weekview,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar-weekview'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'calendar-weekview,context'},
{name:'validateeventdrop',parameters:'calendar-weekview,context'},
{name:'validateeventedit',parameters:'calendar-weekview,context'},
{name:'validateeventresize',parameters:'calendar-weekview,context'},
{name:'valuechange',parameters:'calendar-weekview,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_view_Week.PROPERTIES());
        return Ext_calendar_view_Days.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_view_Week.EVENTS());
        return Ext_calendar_view_Days.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'calendar-weekview'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_calendar_view_Week.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_calendar_view_Week.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_calendar_view_Week.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_calendar_view_Week.PROPERTIES()),
            events.concat(Ext_calendar_view_Week.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}