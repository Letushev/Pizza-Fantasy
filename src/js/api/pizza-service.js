import API_SERVICE from './api-service';

class PizzaService {
  constructor() {
    this.ingredients = [];
    this.tags = [];
    this.images = {};

    this.crust_url = `${ API_SERVICE.domain }/static/images/pizza.png`;
  }

  preloadPizzaData() {
    return Promise.all([
      this.getTags(),
      this.getIngridients()
    ]);
  }

  getIngridients() {
    return API_SERVICE.getIngredientList()
      .then(data => this.ingredients = data.results)
      .then(this.loadImages.bind(this))
      .then(images => {
        images.forEach(image => {
          this.images[image.name] = image.source;
        });
      });
  }

  getTags() {
    return API_SERVICE.getTagList()
      .then(data => this.tags = data.results);
  }

  loadImages(ingredients) {
    let promises = [];
    promises.push(this.loadImage('crust', this.crust_url));
    ingredients.forEach(ingredient => {
      promises.push(this.loadImage(ingredient.name, `${ API_SERVICE.domain }/${ ingredient.image_url }`));
    });
    return Promise.all(promises);
  }

  loadImage(name, url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve({ name, source: image });
    });
  }
}

const PIZZA_SERVICE = new PizzaService();
export default PIZZA_SERVICE;