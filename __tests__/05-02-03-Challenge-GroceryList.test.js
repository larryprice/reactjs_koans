import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'
import './helpers'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #2 - add a new product to list', () => {
    it('Should not be possible to add empty element', () => {
      const wrapper = mount(<GroceryListPart2 />)
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('ul li').length).toBe(
        {value: 1, msg: 'There should be exactly one element on the groceries list'})
    })
  })
})
