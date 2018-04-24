import Component from './Component';

class Router extends Component {
  constructor(container, routes) {
    super();

    this.state = {
      routes, 
      activeRoute: null,
      activeComponent: null
    };

    this.host = container;

    window.addEventListener('hashchange', () => {
      this.handleUrlChange(this.path);
    })

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes } = this.state;
    const route = routes.find(({ href }) => href === path);
    
    if (!!route) {
      if (route !== this.state.activeRoute) {
        if (!!route.redirectTo) {
          return this.navigateTo(route.redirectTo);
        }

        if (!!route.isAuthorized && !route.isAuthorized()) {
          return this.navigateTo('/login');
        }

        this.applyRoute(route);
      }
    } else {
      this.navigateTo('/');
    }
  }

  navigateTo(path) {
    window.location.hash = path;
  }

  applyRoute(route) {
    const component = new route.component();
    this.updateState({ 
      activeRoute: route,
      activeComponent: component
    });
  }

  render() {
    return this.state.activeComponent.update();
  }
}

export default Router;