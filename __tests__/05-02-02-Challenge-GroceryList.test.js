import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'
import './helpers'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #2 - add a new product to list', () => {
    it('Should be possible to add a new product to list', () => {
      const wrapper = mount(<GroceryListPart2 />)
      expect(wrapper.find('.new-item').length).toBe({value: 1, msg: 'The New Item button should be rendered'})
      expect(wrapper.find('.add-product').length).toBe({value: 1, msg: 'The Add Product button should be rendered'})

      wrapper.find('.new-item').simulate('change', {target: {value: 'Oranges'}})
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('ul li').length).toBe(
        {value: 2, msg: 'There should be exactly two elements on the groceries list'})

      expect(wrapper.find('ul li').at(0).text()).toBe({value: 'Apples', msg: 'The first item should be \'Apples\''})
      expect(wrapper.find('ul li').at(1).text()).toBe({value: 'Oranges', msg: 'The first item should be \'Oranges\''})
    })
  })
})
