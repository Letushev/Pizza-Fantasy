import './canvas.scss';
import Component from '../../framework/Component';
import EVENT_EMITTER from '../../framework/EventEmitter';

class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      ingridients: [],
      cells: [] 
    };

    this.host = document.createElement('div');
    this.host.className = 'canvas-container';

    EVENT_EMITTER.subscribe('ingridient-clicked', this.handleIngridientsChange.bind(this));
  }

  drawCrust(ctx, image) {
    ctx.drawImage(image, 0, 0, 320, 320);
  }

  drawIngridients(ctx, ingridients) {
    console.log(ingridients);
  }

  handleIngridientsChange(ingr) {
    const { ingridients } = this.state;
    if (ingridients.includes(ingr)) {
  
    } else {
      ingridients.push(ingr);
      this.updateState({ ingridients });
    }
  }

  render() {
    const { crust_image } = this.props;
    const { ingridients } = this.state;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 320;
    
    this.drawCrust(ctx, crust_image);
    this.drawIngridients(ctx, ingridients);

    return canvas;
  }
}

export default Canvas;