import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhatsYourName from '../exercises/03-WhatsYourName'

configure({adapter: new Adapter()})

describe("03 - What's Your Name?", () => {
  describe('Task #2 - don\'t greet user if name wasn\'t provided', () => {
    it('Should display welcoming message if user didn\'t provide their name', () => {
      const component = shallow(<WhatsYourName />)

      component.find('input').simulate('change', {target: {value: ''}})
      expect(component.find('p').text()).toBe('Hey there. Enter your name.')
    })
  })
})
