import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parsePropTypes from 'parse-prop-types';

const stringify = defaultProp => {
  if (typeof defaultProp === 'function') {
    return 'func';
  }

  return JSON.stringify(defaultProp);
};

class PropTypesPlugin extends Component {
  state = {
    componentProps: null
  };

  constructor(props) {
    super(props);

    const component = Object.entries(this.props.plugins).find(
      ([name]) => name === this.props.component
    );

    if (component[1]) {
      component[1].provider().then(component => {
        this.setState({
          componentProps: parsePropTypes(component.default)
        });
      });
    }
  }

  render() {
    if (!this.state.componentProps) {
      return null;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(this.state.componentProps).map(
            ([prop, { type, defaultValue, required }]) => (
              <tr key={prop}>
                <td>{prop}</td>
                <td>{type.name}</td>
                <td>{stringify(defaultValue.value)}</td>
                <td>{stringify(required)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}

PropTypesPlugin.propTypes = {
  plugins: PropTypes.object,
  component: PropTypes.string
};

PropTypesPlugin.defaultProps = {
  plugins: {},
  component: ''
};

export default PropTypesPlugin;
