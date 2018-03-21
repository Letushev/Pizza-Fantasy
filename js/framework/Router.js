import Component from './Component';

class Router extends Component {

  constructor(routes) {
    super();

    this.state = {
      routes,
      activeRoute: null,
      activeComponent: null
    };

    this.host = document.createElement('div');

    window.onpopstate = () => {
      this.handleUrlChange(this.path)
    };

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(url) {
    const { routes } = this.state;
    let nextRoute = routes.find(({ href }) => href === url);

    this.applyRoute(nextRoute, url);
  }

  applyRoute(route, url) {
    const { activeComponent } = this.state;

    const componentInstance = new route.component();

    this.updateState({
      activeRoute: route,
      activeComponent: componentInstance,
    });
  }

  render() {
    return this.state.activeComponent.update();
  }

}

export default Router;
