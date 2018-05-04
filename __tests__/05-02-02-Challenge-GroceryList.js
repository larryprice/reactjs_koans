import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #2 - add a new product to list', () => {
    it('Should be possible to add a new product to list', () => {
      const wrapper = mount(<GroceryListPart2 />)
      expect(wrapper.find('.new-item').length).toBe(1)
      expect(wrapper.find('.add-product').length).toBe(1)

      wrapper.find('.new-item').simulate('change', {target: {value: 'Oranges'}})
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('ul li').length).toBe(2)

      expect(wrapper.find('ul li').at(0).text()).toBe('Apples')
      expect(wrapper.find('ul li').at(1).text()).toBe('Oranges')
    })
  })
})
