import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhatsYourName from '../exercises/03-WhatsYourName'
import './helpers'

configure({adapter: new Adapter()})

describe("03 - What's Your Name?", () => {
  describe('Task #2 - don\'t greet user if name wasn\'t provided', () => {
    it('Should display welcoming message if user didn\'t provide their name', () => {
      const component = shallow(<WhatsYourName />)

      component.find('input').simulate('change', {target: {value: ''}})
      expect(component.find('p').text()).toBe({
        value: 'Hey there. Enter your name.',
        msg: 'If user didn\'t enter the name (`this.state.name` length is 0), show "Hey there. Enter your name.". ' +
             'See the hint in task\'s description.'})
    })
  })
})
