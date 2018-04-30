import './description.scss';
import Component from '../../framework/Component';

class Description extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.className = 'description-container';
  }

  render() {
    const form = document.createElement('form');
    form.className = 'description-form';
    form.innerHTML = `
      <div class="input-container">
        <input type="text" name="name" id="pizza-name" minlength="3" maxlength="24" placeholder=" " required>
        <label for="pizza-name" data-error="Must contain at least 3 characters">Pizza name</label>
      </div>
      <div class="input-container">
        <textarea name="description" id="description"></textarea>
        <label for="description">Description</label>
      </div> 
      <div class="radios-wrapper">
        <input type="radio" name="size" id="small-size" value="30">
        <label for="small-size">Small</label>
        <input type="radio" name="size" id="middle-size" value="45">
        <label for="middle-size">Middle</label>
        <input type="radio" name="size" id="big-size" value="30">
        <label for="big-size">Big</label>
      </div> `;
    return form;
  }
}

export default Description;