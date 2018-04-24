import './footer.scss';
import Component from '../../framework/Component';

class Footer extends Component {
  constructor() {
    super();
    this.host = document.createElement('footer');
  }

  render() {
    const footerWrapper = document.createElement('div');
    footerWrapper.className = 'footer-wrapper';
    footerWrapper.innerHTML = `
      <address>1&nbsp;Kottans&nbsp;Str., tel.&nbsp;<a href="tel:57778887">577-788-87</a></address>
      <small>Pizza Fantasy &copy; 2018</small> `;

    return footerWrapper;
  }
}

export default Footer;