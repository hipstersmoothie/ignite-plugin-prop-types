import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

import PropTypesComponent from '../src';

const testPlugin = () => {};

testPlugin.propTypes = {
  children: PropTypes.node,
  string: PropTypes.string.isRequired,
  number: PropTypes.number
};

testPlugin.defaultProps = {
  children: null,
  string: PropTypes.string.isRequired,
  number: 10
};

const testPlugins = {
  test: {
    provider: () => Promise.resolve({ default: testPlugin })
  }
};

describe('PropTypesComponent', () => {
  test('renders nothing when no component found', done => {
    const component = renderer.create(
      <PropTypesComponent component="notfound" plugins={testPlugins} />
    );

    setImmediate(() => {
      expect(component.toJSON()).toBeNull();
      done();
    });
  });

  test('finds component provider', done => {
    const component = renderer.create(
      <PropTypesComponent component="test" plugins={testPlugins} />
    );

    setImmediate(() => {
      expect(component.toJSON()).toMatchSnapshot();
      done();
    });
  });
});
