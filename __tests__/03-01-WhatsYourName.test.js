import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhatsYourName from '../exercises/03-WhatsYourName'
import './helpers'

configure({adapter: new Adapter()})

describe("03 - What's Your Name?", () => {
  describe('Task #1 - greet user', () => {
    it('Should change name in paragraph on name change in input', () => {
      const component = shallow(<WhatsYourName />)

      expect(component.find('p').length).toBe(
        {value: 1, msg: 'There should be only one `p` element rendered by the component'})
      expect(component.find('input').length).toBe(
        {value: 1, msg: 'There should be only one `input` rendered by the component'})

      component.find('input').simulate('change', {target: {value: 'XYZ'}})
      expect(component.find('p').text()).toBe({
        value: 'Hello XYZ',
        msg: 'After changing name in input, I should see the change in `p` element\'s content.' +
             ' In other words: `this.state.name` should change.'})

      component.find('input').simulate('change', {target: {value: 'ZYX'}})
      expect(component.find('p').text()).toBe({
        value: 'Hello ZYX',
        msg: 'After changing name in input for the second time, we should see the change in `p` element. ' +
             'In other words: `this.state.name` should change.'})
    })
  })
})
