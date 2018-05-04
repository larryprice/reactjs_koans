import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import LifecycleMethodsComponent from '../exercises/07-LifecycleMethods'

configure({adapter: new Adapter()})

describe('07 - Lifecycle methods', () => {
  beforeEach(() => {
    sinon.spy(console, 'log')
  })

  afterEach(() => {
    console.log.restore()
  })

  describe('Task #1 - emit a console log when the component mounts', () => {
    it('should emit \'I\'m mounted!\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />)

      expect(console.log.calledOnce).toBe(true)
      expect(console.log.getCall(0).args[0]).toBe('I\'m mounted!')
    })
  })

  describe('Task #2 - emit a console log when the component updates', () => {
    it('should emit \'Updated!\' in developer console', () => {
      const wrapper = shallow(<LifecycleMethodsComponent />)
      wrapper.setState({name: 'Victor'})

      expect(console.log.calledTwice).toBe(true)
      expect(console.log.getCall(1).args[0]).toBe('Updated!')
    })
  })

  describe('Task #3 - emit a console log when the component unmounts', () => {
    it('should emit \'Goodbye, cruel world! :(\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />).unmount()

      expect(console.log.calledTwice).toBe(true)
      expect(console.log.getCall(1).args[0]).toBe('Goodbye, cruel world! :(')
    })
  })
})
