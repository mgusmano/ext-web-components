import Ext_d3_hierarchy_Hierarchy from '../../../../Ext/d3/hierarchy/Hierarchy.js';

export default class Ext_d3_hierarchy_tree_Tree extends Ext_d3_hierarchy_Hierarchy {
    static PROPERTIES() {return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'clipScene',
    'cls',
    'colorAxis',
    'componentCls',
    'controller',
    'defaultListenerScope',
    'depth',
    'disabled',
    'expandEventName',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'hierarchyCls',
    'instanceCls',
    'interactions',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'linkKey',
    'listeners',
    'margin',
    'name',
    'nameable',
    'nodeChildren',
    'nodeClass',
    'nodeKey',
    'nodeRadius',
    'nodeSize',
    'nodeText',
    'nodeTransform',
    'nodeValue',
    'noParentValue',
    'noSizeLayout',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'renderLinks',
    'renderTo',
    'ripple',
    'rootVisible',
    'selectEventName',
    'selection',
    'session',
    'shareableName',
    'size',
    'sorter',
    'store',
    'style',
    'tooltip',
    'touchAction',
    'transitions',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    ]};
    static EVENTS() {return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'layout', parameters:'component'},
    {name:'sceneresize', parameters:'component,scene,size'},
    {name:'scenesetup', parameters:'component,scene'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_d3_hierarchy_tree_Tree.PROPERTIES());
        return Ext_d3_hierarchy_Hierarchy.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_d3_hierarchy_tree_Tree.EVENTS());
        return Ext_d3_hierarchy_Hierarchy.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_d3_hierarchy_tree_Tree.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_d3_hierarchy_tree_Tree.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_d3_hierarchy_tree_Tree.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_d3_hierarchy_tree_Tree.PROPERTIES()),
            events.concat(Ext_d3_hierarchy_tree_Tree.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}