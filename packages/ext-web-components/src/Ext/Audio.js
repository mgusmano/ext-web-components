import Ext_Media from '../Ext/Media';

export default class Ext_Audio extends Ext_Media {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoPause',
'autoResume',
'axisLock',
'bind',
'border',
'bottom',
'centered',
'cls',
'constrainAlign',
'contentEl',
'controller',
'controls',
'data',
'defaultListenerScope',
'disabled',
'displayed',
'docked',
'draggable',
'flex',
'floated',
'focusCls',
'fullscreen',
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
'loop',
'margin',
'maxHeight',
'maxWidth',
'media',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'muted',
'name',
'nameable',
'padding',
'plugins',
'preload',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'url',
'userCls',
'userSelectable',
'viewModel',
'volume',
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
{name:'beforetofront',parameters:'audio'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'audio,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'ended',parameters:'audio,time'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'audio,event'},
{name:'focusenter',parameters:'audio,event'},
{name:'focusleave',parameters:'audio,event'},
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
{name:'mutedchange',parameters:'audio,muted'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'pause',parameters:'audio,time'},
{name:'play',parameters:'audio'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'stop',parameters:'audio'},
{name:'timeupdate',parameters:'audio,time'},
{name:'tofront',parameters:'audio'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'volumechange',parameters:'audio,volume'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_Audio.PROPERTIES());
        return Ext_Media.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Audio.EVENTS());
        return Ext_Media.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'audio'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_Audio.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_Audio.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_Audio.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Audio.PROPERTIES()),
            events.concat(Ext_Audio.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}