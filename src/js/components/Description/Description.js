import './description.scss';
import Component from '../../framework/Component';
import { makeAutoResizable } from '../../utils/helpers';
import EVENT_EMITTER from '../../framework/EventEmitter';
import Message from '../Message/Message';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };

    this.host = document.createElement('div');
    this.host.className = 'description-container';

    this._message = new Message('Create');

    this.MAXIngredientsNumber = 6;
  }

  render() {
    const { ingredients, tags, message } = this.props;

    const form = document.createElement('form');
    const detailsContainer = document.createElement('div');
    const ingredientsContainer = document.createElement('div');

    form.className = 'description-form';
    detailsContainer.className = 'details-container';
    ingredientsContainer.className = 'ingredients-container';

    form.addEventListener('change', this.handleChange.bind(this));
    form.addEventListener('submit', this.handleSubmit.bind(this));

    detailsContainer.innerHTML = `
      <div class="input-container">
        <input type="text" name="name" id="pizza-name" class="text-input" minlength="3" maxlength="24" placeholder=" " required>
        <label for="pizza-name" data-error="Must contain at least 3 characters">Pizza name *</label>
      </div>

      <div class="input-container">
        <textarea name="description" id="description" class="text-input" placeholder=" "></textarea>
        <label for="description">Description (optinal)</label>
      </div> 

      <p class="selection-name">Size</p>
      <div class="radios-wrapper">
        <p class="radio-container">
          <input type="radio" name="size" id="small-size" value="30">
          <label for="small-size">Small</label>
        </p>
        <p class="radio-container">
          <input type="radio" name="size" id="middle-size" value="45">
          <label for="middle-size">Middle</label>
        </p>
        <p class="radio-container">
          <input type="radio" name="size" id="big-size" value="60" checked>
          <label for="big-size">Big</label>
        </p>
      </div> 

      <p class="selection-name">Tags</p>
      <div class="checkboxes-wrapper">
        ${ this.getTagsCheckboxes(tags) } 
      </div> 
      
      <button type="submit">Order</button> `;

    for (const ingr in ingredients) {
      const label = document.createElement('label');
      const image = ingredients[ingr].image;
      const name = document.createTextNode(ingr);
  
      ingredientsContainer.innerHTML += `
        <input type="checkbox" name="ingredient" value="${ ingredients[ingr].id }" id="${ ingr }"> `;
      label.setAttribute('for', ingr);
      image.setAttribute('alt', ingredients[ingr].description);
        
      label.append(image, name);
      ingredientsContainer.appendChild(label);
    }

    const textArea = detailsContainer.querySelector('textarea');
    makeAutoResizable(textArea);

    if (message) {
      detailsContainer.insertAdjacentElement('afterbegin', this._message.update(message));
    }

    form.append(ingredientsContainer, detailsContainer);
    return form;
  }

  handleChange(event) {
    const { ingredients } = this.props;
    const target = event.target;

    if (target.matches('[name=ingredient]')) {
      this.checkIngredients();
      EVENT_EMITTER.emit('ingredients-change', ingredients[target.id]);
    } else if (target.matches('[name=size]')) {
      EVENT_EMITTER.emit('size-change', target.value);
    }
  }

  checkIngredients() {
    const addedElements = document.querySelectorAll('[name=ingredient]:checked');
    const notAddedElements = document.querySelectorAll('[name=ingredient]:not(:checked)');

    if (addedElements.length === this.MAXIngredientsNumber) {
      notAddedElements.forEach(checkbox => {
        checkbox.disabled = true;
      })
    } else {
      notAddedElements.forEach(checkbox => {
        checkbox.disabled = false;
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const tags = formData.getAll('tag').map(Number);
    const ingredients = formData.getAll('ingredient').map(Number);

    formData.delete('tag');
    formData.delete('ingredient');

    formData.append('tags', JSON.stringify(tags));
    formData.append('ingredients', JSON.stringify(ingredients)); 
  
    this.props.onFormSubmit(formData);
  }

  getTagsCheckboxes(tags) {
    let html = '';
    for (const tag in tags) {
      html += `
        <p class="checkbox-container">
          <input type="checkbox" name="tag" id="${ tag }" value="${ tags[tag].id }">
          <label for="${ tag }">${ tag }</label> 
        </p> `;
    }
    return html;
  }
}

export default Description;