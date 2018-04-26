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

    this.state = {

    };

    this.host = document.createElement('main');
    this.host.className = 'create-container';

    this._ingredients = new Ingredients();
    this._canvas = new Canvas();
    this._description = new Description();
    this._price = new Price();
  }

  beforeUpdate(props) {
    PIZZA_SERVICE.preloadPizzaData()
      .then(() => {
        const { ingredients, tags, images } = PIZZA_SERVICE;
        console.log(ingredients, tags, images);
      });
  }

  render() {

  }
}

export default Create;