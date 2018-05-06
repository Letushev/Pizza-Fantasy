import './create.scss';
import Component from '../../framework/Component';
import Canvas from '../Canvas/Canvas';
import Description from '../Description/Description';
import PIZZA_SERVICE from '../../api/pizza-service';
import API_SERVICE from '../../api/api-service';
import { canvasToBlob } from '../../utils/helpers';

class Create extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.className = 'create-container';

    this._canvas = new Canvas();
    this._description = new Description();
  }

  beforeUpdate() {
    PIZZA_SERVICE.preloadPizzaData()
      .then(() => {
        const { ingredients, tags, crust_image } = PIZZA_SERVICE;
        this.host.append(
          this._canvas.update({ crust_image }),
          this._description.update({ 
            ingredients, 
            tags,
            onFormSubmit: this.createPizza.bind(this) 
          })
        );
      });
  }

  createPizza(formData) {
    const canvas = document.querySelector('canvas');
    canvasToBlob(canvas)
      .then(blob => {
        formData.append('image', blob);
        API_SERVICE.createPizza(formData)
          .then(response => {
            this._description.update({ message: response });
            if(response.success) {
              console.log(response);
            }
          });
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
