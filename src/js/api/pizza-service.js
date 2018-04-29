import API_SERVICE from './api-service';

class PizzaService {
  constructor() {
    this.ingredients = null;
    this.tags = null;
    this.crust_image = null;
  }

  preloadPizzaData() {
    return Promise.all([
      this.getTags(),
      this.getIngridients()
    ]);
  }

  getIngridients() {
    return API_SERVICE.getIngredientList()
      .then(data => this.ingredients = this.pullNames(data.results))
      .then(this.loadResources.bind(this))
      .then(this.saveImages.bind(this));
  }

  getTags() {
    return API_SERVICE.getTagList()
      .then(data => this.tags = this.pullNames(data.results));
  }

  pullNames(arr) {
    return arr.reduce((result, elem) => {
      result[elem.name] = elem;
      delete result[elem.name].name;
      return result;
    }, {});
  }

  saveImages(images) {
    images.forEach(img => {
      if (img.name === 'crust') {
        this.crust_image = img.image;
      } else {
        delete this.ingredients[img.name].image_url;
        this.ingredients[img.name].image = img.image;
      }
    })
  }

  loadResources(ingredients) {
    let promises = [];
    promises.push(this.loadImage('crust', `${ API_SERVICE.domain }/static/images/pizza.png`));
    for (const ingr in ingredients) {
      promises.push(this.loadImage(ingr, `${ API_SERVICE.domain }/${ ingredients[ingr].image_url }`));
    }
    return Promise.all(promises);
  }

  loadImage(name, url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve({ name, image: img });
    });
  }
}

const PIZZA_SERVICE = new PizzaService();
export default PIZZA_SERVICE;