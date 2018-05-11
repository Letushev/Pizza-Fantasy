import './list.scss';
import hourglass from '../../../images/hourglass.svg';
import Component from '../../framework/Component';
import WS_SERVICE from '../../api/ws-service';
import EVENT_EMITTER from '../../framework/EventEmitter';
import API_SERVICE from '../../api/api-service';
import { diffBetweenDates } from '../../utils/helpers';

class List extends Component {
  constructor() {
    super();

    this.state = {
      pizzas: null,
      count: 0
    };

    this.host = document.createElement('main');
    this.host.className = 'list-container';

    WS_SERVICE.establish();

    this.unsubscribeCreate = EVENT_EMITTER.subscribe('CREATE_PIZZA', this.addPizza.bind(this));
    this.unsubscribeAccept = EVENT_EMITTER.subscribe('ACCEPT_PIZZA', this.acceptPizzas.bind(this));

    this.getList();
  }

  getList() {
    API_SERVICE.getPizzaList()
      .then((data) => {
        this.updateState({ 
          pizzas: data.results,
          count: data.count
        });
      });
  }

  addPizza(pizza) {
    const { pizzas, count } = this.state;
    pizzas.unshift(pizza);
    this.updateState({ pizzas, count: count + 1});
  }

  acceptPizzas(uuids) {
    const { pizzas, count } = this.state;
    uuids.forEach(uuid => {
      const index = pizzas.findIndex(pizza => pizza.uuid === uuid);
      pizzas.splice(index, 1);
    })
    
    this.updateState({ pizzas, count: count - uuids.length });
  }

  render() {
    const { pizzas, count } = this.state;
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
    
    this.sortPizzas(pizzas);
    pizzas.forEach((pizza, index) => {
      const card = document.createElement('article');
      const timeDiff = diffBetweenDates(new Date(), new Date(pizza.time_prepared));
      card.className = 'pizza';
      card.innerHTML = `
        <article class="pizza">
          <div class="order-info">
            <span class="price">${ pizza.price } $</span>
            <span class="order-number">${ index + 1 }</span>
          </div>

          <p class="pizza-name">${ pizza.name }</p>

          <div class="pizza-img-wrapper">
            <img src="${ API_SERVICE.domain }/${ pizza.img_url }" 
                 alt="${ pizza.description }"
                 width="${ pizza.size / 60 * 100 }%">
          </div>

          <div class="time-info">
            <time class="time-of-order">${ this.renderDate(pizza.created_date) }</time>
            <span class="ready-in">Ready in: <time>${ this.getMinutesLeft(timeDiff) } min</time></span>
          </div>
        </article> `;
      
      const updateIntervalId = setInterval(() => {
        this.updateMinutesLeft(card, pizza.time_prepared)
      }, 1000 * 60);

      setTimeout(() => {
        clearInterval(updateIntervalId);
        this.setReady(card);
      }, timeDiff);

      list.appendChild(card);
    });

    if (count > pizzas.length) {
      list.appendChild(this.setShowMoreButton());
    }

    return list;
  }

  sortPizzas(pizzas) {
    pizzas.sort((a, b) => {
      return a.time_prepared > b.time_prepared;
    })
  }

  setReady(card) {
    const readyIn = card.querySelector('.ready-in');
    readyIn.classList.add('ready');
    readyIn.textContent = 'Ready';
    card.classList.add('twinkle');
  }

  getMinutesLeft(timeDiff) {
    return Math.trunc(timeDiff / (1000 * 60) + 1);
  }

  updateMinutesLeft(card, timePrepared) {
    const timeDiff = diffBetweenDates(new Date(), new Date(timePrepared));
    const readyInTime = card.querySelector('.ready-in time');
    readyInTime.textContent = `${ this.getMinutesLeft(timeDiff) } min`;
  }

  renderDate(date) {
    const dateObj = new Date(date);
    return [
      dateObj.getHours(), 
      dateObj.getMinutes(), 
      dateObj.getSeconds()
    ].map(n => `${ n }`.padStart(2, '0')).join(':');
  }

  setShowMoreButton() {
    const { pizzas } = this.state;
    const button = document.createElement('button');
    button.className = 'show-more';
    button.textContent = 'Show more';
    button.addEventListener('click', () => {
      API_SERVICE.getPizzaList(pizzas.length)
        .then((data) => {
          this.updateState({ 
            pizzas: pizzas.concat(data.results)
          });
      });
    });
    return button;
  }

  unmount() {
    this.unsubscribeCreate();
    this.unsubscribeAccept();
    WS_SERVICE.close();
  }
}

export default List;