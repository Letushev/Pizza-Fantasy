import './create.scss';
import Component from '../../framework/Component';
import Ingredients from '../Ingredients/Ingredients';
import Canvas from '../Canvas/Canvas';
import Description from '../Description/Description';
import Price from '../Price/Price';
import PIZZA_SERVICE from '../../api/pizza-service';

class Create extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.className = 'create-container';

    this._ingredients = new Ingredients();
    this._canvas = new Canvas();
    this._description = new Description();
    this._price = new Price();
  }

  beforeUpdate() {
    PIZZA_SERVICE.preloadPizzaData()
      .then(() => {
        const { ingredients, tags, crust_image } = PIZZA_SERVICE;
        this.host.append(
          this._ingredients.update({ ingredients }),
          this._canvas.update({ crust_image }),
          this._description.update()
        );
      });
  }

  render() {
    const heading = document.createElement('h1');
    heading.textContent = 'Create and order your pizza';
    heading.className = 'create-heading';
    return heading;
  }
}

export default Create;