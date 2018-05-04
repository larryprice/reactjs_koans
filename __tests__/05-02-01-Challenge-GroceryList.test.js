import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'
import './helpers'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #2 - add a new product to list', () => {
    it('Should render required tags like additional button and input', () => {
      const wrapper = shallow(<GroceryListPart2 />)
      expect(wrapper.find('.new-item').length).toBe({value: 1, msg: 'The New Item button should be rendered'})
      expect(wrapper.find('.add-product').length).toBe({value: 1, msg: 'The Add Product button should be rendered'})
    })
  })
})
