import Component from './framework/Component';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Create from './components/Create/Create';

class Order extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'order-container';

    this._header = new Header();
    this._create = new Create();
    this._footer = new Footer();
  }
  
  render() {
    return [
      this._header.update({ active: 'order' }),
      this._create.update(),
      this._footer.update()
    ]
  }
}

export default Order;