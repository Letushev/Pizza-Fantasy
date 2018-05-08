import API_SERVICE from './api-service';

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

  handshake(token) {
    this.ws = new WebSocket(`${ this.wsUrl }?key=${ token }`);
    this.ws.onopen = () => console.log;
  }
}

const WS_SERVICE = new WsService();
export default WS_SERVICE;