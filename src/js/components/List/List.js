import './list.scss';
import hourglass from '../../../images/hourglass.svg';
import Component from '../../framework/Component';
import WS_SERVICE from '../../api/ws-service';
import EVENT_EMITTER from '../../framework/EventEmitter';
import API_SERVICE from '../../api/api-service';

class List extends Component {
  constructor() {
    super();

    this.state = {
      pizzas: null
    };

    this.host = document.createElement('main');
    this.host.className = 'list-container';

    WS_SERVICE.establish();

    EVENT_EMITTER.subscribe('CREATE_PIZZA', this.addPizza.bind(this));
    EVENT_EMITTER.subscribe('ACCEPT_PIZZA', this.acceptPizzas.bind(this));

    this.getList();
  }

  getList() {
    API_SERVICE.getPizzaList()
      .then((data) => {
        this.updateState({ pizzas: data.results });
      });
  }

  addPizza(pizza) {
    const { pizzas } = this.state;
    pizzas.unshift(pizza);
    this.updateState({ pizzas });
  }

  acceptPizzas(uuids) {
    const { pizzas } = this.state;
    uuids.forEach(uuid => {
      const index = pizzas.findIndex(pizza => pizza.uuid === uuid);
      pizzas.splice(index, 1);
    })
    
    this.updateState({ pizzas });
  }

  render() {
    const { pizzas } = this.state;
    console.log(pizzas);
    const list = document.createElement('div');
    list.className = 'pizzas-list';
    
    if (!pizzas) {
      const loader = document.createElement('div');
      loader.className = 'loader';
      return loader;
    }

    if (!pizzas.length) {
      const waitingContainer = document.createElement('div');
      waitingContainer.className = 'waiting-container';
      waitingContainer.innerHTML = 
       `<img src="${ hourglass }" alt="hourglass">
        <p>Queue is empty<br />Waiting for orders...</p> `;
      return waitingContainer;
    }

    pizzas.forEach((pizza, index) => {
      console.log(pizza);
      list.innerHTML += `
        <article class="pizza">
          <div class="order-info">
            <span class="price">$${ pizza.price }</span>
            <span class="order-number">${ index + 1 }</span>
          </div>

          <p class="pizza-name">${ pizza.name }</p>

          <div class="pizza-img-wrapper">
            <img src="${ API_SERVICE.domain }/${ pizza.img_url }" 
                 alt="${ pizza.description }"
                 width="${ pizza.size / 60 * 100 }%">
          </div>

          <div class="time-info">
            <time class="time-of-order">12:32:43</time>
            <span class="ready-in">Ready in: <time>2 min</time></span>
          </div>
        </article> `;
    })

    return list;
  }
}

export default List;