import './create.scss';
import Component from '../../framework/Component';
import Ingredients from '../Ingredients/Ingredients';
import Canvas from '../Canvas/Canvas';
import Description from '../Description/Description';
import Price from '../Price/Price';
import PIZZA_SERVICE from '../../api/pizza-service';
import EVENT_EMITTER from '../../framework/EventEmitter';
import API_SERVICE from '../../api/api-service';
import { canvasToBlob } from '../../utils/helpers';
import AUTH_SERVICE from '../../api/auth-service';

class Create extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.className = 'create-container';

    this._ingredients = new Ingredients();
    this._canvas = new Canvas();
    this._description = new Description();
    this._price = new Price();

    EVENT_EMITTER.subscribe('order-submit', this.handleOrderSubmit.bind(this));
  }

  beforeUpdate() {
    PIZZA_SERVICE.preloadPizzaData()
      .then(() => {
        const { ingredients, tags, crust_image } = PIZZA_SERVICE;
        this.host.append(
          this._description.update({ tags }),
          this._canvas.update({ crust_image }),
          this._ingredients.update({ ingredients })
        );
      });
  }

  handleOrderSubmit(description) {
    const ingredientsForm = document.querySelector('.ingredients-form');
    const canvas = document.querySelector('canvas');
    const ingredients = new FormData(ingredientsForm).getAll('ingredient').map(Number);
    description.append('ingredients', JSON.stringify(ingredients));

    canvasToBlob(canvas)
      .then(blob => {
        description.append('image', blob);
        return AUTH_SERVICE.createPizza(description);
      })
      .then(console.log);
  }

  render() {
    const heading = document.createElement('h1');
    heading.textContent = 'Create and order your pizza';
    heading.className = 'create-heading';
    return heading;
  }
}

export default Create;