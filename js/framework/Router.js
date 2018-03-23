import Component from './Component';
import { isEqualPaths, extractUrlParams } from '../utils/helpers';

class Router extends Component {

  constructor(routes) {
    super();

    this.state = {
      routes,
      activeRoute: null,
      activeComponent: null
    };

    this.host = document.getElementById('root');

    window.addEventListener('hashchange', () => {
      this.handleUrlChange(this.path);
    });

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, activeRoute } = this.state;

    let nextRoute = routes.find(({ href }) => isEqualPaths(href, path));

    if (!nextRoute) {
      this.handleRedirect('');
    }

    if (nextRoute !== activeRoute) {
      if (!!nextRoute.redirectTo) {
        return this.handleRedirect(nextRoute.redirectTo);
      }

      if (!!nextRoute.onEnter) {
        return this.handleOnEnter(nextRoute, path);
      }

      this.applyRoute(nextRoute, path)
    }
  }

  handleRedirect(path) {
    window.location.hash = path;
  }

  applyRoute(route, path) {
    const { href, component } = route;
    const componentInstance = new component();

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
