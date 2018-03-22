import Component from './Component';

class Router extends Component {

  constructor(routes) {
    super();

    this.state = {
      routes,
      activeRoute: null,
      activeComponent: null
    };

    this.host = document.getElementById('root');

    window.onpopstate = () => {
      console.log('here');
      this.handleUrlChange(this.path)
    };

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.pathname;
  }

  handleUrlChange(path) {
    const { routes, activeRoute } = this.state;

    let nextRoute = routes.find(({ href }) => href === path);

    if (nextRoute && nextRoute !== activeRoute) {
      this.applyRoute(nextRoute, path)
    }
  }

  applyRoute(route, path) {
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
