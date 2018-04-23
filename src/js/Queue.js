import Component from './framework/Component';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';

class Queue extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'queue-container';

    this._header = new Header();
    this._list = new List();
    this._footer = new Footer();
  }
  
  render() {
    return [
      this._header.update(),
      this._list.update(),
      this._footer.update()
    ]
  }
}

export default Queue;