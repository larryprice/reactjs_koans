import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart4 from '../exercises/05-Challenge-GroceryList-part-4'
import './helpers'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #4 - collecting groceries items', () => {
    it('Should be possible to make the grocery item complete', () => {
      const wrapper = mount(<GroceryListPart4 />)
      wrapper.find('ul li').simulate('click')

      expect(wrapper.find('ul li').length).toBe(
        {value: 1, msg: 'There should be exactly one element on the groceries list'})
      expect(wrapper.find('ul li.completed').length).toBe({value: 1, msg: 'GroceriesListItem should be completed'})
    })
  })
})
