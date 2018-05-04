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

      expect(console.log.calledWith('I\'m mounted!')).toBe(true)
    })
  })

  describe('Task #2 - emit a console log when the component updates', () => {
    it('should emit \'Updated!\' in developer console', () => {
      const wrapper = shallow(<LifecycleMethodsComponent />)
      wrapper.setState({name: 'Victor'})

      expect(console.log.calledWith('Updated!')).toBe(true)
    })
  })

  describe('Task #3 - emit a console log when the component unmounts', () => {
    it('should emit \'Goodbye, cruel world! :(\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />).unmount()

      expect(console.log.calledWith('Goodbye, cruel world! :(')).toBe(true)
    })
  })

  describe('Task #4 - emit a console log when the props change', () => {
    it('should emit \'Goodbye, cruel world! :(\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />).setProps({name: 'Billy'})

      expect(console.log.calledWith('Updating \'Bob\' to \'Billy\'.')).toBe(true)
    })
  })
})
