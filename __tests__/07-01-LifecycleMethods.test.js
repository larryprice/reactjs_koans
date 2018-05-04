import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import LifecycleMethodsComponent from '../exercises/07-LifecycleMethods'
import './helpers'

configure({adapter: new Adapter()})

describe('07 - Lifecycle methods', () => {
  describe('Task #1 - emit a console log when the component mounts', () => {
    beforeEach(() => {
      sinon.spy(console, 'log')
    })
    afterEach(() => {
      console.log.restore()
    })

    it('should emit \'I\'m mounted!\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />)

      expect(console.log.calledWith('I\'m mounted!')).toBe(
        {value: true, msg: 'Expected "I\'m mounted!" to be logged to console'})
    })
  })
})
