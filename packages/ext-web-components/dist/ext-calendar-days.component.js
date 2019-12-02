import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_panel_Days from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Days.js';
import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_days =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(EWCCalendar_days, _Ext_calendar_panel_D);

  function EWCCalendar_days() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-days';
    return _this;
  }

  return EWCCalendar_days;
}(Ext_calendar_panel_Days);

export { EWCCalendar_days as default };
window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(EWCCalendar_days));