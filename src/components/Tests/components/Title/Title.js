import React from 'react'
import { shallow } from 'enzyme'
import Title from '../../../Title/Title'

test('should render Title corectly', () => {
  const wrapper = shallow(<Title />)
  expect(wrapper).toMatchSnapshot()
})