import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhatsYourName from '../exercises/03-WhatsYourName'

configure({adapter: new Adapter()})

describe("03 - What's Your Name?", () => {
  describe('Task #1 - greet user', () => {
    it('Should change name in paragraph on name change in input', () => {
      const component = shallow(<WhatsYourName />)

      expect(component.find('p').length).toBe(1)
      expect(component.find('input').length).toBe(1)

      component.find('input').simulate('change', {target: {value: 'XYZ'}})
      expect(component.find('p').text()).toBe('Hello XYZ')

      component.find('input').simulate('change', {target: {value: 'ZYX'}})
      expect(component.find('p').text()).toBe('Hello ZYX')
    })
  })
})
