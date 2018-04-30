import './canvas.scss';
import Component from '../../framework/Component';
import EVENT_EMITTER from '../../framework/EventEmitter';
import { removeArrayElement, getRandomNumber } from '../../utils/helpers';

class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      size: 2,
      ingridients: [],
      circles: this.fillCircles()
    };

    this.host = document.createElement('div');
    this.host.className = 'canvas-container';

    EVENT_EMITTER.subscribe('ingridient-clicked', this.handleIngridientsChange.bind(this));
  }

  fillCircles() {
    // 5 circles with appropriate number of ingridients
    const circles = [new Array(1), new Array(4), new Array(10), new Array(18), new Array(27)];
    return circles.map(arr => arr.fill(0));
  }

  drawCrust(ctx, crust, canvasWidth, canvasHeight) {
    ctx.drawImage(crust, -(canvasWidth / 2), -(canvasHeight / 2), canvasWidth, canvasHeight);
  }

  drawIngridients(ctx, canvasWidth, canvasHeight, ingridientWidth, ingridientHeight) {
    const { circles, ingridients } = this.state;
    
    ctx.translate( -(canvasWidth / 2), -(canvasHeight / 2));
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 3;
    ctx.shadowColor = '#541200';
    
    circles.forEach((circle, circleIndex) => {
      circle.forEach((cell, cellIndex) => {
        if (cell !== 0) {
          const image = (ingridients.find(({ id }) => id === cell)).image;
          const angle = 360 / circle.length * cellIndex;
          const radius = ingridientWidth / 2;
          const offset = (circleIndex * 4 - cell) / 10 * radius; // fake random

          ctx.save();
          // move to the center of canvas
          ctx.translate(canvasWidth / 2, canvasHeight / 2);
          // rotate to the center of needed cell
          ctx.rotate(angle * Math.PI / 180);
          // move to the center of needed cell with offset
          ctx.translate(circleIndex * ingridientWidth + offset, offset);
          ctx.drawImage(image, -radius, -radius, ingridientWidth, ingridientHeight);
          ctx.restore();
        }
      })
    })
  }

  handleIngridientsChange(ingr) {
    const { ingridients, circles } = this.state;
    const id = ingr.id;

    if (ingridients.includes(ingr)) {
      removeArrayElement(ingr, ingridients);
      this.removeIngridient(id, circles);
    } else {
      ingridients.push(ingr);
      this.spreadIngridient(id, circles);
    }

    this.updateState({ ingridients, circles });
  }

  spreadIngridient(id, circles) { 
    const numberToSpread = 10;
    let counter = 1;

    while (counter <= numberToSpread) {
      const randomCircle = getRandomNumber(0, circles.length - 1);
      const randomCell = getRandomNumber(0, circles[randomCircle].length - 1);
      if (circles[randomCircle][randomCell] === 0) {
        circles[randomCircle][randomCell] = id;
        counter++;
      }
    }
  }

  removeIngridient(id, circles) {
    circles.forEach((circle, circleIndex) => {
      circle.forEach((cell, cellIndex) => {
        if (cell === id) {
          circles[circleIndex][cellIndex] = 0;
        }
      })
    });
  }
  
  startAnimation(ctx, crust, ingridientWidth, ingridientHeight) {
    const canvas = ctx.canvas;
    const time = new Date();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());

    this.drawCrust(ctx, crust, canvas.width, canvas.height);
    this.drawIngridients(ctx, canvas.width, canvas.height, ingridientWidth, ingridientHeight);

    ctx.restore();

    requestAnimationFrame(() => {
      this.startAnimation(...arguments);
    })
  }

  render() {
    const { crust_image } = this.props;
    const { size } = this.state;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ingridientWidth = 12 * size;
    const ingridientHeight = 12 * size;
    
    canvas.width = 160 * size;
    canvas.height = 160 * size;

    requestAnimationFrame(() => {
      this.startAnimation(ctx, crust_image, ingridientWidth, ingridientHeight);
    });

    return canvas;
  }
}

export default Canvas;