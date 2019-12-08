import React from 'react'
import { shallow } from 'enzyme'
import Image from '../../../Image/Image'

test('should render Image corectly', () => {
  const wrapper = shallow(<Image />)
  expect(wrapper).toMatchSnapshot()
})