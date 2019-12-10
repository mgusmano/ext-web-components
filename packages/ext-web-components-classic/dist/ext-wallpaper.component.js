import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_desktop_Wallpaper from '@sencha/ext-runtime-base/dist/./Ext/ux/desktop/Wallpaper.js';
import Ext_ux_desktop_Wallpaper from './Ext/ux/desktop/Wallpaper.js';
import ElementParser from './ElementParser.js';

var EWCWallpaper =
/*#__PURE__*/
function (_Ext_ux_desktop_Wallp) {
  _inheritsLoose(EWCWallpaper, _Ext_ux_desktop_Wallp);

  function EWCWallpaper() {
    var _this;

    _this = _Ext_ux_desktop_Wallp.call(this, [], []) || this;
    _this.xtype = 'wallpaper';
    return _this;
  }

  return EWCWallpaper;
}(Ext_ux_desktop_Wallpaper);

export { EWCWallpaper as default };
window.customElements.define('ext-wallpaper', ElementParser.withParsedCallback(EWCWallpaper));