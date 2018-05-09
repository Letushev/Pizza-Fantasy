import API_SERVICE from './api-service';
import EVENT_EMITTER from '../framework/EventEmitter';

class WsService {
  constructor() {
    this.ws = null;
    this.wsUrl = 'wss://pizza-tele.ga/ws';
  }

  establish() {
    API_SERVICE.getTicket()
      .then(response => {
        if (response.success) {
          this.handshake(response.token);
        }
      });
  }

  onmessage(message) {
    message = JSON.parse(message);
    EVENT_EMITTER.emit(message.event_name, message.data);
  }

  onclose(event) {
    if (event.code === 4001) {
      window.location.hash = '/login';
    } else {
      setTimeout(this.establish.bind(this), 1000); 
    }
  }

  handshake(token) {
    this.ws = new WebSocket(`${ this.wsUrl }?key=${ token }`);
    this.ws.onmessage = event => this.onmessage(event.data);
    this.ws.onclose = this.onclose;
  }
}

const WS_SERVICE = new WsService();
export default WS_SERVICE;