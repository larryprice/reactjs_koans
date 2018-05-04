import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart3 from '../exercises/05-Challenge-GroceryList-part-3'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #3 - clearing groceries list', () => {
    it('Should render required tags', () => {
      expect(shallow(<GroceryListPart3 />).find('.clear-list').length).toBe(1)
    })
  })
})
