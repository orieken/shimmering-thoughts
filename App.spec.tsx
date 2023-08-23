import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 2 child', () => {
    const tree: ReactTestRendererJSON = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBe(2);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});