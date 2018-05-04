import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #2 - add a new product to list', () => {
    it('Should not be possible to add empty element', () => {
      const wrapper = shallow(<GroceryListPart2 />)
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('li').length).toBe(1)
    })
  })
})
