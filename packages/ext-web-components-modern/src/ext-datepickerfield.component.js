//import Ext_field_DatePicker from '@sencha/ext-runtime-base/dist/./Ext/field/DatePicker.js';
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatepickerfield extends Ext_field_DatePicker {
    constructor() {
        super ([], []);
        this.xtype = 'datepickerfield';
    }

}
window.customElements.define('ext-datepickerfield', HTMLParsedElement.withParsedCallback(EWCDatepickerfield));

