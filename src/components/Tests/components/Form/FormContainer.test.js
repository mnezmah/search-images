import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import FormContainer from '../../../Form/FormContainer'

const mockStore = configureMockStore();
const store = mockStore({});

test('should render FormContainer corectly', () => {
  const wrapper = shallow(
    <Provider store={store}><FormContainer /></Provider>
  )
  expect(wrapper).toMatchSnapshot()
})