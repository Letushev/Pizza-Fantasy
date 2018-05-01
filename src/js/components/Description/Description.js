import './description.scss';
import Component from '../../framework/Component';
import { makeAutoResizable } from '../../utils/autoResizable';
import EVENT_EMITTER from '../../framework/EventEmitter';
import Price from '../Price/Price';

class Description extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'description-container';

    this._price = new Price();

    EVENT_EMITTER.subscribe('ingredients-change', this.handleIngredientsChange.bind(this));
  }

  render() {
    const form = document.createElement('form');
    const { tags } = this.props;
    const tagsCheckboxes = this.getTagsCheckboxes(tags);

    form.className = 'description-form';
    form.addEventListener('change', this.handleSizeChange.bind(this));
    form.addEventListener('submit', this.handleSubmit);
    form.innerHTML = `
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
        ${ tagsCheckboxes } 
      </div> 
      
      <button type="submit">Order</button> `;

    const textArea = form.querySelector('textarea');
    makeAutoResizable(textArea);
    form.insertAdjacentElement('afterbegin', this._price.update({ size: 60 }));

    return form;
  }

  handleSizeChange(event) {
    const target = event.target;
    if (target.matches('[type=radio]')) {
      this._price.update({ size: target.value })
      EVENT_EMITTER.emit('size-changed', target.value / 30); // canvas state size is 1, 1.5 or 2
                                                             // that`s why division by 30
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const tags = formData.getAll('tag').map(Number);
    formData.delete('tag');
    formData.append('tags', JSON.stringify(tags)); 
    EVENT_EMITTER.emit('order-submit', formData);
  }

  handleIngredientsChange(newIngredients) {
    this._price.update({ ingredients: newIngredients})
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