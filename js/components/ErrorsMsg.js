import Component from '../framework/Component';

class ErrorsMsg extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('ul');
    this.host.classList.add('error-list');
  }

  render() {
    if (!this.props) return '';

    let errors = '';
    const { answer } = this.props;

    if (!!answer.validations) {
      answer.validations.forEach(msg => errors += `<li>${ msg }</li>`);
    } else {
      errors = `<li>${ answer.error }</li>`;
    }

    return errors;
  }
}

export default ErrorsMsg;
