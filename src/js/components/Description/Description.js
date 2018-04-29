import './description.scss';
import Component from '../../framework/Component';

class Description extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
  }

  render() {
    return 'Description';
  }
}

export default Description;