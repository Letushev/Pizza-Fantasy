class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;
  }

  beforeUpdate() {}

  update(props) {
    this.beforeUpdate(props);
    this.props = Object.assign({}, this.props, props);
    return this._render();
  }

  updateState(state) {
    this.state = Object.assign({}, this.state, state);
    this._render();
  }

  unmount() {}

  _render() {
    const children = this.render();

    this.host.innerHTML = '';
    if (Array.isArray(children)) { 
      this.host.append(...children)
    } else {
      this.host.append(children);
    }

    return this.host;
  }

  render() {}
}

export default Component;