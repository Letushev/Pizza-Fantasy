import './list.scss';
import Component from '../../framework/Component';

class List extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.className = 'list-container';
  }

  render() {

  }
}

export default List;