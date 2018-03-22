import { bindAll, parseHTML, append, clearChildren } from '../utils/helpers';

class Component {

  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;

    bindAll(this, 'updateState', 'update');
  }

  updateHost() {
    const html = this.render();

    if (!html && this.host) {
      return this.host;
    }

    if (typeof html === 'string') {
      return append(clearChildren(this.host), parseHTML(html));
    } else {
      return append(clearChildren(this.host), html);
    }
  }

  update(nextProps) {
    this.props = nextProps;
    return this.updateHost();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);
    this.state = nextState;

    this.updateHost();

    return nextState;
  }

  render() {}
}

export default Component;
