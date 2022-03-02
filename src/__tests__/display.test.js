import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/display';

it('renders correctly', () => {
  const tree = renderer.create(
    <Display total="473" next="11" operation="/" />,
  ).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="display"
    >
      <p>
        473 / 11
      </p>
    </div>
  `);
});
