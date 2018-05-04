import React from 'react'
import {render, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart1 from '../exercises/05-Challenge-GroceryList-part-1'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #1 - display a list of groceries', () => {
    it('There should be an unordered list of groceries', () => {
      const wrapper = render(<GroceryListPart1 />)
      expect(wrapper.find('ul li').length).toBe(1)

      expect(wrapper.find('ul li').text()).toBe('Apples')
    })
  })
})
