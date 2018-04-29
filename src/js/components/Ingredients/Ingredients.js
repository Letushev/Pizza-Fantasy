import './ingredients.scss';
import Component from '../../framework/Component';
import EVENT_EMITTER from '../../framework/EventEmitter';
import PIZZA_SERVICE from '../../api/pizza-service';

class Ingredients extends Component {
  constructor() {
    super();
    
    this.MAXIngredientsNumber = 6;

    this.host = document.createElement('div');
    this.host.className = 'ingredients-container';
  }

  handleChange(target) {
    if (target.matches('[type=checkbox]')) {
      const { ingredients } = this.props;
      EVENT_EMITTER.emit('ingridient-clicked', ingredients[target.id]);

      const added = document.querySelectorAll('[name=ingredient]:checked');
      const notAdded = document.querySelectorAll('[name=ingredient]:not(:checked)');

      if (added.length === this.MAXIngredientsNumber) {
        notAdded.forEach(checkbox => {
          checkbox.disabled = true;
        })
      } else {
        notAdded.forEach(checkbox => {
          checkbox.disabled = false;
        })
      }
    }
  }

  render() {
    const { ingredients } = this.props;
    const form = document.createElement('form');
    form.className = 'ingredients-form';
    form.addEventListener('change', event => {
      this.handleChange(event.target);
    })

    for (const ingr in ingredients) {
      const label = document.createElement('label');
      const image = ingredients[ingr].image;
      const name = document.createTextNode(ingr);

      form.innerHTML += `
        <input type="checkbox" name="ingredient" value="${ ingredients[ingr].id }" id="${ ingr }"> `;
      label.setAttribute('for', ingr);
      image.setAttribute('alt', ingredients[ingr].description);
      
      label.append(image, name);
      form.appendChild(label);
    }

    return form;
  }
}

export default Ingredients;