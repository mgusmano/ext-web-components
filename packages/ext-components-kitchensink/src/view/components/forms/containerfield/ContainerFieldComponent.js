import './ContainerFieldComponent.css';
import './ContainerFieldComponent.html';

export default class ContainerFieldComponent {

  constructor () {
    console.log('in ContainerFieldComponent constructor');
  }

  containerfieldcomponentready(event) {
    const isPhone = Ext.os.is.Phone;
    this.cmp = event.detail.cmp;

    const layout = isPhone ? "vbox" : "hbox";
    this.cmp.setLayout(layout);

  }
}
