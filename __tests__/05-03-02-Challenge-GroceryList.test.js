import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart3 from '../exercises/05-Challenge-GroceryList-part-3'
import './helpers'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #3 - clearing groceries list', () => {
    it('Should be possible to remove all list items', () => {
      const wrapper = shallow(<GroceryListPart3 />)
      wrapper.find('.clear-list').simulate('click')
      expect(wrapper.find('ul li').length).toBe(
        {value: 0, msg: 'There should be exactly zero elements on the groceries list'})
    })
  })
})
