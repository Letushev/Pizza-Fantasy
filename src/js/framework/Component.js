class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;
  }

  update(props) {
    this.props = props;
    return this._render();
  }

  updateState(state) {
    this.state = Object.assign({}, this.state, state);
    this._render();
  }

  _render() {
    const children = this.render();

    this.host.innerHTML = '';
    if (typeof children === 'string') {
      this.host.innerHTML = children;
    } else if (Array.isArray(children)) { 
      this.host.append(...children)
    } else {
      this.host.append(children);
    }

    return this.host;
  }

  render() {}
}

export default Component;