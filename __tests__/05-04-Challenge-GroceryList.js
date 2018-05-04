import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart4 from '../exercises/05-Challenge-GroceryList-part-4'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #4 - collecting groceries items', () => {
    it('Should be possible to make the grocery item complete', () => {
      const wrapper = mount(<GroceryListPart4 />)
      wrapper.find('ul li').simulate('click')

      expect(wrapper.find('li').length).toBe(1)
      expect(wrapper.find('li.completed').length).toBe(1)
    })
  })
})
