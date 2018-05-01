import './price.scss';
import Component from '../../framework/Component';

class Price extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'price-container';
  }

  render() {
    const { size, ingredients } = this.props;
    const nameElement = document.createElement('span');
    const priceElement = document.createElement('span');
    let price = 0;
    
    nameElement.className = 'price-label';
    priceElement.className = 'price';
    nameElement.textContent = 'Total price:';

    if (!!size) {
      price += size / 5;
    }

    if (!!ingredients) {
      ingredients.forEach(ingr => {
        price += ingr.price;
      });
    }

    priceElement.textContent = `${ price.toFixed(2) } $`;

    return [nameElement, priceElement];
  }
}

export default Price;