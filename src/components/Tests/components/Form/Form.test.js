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