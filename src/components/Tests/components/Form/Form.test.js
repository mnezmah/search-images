import React from 'react'
import { shallow } from 'enzyme'
import Form from '../../../Form/Form'

test('should render Form corectly', () => {
  const wrapper = shallow(<Form />)
  expect(wrapper).toMatchSnapshot()
})