import React from 'react';
import { mount } from 'enzyme';
import makeResetWindow from '../src';

test('wrapped component renders without problems', () => {
  const Component = makeResetWindow(() => <div></div>);
  mount(<Component />);
});
