import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import TileContainer from '../../../Tile/TileContainer'
import images from '../../fixtures/images'

const mockStore = configureMockStore();
const store = mockStore({});

test('should render TileContainer corectly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <TileContainer />
    </Provider>
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render Tiles corectly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <TileContainer images={images} />
    </Provider>
  )
  expect(wrapper).toMatchSnapshot()
})