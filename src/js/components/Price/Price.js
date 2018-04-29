import './price.scss';
import Component from '../../framework/Component';

class Price extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
  }

  render() {
    return 'Price';
  }
}

export default Price;