import './canvas.scss';
import Component from '../../framework/Component';
import EVENT_EMITTER from '../../framework/EventEmitter';
import { removeArrayElement, getRandomNumber } from '../../utils/helpers';

class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      size: 60,
      ingredients: [],
      circles: this.fillCircles()
    };

    this.host = document.createElement('div');
    this.host.className = 'canvas-container';

    this.unsubscribeIngr = EVENT_EMITTER.subscribe('ingredients-change', this.handleIngredientsChange.bind(this));
    this.unsubscribeSize = EVENT_EMITTER.subscribe('size-change', this.handleSizeChange.bind(this));
  }

  fillCircles() {
    // 5 circles with appropriate number of ingredients
    const circles = [new Array(1), new Array(4), new Array(10), new Array(18), new Array(27)];
    return circles.map(arr => arr.fill(0));
  }

  drawCrust(ctx, crust, canvasWidth, canvasHeight) {
    ctx.drawImage(crust, -(canvasWidth / 2), -(canvasHeight / 2), canvasWidth, canvasHeight);
  }

  drawIngredients(ctx, canvasWidth, canvasHeight, ingridientWidth, ingridientHeight) {
    const { circles, ingredients } = this.state;
    
    ctx.translate( -(canvasWidth / 2), -(canvasHeight / 2));
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 3;
    ctx.shadowColor = '#541200';
    
    circles.forEach((circle, circleIndex) => {
      circle.forEach((cell, cellIndex) => {
        if (cell !== 0) {
          const image = (ingredients.find(({ id }) => id === cell)).image;
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

  handleIngredientsChange(ingr) {
    const { ingredients, circles } = this.state;
    
    if (ingredients.includes(ingr)) {
      removeArrayElement(ingr, ingredients);
      this.removeIngridient(ingr.id, circles);
    } else {
      ingredients.push(ingr); 
      this.spreadIngridient(ingr.id, circles);
    }

    this.updateState({ ingredients, circles });
  }

  handleSizeChange(size) {
    this.updateState({ size });
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
    this.drawIngredients(ctx, canvas.width, canvas.height, ingridientWidth, ingridientHeight);

    ctx.restore();

    requestAnimationFrame(() => {
      this.startAnimation(...arguments);
    })
  }

  calculatePrice() {
    const { ingredients, size } = this.state;
    return ingredients.reduce((sum, ingr) => (sum + ingr.price), size / 5).toFixed(2);
  }

  render() {
    const { crust_image } = this.props;
    const { size } = this.state;
    const canvas = document.createElement('canvas');
    const price = document.createElement('span');
    const ctx = canvas.getContext('2d');
    const ingridientWidth = 12 * (size / 30);
    const ingridientHeight = 12 * (size / 30);
    
    canvas.width = 160 * (size / 30);
    canvas.height = 160 * (size / 30);
    
    price.className = 'total-price';
    price.textContent = `${ this.calculatePrice() } $`;

    requestAnimationFrame(() => {
      this.startAnimation(ctx, crust_image, ingridientWidth, ingridientHeight);
    });

    return [canvas, price];
  }

  unmount() {
    this.unsubscribeIngr();
    this.unsubscribeSize();
  }
}

export default Canvas;