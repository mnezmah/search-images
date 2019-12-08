import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'
import FormContainer from '../../../Form/FormContainer'

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

test('should render FormContainer corectly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <FormContainer />
    </Provider>)
  expect(wrapper).toMatchSnapshot()
})

test('should prevent default on submit', () => {
  let getImages = jest.fn()
  const preventDefault = jest.fn()
  const wrapper = mount(
    <Provider store={store}>
      <FormContainer
        getImages={getImages} />
    </Provider>
  )
  wrapper.find('Form').find('form').simulate('submit', { preventDefault })
  expect(preventDefault).toBeCalled()
})

test('should set state.value on input change', () => {
  const value = 'house'
  const wrapper = mount(
    <Provider store={store}>
      <FormContainer />
    </Provider>
  )
  wrapper.find('Form').find('input').simulate('change', { target: {value}})
  expect(wrapper.find('FormContainer').state('value')).toBe(value)
})

// test('should handle onSubmit', () => {
//   const value = 'horse'
//   let getImages = jest.fn()
//   const preventDefault = jest.fn()
//   const wrapper = mount(
//     <Provider store={store}>
//       <FormContainer
//         getImages={getImages} />
//     </Provider>
//   )
//   wrapper.find('Form').find('form').simulate('submit', { preventDefault, getImages })
//   // expect(getImages).toBeCalled()
//   // expect(wrapper.state('value')).toBe(value)
// }) 