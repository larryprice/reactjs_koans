import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryListPart1 from '../exercises/05-Challenge-GroceryList-part-1'
import GroceryListPart2 from '../exercises/05-Challenge-GroceryList-part-2'
import GroceryListPart3 from '../exercises/05-Challenge-GroceryList-part-3'
import GroceryListPart4 from '../exercises/05-Challenge-GroceryList-part-4'

configure({adapter: new Adapter()})

describe('05 - Challenge - Grocery List', () => {
  describe('Task #1 - display a list of groceries', () => {
    it('There should be an unordered list of groceries', () => {
      const wrapper = shallow(<GroceryListPart1 />)
      expect(wrapper.find('li').length).toBe(1)

      expect(wrapper.find('li')[0].text()).toBe('Apples')
    })
  })

  describe('Task #2 - add a new product to list', () => {
    it('Should render required tags like additional button and input', () => {
      const wrapper = shallow(<GroceryListPart2 />)
      expect(wrapper.find('.new-item').length).toBe(1)
      expect(wrapper.find('.add-product').length).toBe(1)
    })

    it('Should be possible to add a new product to list', () => {
      const wrapper = shallow(<GroceryListPart2 />)
      wrapper.find('.new-item').simulate('change', {target: {value: 'Oranges'}})
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('li').length).toBe(2)

      expect(wrapper.find('li')[0].text()).toBe('Apples')
      expect(wrapper.find('li')[1].text()).toBe('Oranges')
    })

    it('Should not be possible to add empty element', () => {
      const wrapper = shallow(<GroceryListPart2 />)
      wrapper.find('.add-product').simulate('click')
      expect(wrapper.find('li').length).toBe(1)
    })
  })

  describe('Task #3 - clearing groceries list', () => {
    it('Should render required tags', () => {
      expect(shallow(<GroceryListPart3 />).find('.clear-list').length).toBe(1)
    })

    it('Should be possible to remove all list items', () => {
      const wrapper = shallow(<GroceryListPart3 />)
      wrapper.find('.clear-list').simulate('click')
      expect(wrapper.find('li').length).toBe(0)
    })
  })

  describe('Task #4 - collecting groceries items', () => {
    it('Should be possible to make the grocery item complete', () => {
      const wrapper = shallow(<GroceryListPart4 />)
      wrapper.find('li').simulate('click')
      expect(wrapper.find('li').length).toBe(1)
      expect(wrapper.find('li.completed').length).toBe(1)
    })
  })
})
