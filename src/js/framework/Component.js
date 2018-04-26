class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;
  }

  update(props) {
    this.beforeUpdate(props);
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
    if (Array.isArray(children)) { 
      this.host.append(...children)
    } else {
      this.host.append(children);
    }

    return this.host;
  }

  render() {}
  beforeUpdate() {}
}

export default Component;