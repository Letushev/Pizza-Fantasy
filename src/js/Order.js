import Component from './framework/Component';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Canvas from './components/Canvas/Canvas';
import Description from './components/Description/Description';
import PIZZA_SERVICE from './api/pizza-service';
import API_SERVICE from './api/api-service';
import { canvasToBlob } from './utils/helpers';

class Order extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'order-container';
   
    this._header = new Header();
    this._footer = new Footer();
    this._canvas = new Canvas();
    this._description = new Description();

    this.main = document.createElement('main');
    this.main.className = 'create-container';
  }

  beforeUpdate() {
    PIZZA_SERVICE.preloadPizzaData()
      .then(setTimeout(() => {
        const { ingredients, tags, crust_image } = PIZZA_SERVICE;
        this.main.classList.add('show-slow');
        this.main.innerHTML = '<h1 class="create-heading">Create and order your pizza</h1>';
        this.main.append(
          this._canvas.update({ crust_image }),
          this._description.update({ 
            ingredients, 
            tags,
            onFormSubmit: this.createPizza.bind(this) 
          })
        );
      }, 500));
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
    const loader = document.createElement('div');
    loader.className = 'loader';
    this.main.append(loader);

    return [
      this._header.update({ activeLink: 'order' }),
      this.main,
      this._footer.update()
    ];
  }
}

export default Order;