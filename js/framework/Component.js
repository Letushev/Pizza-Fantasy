import { bindAll } from '../utils/helpers';

class Component {

  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;

    bindAll(this, 'updateState', 'update');
  }

  updateHost() {
    this.host.innerHTML = this.render();

    return this.host.innerHTML;
  }

  update(nextProps) {
    this.props = nextProps;
    return this.updateHost();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);
    this.state = nextState;

    this.updateHost();
  }

  render() {}
}

export default Component;
