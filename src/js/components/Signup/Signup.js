import Component from '../../framework/Component';

class Signup extends Component {
  constructor() {
    super();
    
    this.host = document.createElement('div');
    this.host.className = 'signup-wrapper';
  }

  render() {
    const a = document.createElement('div');
    a.innerHTML = `
      Hello, Signup!`;
    return a;
  }

}

export default Signup;