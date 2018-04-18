import './app.scss';
import Component from '../../framework/Component';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
import Queue from '../Queue/Queue';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      header: this._header.update(),
      main: this._queue.update(), 
      footer: this._footer.update()
    };
  
    this.host = document.createElement('div');
    this.host.className = 'app-container';
  
    this._header = new Header();
    this._queue = new Queue();
    this._order = new Order();
    this._footer = new Footer();
  }
  
  render() {
    const { header, main, footer } = this.state;
    return [header, main, footer];
  }
}

export default App;