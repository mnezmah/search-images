import React from 'react'
import { shallow } from 'enzyme'
import Tile from '../../../Tile/Tile'

test('should render Tile corectly', () => {
  const wrapper = shallow(<Tile />)
  expect(wrapper).toMatchSnapshot()
})