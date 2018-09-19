'use strict';

const e = React.createElement;

class ThumpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thump: false };
  }

  render() {
    if (this.state.thump) {
      return 'You thump up this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ thump: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#thump_button_container');
ReactDOM.render(e(ThumpButton), domContainer);