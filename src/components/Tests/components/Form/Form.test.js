import React from 'react'
import { shallow } from 'enzyme'
import Form from '../../../Form/Form'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});


test('should render Form corectly', () => {
  const wrapper = shallow(<Form />)
  expect(wrapper).toMatchSnapshot()
})

// test('should render tiles on input change', () => {
//   const value = "house"
//   const wrapper = shallow(
//     // <Provider store={store}>
//       <Form />
//     // </Provider>
//   )
//   wrapper.find('input').simulate('change', {
//     target: { value }
//   })
//   expect(wrapper.state('value')).toBe(value)
// }) 