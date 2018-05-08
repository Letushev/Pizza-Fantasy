import './list.scss';
import Component from '../../framework/Component';
import WS_SERVICE from '../../api/ws-service';

class List extends Component {
  constructor() {
    super();

    this.state = {
      pizzas: []
    };

    this.host = document.createElement('main');
    this.host.className = 'list-container';
    WS_SERVICE.establish();
  }

  render() {

  }
}

export default List;