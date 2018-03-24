import Component from '../framework/Component';

class Queue extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('pizzas-queue-container');
  }

  render() {
    return `
      <header>
        <div class="clock">
          <i class="fas fa-hourglass-half"></i>
          <time id="current-time"></time>
        </div>

        <button type="button" class="log-out-button">
          <i class="fas fa-sign-out-alt"></i>
          Log out
        </button>

        <div class="logo-wrapper">
          <img src="images/logo.svg" alt="">
          <h1>Pizza Fantasy</h1>
        </div>
      </header>

      <main>
        <button type="button" class="new-pizza-button">
          <i class="fas fa-plus"></i>
          New pizza
        </button>

        <div class="queue">

          <div class="pizza">
            <div class="order-info">
              <span class="price">$42</span>
              <span class="order-number">1</span>
            </div>

            <img src="images/pizza_1.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:32:43</time>
              <span class="ready-in">Ready in: <time>2 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$137.07</span>
              <span class="order-number">2</span>
            </div>

            <img src="images/pizza_2.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:34:43</time>
              <span class="ready-in">Ready in: <time>3 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$49</span>
              <span class="order-number">3</span>
            </div>

            <img src="images/pizza_3.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:55:43</time>
              <span class="ready-in">Ready in: <time>4 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$56</span>
              <span class="order-number">7</span>
            </div>

            <img src="images/pizza_4.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">13:32:33</time>
              <span class="ready-in">Ready in: <time>5 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$24</span>
              <span class="order-number">4</span>
            </div>

            <img src="images/pizza_5.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">13:42:13</time>
              <span class="ready-in">Ready in: <time>6 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$41</span>
              <span class="order-number">5</span>
            </div>

            <img src="images/pizza_6.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">14:00:43</time>
              <span class="ready-in">Ready in: <time>7 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$86</span>
              <span class="order-number">6</span>
            </div>

            <img src="images/pizza_7.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">14:12:00</time>
              <span class="ready-in">Ready in: <time>8 min</time></span>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <address>1&nbsp;Kottans&nbsp;Str., tel.&nbsp;<a href="tel:57778887">577-788-87</a></address>
        <small>Pizza Fantasy &copy; 2018</small>
      </footer>
    `;
  }
}

export default Queue;
